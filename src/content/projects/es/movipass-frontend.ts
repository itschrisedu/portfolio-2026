import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia["movipass-frontend"].images;

export default {
  title: "MoviPass Frontend",
  theme: "light",
  tags: ["react", "javascript", "css"],
  source: projectSources["movipass-frontend"],
  description:
    "Frontend de la plataforma de pasajes y pases de tránsito MoviPass. Permite a los pasajeros buscar rutas de transporte, comprar billetes y ver sus pases activos con código QR en tiempo real.<br/><br/>Construido con React, TypeScript y Tailwind CSS, incluye transiciones de interfaz fluidas, diseño totalmente adaptivo e integración mock de pasarela de pago para flujos de reserva simplificados.",
  components: images.map((image) => ({
    type: "media" as const,
    props: {
      type: "image" as const,
      src: image.src,
      alt: image.alt,
      caption: image.alt,
    },
  })),
} as const satisfies ProjectContent;
