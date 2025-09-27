import { ReactNode } from "react";

export enum DegreeType {
  BACHELOR = "BACHELOR",
  MASTER = "MASTER",
  MSC = "MSc",
  PHD = "PHD",
}

export interface ITimelineItem {
  country?: string;
  descriptions?: (string | ReactNode)[];
  displayWebsite?: boolean;
  institution?: string;
  locality?: string;
  period?: string;
  priority: number;
  title: string;
  website?: string;
}

export interface IEducationItem extends ITimelineItem {
  title: DegreeType;
}

export interface IPaperItem extends ITimelineItem {
  authors: string[],
  country?: string,
  doi?: string,
  issn?: string,
  locality?: string,
  period: string,
  priority: number,
  publisher: string,
  title: string,
  website?: string,
}
