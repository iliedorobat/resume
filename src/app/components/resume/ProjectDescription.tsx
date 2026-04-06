import { ReactNode } from "react";
import { LABELS } from "src/app/common/strings";

import "./ProjectDescription.scss";

export interface IProjectDescriptionProps {
  techStack?: string | ReactNode;
  text?: string | ReactNode;
}

function ProjectDescription({ techStack, text }: IProjectDescriptionProps) {
  if (!text && !techStack) {
    return null;
  }

  return (
    <>
      {text && <div className="tech-description">{text}</div>}
      {techStack && <div className="tech-stack"><b>{LABELS.techStack}:</b> {techStack}</div>}
    </>
  );
}

export default ProjectDescription;
