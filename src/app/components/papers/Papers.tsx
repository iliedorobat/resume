import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { IPaperItem } from "src/app/shared/timeline/Timeline.types";
import { scrollDown, scrollTop } from "src/app/common/utils";
import Section from "src/app/shared/section/Section";

import { LABELS } from "src/app/common/strings";
import { PAPERS_ITEMS } from "./Papers.config";
import { PATHS } from "src/app/common/paths.const";

import "./Papers.scss";

function Papers() {
  const location = useLocation();
  const ref = useRef({} as HTMLElement);

  useEffect(() => {
    if (location?.pathname === PATHS.PAPERS) {
      scrollDown(ref);
      scrollTop();
    }
  });

  return (
    <Section ref={ref} title={LABELS.papers}>
      <ul className="papers">
        {PAPERS_ITEMS.map((paper: IPaperItem) => (
          <li key={paper.title}>
            <h5 className="authors">{paper.authors}</h5>
            <h4 className="title">{getTitle(paper)}</h4>
            <h5 className="publisher">{paper.publisher}</h5>
            <h5 className="period">{paper.period}</h5>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function getTitle(item: IPaperItem) {
  if (item.doi) {
    return <a href={item.doi} target="_blank" rel="noreferrer">{item.title}</a>;
  } else if (item.website) {
    return <a href={item.website} target="_blank" rel="noreferrer">{item.title}</a>;
  }

  return item.title;
}

export default Papers;
