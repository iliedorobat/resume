import React, { JSX, ReactNode, Ref } from "react";
import { Row } from "react-bootstrap";

import "./Section.scss";

export interface ISection {
  children?: ReactNode;
  className?: string;
  isSubsection?: boolean;
  ref?: Ref<HTMLElement>;
  title?: string | ReactNode;
}

function Section({ children, className, title, isSubsection, ref }: ISection): JSX.Element {
  return (
    <section ref={ref} className={getSectionClassName(className, isSubsection)}>
      {title ? (
        !isSubsection ? (
          <div className="title-container d-flex justify-content-center">
            <h2 className="margin-top-large margin-bottom-xxlarge">{title}</h2>
          </div>
        ) : <h3 className="margin-top-large">{title}</h3>
      ) : null}
      <Row className={isSubsection ? "margin-top-large" : ""}>
        {children}
      </Row>
    </section>
  );
}

function getSectionClassName(className: string | undefined, isSubsection: boolean | undefined): string | undefined {
  if (isSubsection) {
    return className ? `${className} subsection` : "subsection";
  }

  return className;
}

export default Section;
