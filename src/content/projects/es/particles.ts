import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebGL Particles",
  theme: "dark",
  tags: ["ogl", "javascript", "glsl"],
  live: "https://particles.david-hckh.com/",
  videoBorder: false,
  description:
    "Un proyecto experimental de WebGL con OGL.js, donde las partículas se animan mediante fórmulas matemáticas y funciones de ruido.<br/><br/>Las partículas se mueven con fluidez entre distintas formas 3D que se transforman unas en otras.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "Sistema de partículas animado",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "Forma de nodo",
        caption: "Forma de nodo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "Forma de donut",
        caption: "Forma de donut",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles2,
        alt: "Forma de esfera",
        caption: "Forma de esfera",
      },
    },
  ],
} as const satisfies ProjectContent;