import React, { ReactNode } from "react";

import { ITimelineItem } from "src/app/shared/timeline/Timeline.types";
import { LABELS } from "src/app/common/strings";

const AWARDS_ITEMS: ITimelineItem[] = [
  {
    title: "Selected Paper",
    institution: LABELS.icdsConference,
    period: "2019",
    website: "https://www.iaria.org/conferences2019/AwardsICDS19.html",
    descriptions: [
      <>
        The paper <b>"Quality of Life Index Analysis for the Case of Romanian Regions"</b> <a
        href="https://www.iaria.org/conferences2019/AwardsICDS19.html" target="_blank" rel="noreferrer"
        >was selected on the basis of its contents as one of the best.</a>
      </>
    ],
    priority: 2,
  },
  {
    title: "Diploma of Excellence",
    institution: LABELS.ub,
    period: "08/05/2014",
    website: "https://www.ub.ro/",
    descriptions: [
      <>
        Mention for presenting the paper <b>"Making a socializing site for accountancy specialists"</b> within
        the "National Session of Student Scientific Communications - The Role of Mathematics and Informatics
        in the Context of Current Transformations, 6th Edition, May 8, 2014".
        <br/>
        <b>Organizer:</b> <a href="https://www.ub.ro/" target="_blank" rel="noreferrer">{LABELS.ub}</a>
      </>
    ],
    priority: 1,
  },
  {
    title: "Award",
    institution: LABELS.antiDrugAgency,
    period: "04/04/2012",
    website: "https://ana.gov.ro/",
    descriptions: [
      <>
        2nd place for participation in the slogan contest of the campaign <b>"Too rebellious to be lead".</b>
        <br/>
        <b>Organizers:</b> MAI, {LABELS.antiDrugAgency}
      </>
    ],
    priority: 0,
  },
];

const DRIVING_LICENSE_ITEMS: ITimelineItem[] = [
  {
    title: "B Category",
    period: "09/09/2009 – CURRENT",
    priority: 0,
  },
];

const ORGANISATIONAL_SKILLS_ITEMS: ITimelineItem[] = [
  {
    title: "Leadership",
    institution: LABELS.luxoft,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "14/05/2018 – CURRENT",
    website: "https://www.luxoft.com/",
    descriptions: [
      <>
        I had the opportunity to <b>lead and develop the Tortuga QA Dashboard project from scratch,
        managing the entire process</b> from resource planning and timeline definition to task allocation.
        I coordinated the implementation of requirements, progress monitoring, and constant communication
        with stakeholders, ensuring the final quality of the deliverable and the deployment.
      </>,
      <>
        <b>I led various teams</b> that developed Tortuga QA Dashboard, Nexus Dashboard,
        Intersight projects, and Cisco ACI vCenter Plugin.
      </>,
      <>
        <b>I conducted hundreds of technical interviews</b> for JavaScript developer positions for
        all seniority levels.
      </>
    ],
    priority: 1,
  },
  {
    title: "Leadership",
    institution: LABELS.upb,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "2017",
    website: "https://upb.ro/",
    descriptions: [
      <>
        <b>I led a team of 2 students from University Politehnica of Bucharest</b> to identify and implement
        the necessary solutions for translating data on cultural assets from Romania into semantic data.
      </>
    ],
    priority: 0,
  },
];

const PROJECTS: ITimelineItem[] = [
  {
    title: "OPTIMizarea rezultatelor cercetării aplicative a doctoranzilor și cercetatorilor postdoctorat – OPTIM Research",
    institution: LABELS.upbNew,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "10/2022 – 09/2023",
    website: "https://upb.ro/",
    descriptions: [
      "POCU financing based on Contract no. 62461/03.06.2022 - SMIS code: 153735 for consolidating " +
      "the results of the research carried out within the doctoral studies."
    ],
    priority: 5,
  },
  {
    title: "European Life Index - eLife",
    descriptions: [
      <>
        <a href="https://life-index.eu/" target="_blank" rel="noreferrer">eLife</a> is a powerful tool
        that provides a visual interface through which users to easily observe and analyze the factors
        influencing the quality of life of the population in EU member states and the UK, which left the
        Eurozone in early 2020.
      </>,
      <>
        The data used by eLife is projected through <a href="https://github.com/iliedorobat/QoLI-Framework"
        target="_blank" rel="noreferrer">eLIF (European Life Index Framework)</a>, a framework that automates
        the collection, processing, and aggregation of data analyzed both in the form of 8+1 dimensions and
        into a single global indicator, QoLI (Quality of Life Index).
      </>,
      <TechStack techStack={<><b>JavaScript, TypeScript, Angular 18,</b> ChartJS, <b>Java, Grizzly</b></>} />
    ],
    website: "https://life-index.eu/",
    displayWebsite: true,
    priority: 4,
  },
  {
    title: "Temporal Expression Normalization for spaCy (TeNs)",
    descriptions: [
      <>
        <a href="https://github.com/iliedorobat/timespan-normalization-spacy" target="_blank"
        rel="noreferrer">TeNs</a> is a powerful <b>pipeline component for spaCy that seamlessly identifies
        and parses date entities in text.</b> It leverages <a href="https://github.com/iliedorobat/timespan-normalization"
        target="_blank" rel="noreferrer">TeN Framework</a> to recognize a wide variety of date formats
        using an extensive set of regular expressions (RegEx), ensuring robust and adaptable date
        extraction across diverse textual sources.
      </>,
      <TechStack techStack={<><b>Python, spaCy, Py4J</b></>} />
    ],
    // website: "https://pypi.org/project/temporal-normalization-spacy/",
    website: "https://github.com/iliedorobat/timespan-normalization-spacy",
    displayWebsite: true,
    priority: 3,
  },
  {
    title: "Temporal Expression Normalization Framework (TeN Framework)",
    descriptions: [
      <>
        <a href="https://github.com/iliedorobat/timespan-normalization" target="_blank"
        rel="noreferrer">TeN Framework</a> is a system designed to standardize and enrich historical
        date representations by <b>applying advanced regular expressions to identify various non-standard
        temporal formats.</b> It then replaces them with DBpedia references, <b>ensuring consistency and
        enriching data with contextual information.</b>
      </>,
      <>
        For instance, an expression such as "1/4 sec. XX" (denoting "the first quarter of the 20th century")
        is automatically mapped to <a href="https://dbpedia.org/page/20th_century" target="_blank"
        rel="noreferrer">https://dbpedia.org/page/20th_century</a>.
      </>,
      <TechStack techStack={<><b>Java</b></>} />
    ],
    website: "https://github.com/iliedorobat/timespan-normalization",
    displayWebsite: true,
    priority: 2,
  },
  {
    title: "Enriching The Digital Representation of Cultural Heritage Objects - eCHO Framework",
    descriptions: [
      <>
        <a href="https://github.com/iliedorobat/enriching-cultural-heritage-metadata" target="_blank"
           rel="noreferrer">eCHO Framework</a> is a tool that enables cultural institutions to seamlessly
        migrate <b>LIDO-compliant metadata</b> and their <b>DSpace archives</b> to <b>Linked Open Data
        (LOD)</b> while preserving the depth and richness of the original data. Designed to bridge the
        gap between traditional metadata standards and the semantic web, eCHO ensures that structured
        information remains <b>intact, interoperable, and reusable within a linked data ecosystem.</b>
      </>,
      <TechStack techStack={<><b>Java, RDF, OWL, EDM, Apache Jena</b></>} />
    ],
    website: "https://github.com/iliedorobat/enriching-cultural-heritage-metadata",
    displayWebsite: true,
    priority: 1,
  },
  {
    title: "Intelligent Querying Framework for Semantic Data Stores - onIQ",
    descriptions: [
      <>
        <a href="https://github.com/iliedorobat/onIQ" target="_blank" rel="noreferrer"
        >onIQ</a> is a <b>Natural Language Query Formalization system</b>, which enable the semantic <b>parsing
        of natural language queries and their transformation into SPARQL queries.</b> The system is designed
        to simplify graph database queries, making them accessible not only to experienced professionals but
        also to students, archivists, librarians, and even the general public, who may lack the technical
        expertise to construct such queries.
      </>,
      <TechStack techStack={<><b>Python, spaCy</b></>} />
    ],
    website: "https://github.com/iliedorobat/onIQ",
    displayWebsite: true,
    priority: 0,
  },
]

interface ITechStackProps {
  techStack: string | ReactNode;
}

function TechStack({ techStack }: ITechStackProps) {
  return (
    <><b>{LABELS.techStack}:</b> {techStack}</>
  );
}

export {
  AWARDS_ITEMS,
  DRIVING_LICENSE_ITEMS,
  ORGANISATIONAL_SKILLS_ITEMS,
  PROJECTS,
};
