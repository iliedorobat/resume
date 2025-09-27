import React from "react";
import { Link } from "react-router-dom";

import { ISideConfig } from "./About.config";
import { PATHS } from "src/app/common/paths.const";

interface IRenderSideProps {
  sectionConfig: ISideConfig[];
}

function RenderSide({ sectionConfig }: IRenderSideProps) {
  return (
    <ul>
      {sectionConfig.map((item: ISideConfig, i: number) => (
        <li key={item.title}>
          <i className="bi bi-chevron-right"></i>
          <span className="title">
            {item.title}:
          </span>
          <span className="value">
            {item.isAnchor ? (
              <Link to={PATHS.HOME}>
                {item.value}
              </Link>
            ) : item.value}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default RenderSide;
