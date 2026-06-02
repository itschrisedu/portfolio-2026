const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "your@email.com";

export const social = [
  { url: `mailto:${contactEmail}`, name: "mail" },
  { url: "https://github.com/itschrisedu", name: "github" },
  { url: "https://www.linkedin.com/in/christopher-paucar-949a32234/", name: "linkedin" },
  { url: "https://www.instagram.com/its.chrisedu/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
