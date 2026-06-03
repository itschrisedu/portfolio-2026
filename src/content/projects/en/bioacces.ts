import { projectMedia, projectSources } from "../media";

import type { ProjectContent } from "../../types";

const images = projectMedia.bioacces.images;

export default {
  title: "BioAccess",
  theme: "dark",
  tags: ["python", "javascript"],
  source: projectSources.bioacces,
  description:
    "Django-based biometric web application for registering users, capturing face datasets, retraining models, and verifying identity through a webcam.<br/><br/>Uses Haar Cascade detection, PCA + SVM pipeline, separate admin and user modes, and local storage for datasets and trained models.",
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
