import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Sharkie",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://sharkie.david-hckh.com/",
  source: "https://github.com/davidhckh/sharkie-game",
  description:
    "Sharkie es un juego de aventura submarina en 2D, desarrollado con JavaScript puro y HTML5 Canvas.<br/><br/>El proyecto se basa en principios de programación orientada a objetos y usa clases propias para personajes, enemigos y sistemas del juego, complementado con animaciones fluidas, sistemas de combate y fondos parallax en varias capas.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "Gameplay",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Personajes y diseño del mapa",
        caption: "Personajes y diseño del mapa",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Combate contra jefe",
        caption: "Combate contra jefe",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "Misión",
        caption: "Misión",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie3,
        alt: "Pantalla de victoria",
        caption: "Pantalla de victoria",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "Pantalla de derrota",
        caption: "Pantalla de derrota",
      },
    },
  ],
} as const satisfies ProjectContent;