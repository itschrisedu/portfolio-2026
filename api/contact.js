import "dotenv/config";
import nodemailer from "nodemailer";

function sanitize(value) {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").replace(/[<>]/g, "").trim();
}

function isValidEmail(email) {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  if ((normalized.match(/@/g) || []).length !== 1) return false;
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(normalized);
}

async function getTransporter() {
  const hasSmtp = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

  if (hasSmtp) {
    return {
      transporter: nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }),
      previewUrl: undefined,
      usingTestAccount: false,
    };
  }

  if (process.env.NODE_ENV !== "production") {
    const testAccount = await nodemailer.createTestAccount();
    return {
      transporter: nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      }),
      previewUrl: undefined,
      usingTestAccount: true,
    };
  }

  throw new Error("SMTP credentials not configured.");
}

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.status(200).json({ status: "API is running. Use POST to submit contact form." });
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const name = sanitize(body.name || "");
    const email = sanitize(body.email || "").toLowerCase();
    const phone = sanitize(body.phone || "");
    const subject = sanitize(body.subject || "");
    const message = sanitize(body.message || "");
    const gotcha = body._gotcha;

    // Honeypot for bots
    if (gotcha) {
      res.status(200).json({ success: true, message: "OK" });
      return;
    }

    if (!name || !email || !message) {
      res.status(400).json({ success: false, error: "Name, email, and message are required." });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({ success: false, error: "Invalid email address." });
      return;
    }

    const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;
    const recipientAddress = process.env.MAIL_TO || fromAddress;

    if (!fromAddress || !recipientAddress) {
      res.status(500).json({ success: false, error: "MAIL_FROM or MAIL_TO is not configured." });
      return;
    }

    const { transporter, usingTestAccount } = await getTransporter();

    const mailOptions = {
      from: `"${name}" <${fromAddress}>`,
      to: recipientAddress,
      subject: `New Portfolio Lead: ${subject || "Contact Form"}`,
      replyTo: email,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "Not provided"}\n` +
        `Subject: ${subject || "Not provided"}\n\n` +
        `Message:\n${message}`,
      html: [
        '<div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:680px;margin:0 auto;border:1px solid #e9eef7;border-radius:12px;overflow:hidden">',
        '<div style="background:linear-gradient(90deg,#0b1730,#0d2b4d);padding:18px 22px;color:#fff;font-weight:700">Nuevo mensaje desde tu portfolio</div>',
        '<div style="padding:20px;color:#111827;line-height:1.55">',
        `<p style="margin:0 0 8px"><strong>Nombre:</strong> ${name}</p>`,
        `<p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>`,
        `<p style="margin:0 0 8px"><strong>Telefono:</strong> ${phone || "Not provided"}</p>`,
        `<p style="margin:0 0 14px"><strong>Asunto:</strong> ${subject || "Not provided"}</p>`,
        '<h3 style="margin:0 0 10px;font-size:16px">Mensaje</h3>',
        `<p style="white-space:pre-wrap;margin:0">${message}</p>`,
        '</div>',
        '</div>',
      ].join("\n"),
    };

    const info = await transporter.sendMail(mailOptions);

    if (usingTestAccount) {
      const previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
      if (previewUrl) {
        console.log("Ethereal preview URL:", previewUrl);
      }
    }

    // Optional auto-reply to confirm receipt
    try {
      await transporter.sendMail({
        from: `"Christopher Paucar" <${fromAddress}>`,
        to: email,
        replyTo: fromAddress,
        subject: "Gracias por contactarme",
        text:
          `Hola ${name},\n\n` +
          "Gracias por escribirme. Recibi tu mensaje y te respondere pronto.\n\n" +
          "Saludos,\nChristopher Paucar",
      });
    } catch (autoReplyError) {
      console.error("Auto-reply error:", autoReplyError);
    }

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      error: `Failed to send message. ${error instanceof Error ? error.message : String(error)}`,
    });
  }
}
