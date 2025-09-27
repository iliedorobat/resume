import { ITimelineItem } from "src/app/shared/timeline/Timeline.types";
import { LABELS } from "src/app/common/strings";

const LANGUAGE_SKILLS_ITEMS: ITimelineItem[] = [
  {
    title: "Romanian: Mother tongue",
    priority: 1,
  },
  {
    title: "English: B2",
    priority: 0,
  },
];

const NETWORKS_ITEMS: ITimelineItem[] = [
  {
    title: "Member Technical Program Committee",
    institution: LABELS.icdsConference,
    period: "2020 – CURRENT",
    website: "https://www.iaria.org/conferences/ICDS.html",
    priority: 2,
  },
  {
    title: "Member Technical Program Committee",
    institution: LABELS.cikmConference,
    period: "2020 – 2022",
    website: "http://www.cikmconference.org/",
    priority: 1,
  },
  {
    title: "Europeana Network Association Member",
    institution: LABELS.europeana,
    period: "2019 – CURRENT",
    website: "https://www.europeana.eu/en",
    priority: 0,
  },
];

const SOCIAL_ACTIVITIES_ITEMS: ITimelineItem[] = [
  {
    title: LABELS.volunteer,
    institution: LABELS.antiDrugAgency,
    locality: LABELS.bacau,
    country: LABELS.romania,
    period: "05/01/2012 – 30/06/2012",
    website: "https://ana.gov.ro/",
    priority: 0,
  },
]

export {
  LANGUAGE_SKILLS_ITEMS,
  NETWORKS_ITEMS,
  SOCIAL_ACTIVITIES_ITEMS,
};
