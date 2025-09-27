import React, { ReactNode } from "react";

import { IEducationItem, ITimelineItem } from "./Timeline.types";
import "./Timeline.scss";

interface ITimelineProps {
  items: ITimelineItem[] | IEducationItem[];
}

function Timeline({ items }: ITimelineProps) {
  return (
    <ul className="timeline">
      {items.sort(compare)
        .map((item: IEducationItem | ITimelineItem) => (
          <li key={item.title + item.period} className="item">
            <h4 className="title">{item.title}</h4>
            {item.displayWebsite && (
              <h5 className="website">
                <a href={item.website} target="_blank" rel="noreferrer">{item.website}</a>
              </h5>
            )}
            <h5 className="period">{item.period}</h5>
            <p className="institution">
              {prepareInstitutionContent(item)}
            </p>
            {item.descriptions && (
              <ul className="description">
                {item.descriptions.map((description: (string | ReactNode), i: number) => <li>{description}</li>)}
              </ul>
            )}
          </li>
        ))
      }
    </ul>
  );
}

function compare(a: ITimelineItem, b: ITimelineItem) {
  return b.priority - a.priority;
}

function prepareInstitutionContent(item: ITimelineItem) {
  const content = item.website
    ? <a href={item.website} target="_blank" rel="noreferrer">{item.institution}</a>
    : item.institution;

  let location = "";

  if (item.locality) {
    location += `, ${item.locality}`;
  }

  if (item.country) {
    location += `, ${item.country}`;
  }

  return (
    <>
      <b>{content}</b>
      {location}
    </>
  );
}

export default Timeline;
