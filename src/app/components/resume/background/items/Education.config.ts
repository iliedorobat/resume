import { DegreeType, IEducationItem } from "src/app/shared/timeline/Timeline.types";
import { LABELS } from "src/app/common/strings";

const EDUCATION_ITEMS: IEducationItem[] = [
  {
    title: DegreeType.PHD,
    institution: LABELS.upbNew,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "01/10/2017 – 2023",
    website: "https://upb.ro/",
    priority: 4,
  },
  {
    title: DegreeType.MSC,
    institution: LABELS.upb,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "01/10/2015 – 2017",
    website: "https://upb.ro/",
    priority: 3,
  },
  {
    title: DegreeType.BACHELOR,
    institution: LABELS.ub,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "01/10/2011 – 2014",
    website: "https://www.ub.ro/",
    priority: 2,
  },
  {
    title: DegreeType.MASTER,
    institution: LABELS.ub,
    locality: LABELS.bacau,
    country: LABELS.romania,
    period: "01/10/2010 – 2012",
    website: "https://www.ub.ro/",
    priority: 1,
  },
  {
    title: DegreeType.BACHELOR,
    institution: LABELS.ub,
    locality: LABELS.bacau,
    country: LABELS.romania,
    period: "01/10/2007 – 2010",
    website: "https://www.ub.ro/",
    priority: 0,
  },
];

export { EDUCATION_ITEMS };
