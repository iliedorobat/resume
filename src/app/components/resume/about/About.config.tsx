import { ReactNode } from "react";

import { LABELS } from "src/app/common/strings";

export interface ISideConfig {
  isAnchor?: boolean;
  title: string;
  value: string | ReactNode;
}

const SIDE_LEFT: ISideConfig[] = [
  {
    title: LABELS.location,
    value: LABELS.bucharestRomania,
  },
  {
    title: LABELS.email,
    value: "iliecristiandorobat@gmail.com",
  },
  {
    title: LABELS.website,
    value: "https://iliedorobat.ro/",
    isAnchor: true,
  },
  {
    title: LABELS.github,
    value: <a href="https://github.com/iliedorobat" target="_blank" rel="noreferrer">https://github.com/iliedorobat</a>,
  },
];

const SIDE_RIGHT: ISideConfig[] = [
  {
    title: LABELS.degree,
    value: LABELS.phd + " in Computer Science",
  },
  {
    title: LABELS.owner,
    value: <a href="https://life-index.eu/" target="_blank" rel="noreferrer">https://life-index.eu/</a>,
  }
];

const TECH_STACK: ISideConfig[] = [
  {
    title: LABELS.principalTechStack,
    value: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "React",
      "Angular",
      "Flask",
      "Spring Boot",
      "spaCy",
    ].join(", "),
  },
];

export {
  SIDE_LEFT,
  SIDE_RIGHT,
  TECH_STACK,
};
