import React from "react";

import { DegreeType, IEducationItem } from "src/app/shared/timeline/Timeline.types";
import ProjectDescription from "src/app/components/resume/ProjectDescription";
import { LABELS } from "src/app/common/strings";

const EDUCATION_ITEMS: IEducationItem[] = [
  {
    title: DegreeType.PHD,
    institution: LABELS.upbNew,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "01/10/2017 – 2023",
    website: "https://upb.ro/",
    descriptions: [
      <FieldOfStudy mainField={LABELS.computerScience} />,
      <ProjectDescription text={
        <>
          Conducted research in <b>Semantic Web technologies, Linked Data, Knowledge Graphs,
          and Natural Language Processing (NLP),</b> with hands-on experience designing
          end-to-end semantic data solutions. Key contributions include:<br/>
          <ul className="details">
            <li>Designed the <b>Quality of Life Index (QoLI)</b>, a multidimensional analytical
              indicator leveraging Open Data sources to model and evaluate population well-being.</li>
            <li>Architected and implemented the <b>eCHO Framework</b>, enabling large-scale
              migration of structured cultural heritage datasets from XML to RDF/Linked Data,
              improving interoperability and semantic integration.</li>
            <li>Developed <b>TeNs, a Romanian temporal expression normalization plugin</b> that
              performs linguistic analysis and semantic standardization for temporal reasoning
              and knowledge graph enrichment.</li>
            <li>Built a <b>Natural Language Query Formalization system</b>, which enable the semantic
              parsing of natural language queries and their transformation into SPARQL queries.</li>
          </ul>
        </>
      } />,
    ],
    priority: 4,
  },
  {
    title: DegreeType.MSC,
    institution: LABELS.upb,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "01/10/2015 – 2017",
    website: "https://upb.ro/",
    descriptions: [
      <FieldOfStudy mainField={LABELS.computerScience} />,
      <ProjectDescription
        text={
          <>
            Conducted research in <b>Semantic Web technologies, Linked Data, and Knowledge
            Graphs</b>, leading to the development of a Semantic Web–based tourism application
            enabling semantic data integration and exploration.
          </>
        }
      />
    ],
    priority: 3,
  },
  {
    title: DegreeType.BACHELOR,
    institution: LABELS.ub,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "01/10/2011 – 2014",
    website: "https://www.ub.ro/",
    descriptions: [
      <FieldOfStudy mainField={LABELS.computerScience} />
    ],
    priority: 2,
  },
  {
    title: DegreeType.MASTER,
    institution: LABELS.ub,
    locality: LABELS.bacau,
    country: LABELS.romania,
    period: "01/10/2010 – 2012",
    website: "https://www.ub.ro/",
    descriptions: [
      <FieldOfStudy mainField={LABELS.accountancy} />
    ],
    priority: 1,
  },
  {
    title: DegreeType.BACHELOR,
    institution: LABELS.ub,
    locality: LABELS.bacau,
    country: LABELS.romania,
    period: "01/10/2007 – 2010",
    website: "https://www.ub.ro/",
    descriptions: [
      <FieldOfStudy mainField={LABELS.accountancy} />
    ],
    priority: 0,
  },
];

function FieldOfStudy({ mainField }: { mainField: string }) {
  if (!mainField) {
    return null;
  }

  return (
    <div>
      <b>{LABELS.fieldOfStudy}:</b> {mainField}
    </div>
  );
}

export { EDUCATION_ITEMS };
