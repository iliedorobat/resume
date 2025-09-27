import { LABELS } from "../common/strings";
import { PATHS } from "../common/paths.const";

export interface IHeaderItem {
  order: number;
  path: string;
  title: string;
}

export interface IHeaderItems {
  about: IHeaderItem,
  awards: IHeaderItem,
  education: IHeaderItem,
  experience: IHeaderItem,
  projects: IHeaderItem,
  // home: IHeaderItem,
  papers: IHeaderItem,
}

const HEADER_ITEMS: IHeaderItems = {
  // home: {
  //   path: PATHS.HOME,
  //   title: LABELS.home,
  //   order: 0,
  // },
  about: {
    path: PATHS.ABOUT,
    title: LABELS.about,
    order: 1,
  },
  education: {
    path: PATHS.EDUCATION,
    title: LABELS.education,
    order: 2,
  },
  experience: {
    path: PATHS.EXPERIENCE,
    title: LABELS.experience,
    order: 3,
  },
  projects: {
    path: PATHS.PROJECTS,
    title: LABELS.projects,
    order: 4,
  },
  awards: {
    path: PATHS.AWARDS,
    title: LABELS.awards,
    order: 5,
  },
  papers: {
    path: PATHS.PAPERS,
    title: LABELS.papers,
    order: 6,
  },
};

const HEADER_ITEMS_LIST: IHeaderItem[] = Object.values(HEADER_ITEMS)
  .sort((a: IHeaderItem, b: IHeaderItem) => a.order - b.order);

export {
  HEADER_ITEMS,
  HEADER_ITEMS_LIST,
};
