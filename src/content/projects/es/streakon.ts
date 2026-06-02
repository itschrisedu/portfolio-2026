import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn ayuda a grupos pequeños a mantener hábitos diarios mediante streaks compartidos y check-ins sencillos.<br/><br/>La app fue diseñada con foco en pocas fricciones, uso móvil y funciones sociales ligeras, usando Next.js, Node.js, PostgreSQL y Redis.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Streaks individuales y grupales",
        caption: "Streaks individuales y grupales",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Progreso del streak",
        caption: "Progreso del streak",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Animar a tus amigos",
        caption: "Animar a tus amigos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Flujo de invitaciones",
        caption: "Flujo de invitaciones",
      },
    },
  ],
} as const satisfies ProjectContent;