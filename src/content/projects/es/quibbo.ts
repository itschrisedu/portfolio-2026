import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Quibbo",
  theme: "light",
  tags: ["three", "node", "kubernetes", "redis", "postgresql"],
  videoBorder: true,
  description:
    "Quibbo es una plataforma para juegos multijugador rápidos por turnos. Combina matchmaking, avatares 3D personalizables e integración de cuentas con un sistema de ranking basado en ELO.<br/><br/>El proyecto comenzó como un experimento técnico y evolucionó hasta convertirse en un sistema escalable para probar nuevas ideas de juego.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "Interfaz de usuario",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Creador de avatares",
        caption: "Creador de avatares",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Tic-Tac-Toe multijugador",
        caption: "Tic-Tac-Toe multijugador",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Distintos minijuegos",
        caption: "Distintos minijuegos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Variaciones de avatar",
        caption: "Variaciones de avatar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "Diseño responsivo",
        caption: "Diseño responsivo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo5,
        alt: "Tema oscuro",
        caption: "Tema oscuro",
      },
    },
  ],
} as const satisfies ProjectContent;