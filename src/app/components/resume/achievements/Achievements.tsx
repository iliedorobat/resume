import React from "react";
import { Col } from "react-bootstrap";

import Section from "src/app/shared/section/Section";
import Timeline from "src/app/shared/timeline/Timeline";
import { useScroll } from "src/app/common/hooks";

import { AWARDS_ITEMS, DRIVING_LICENSE_ITEMS, ORGANISATIONAL_SKILLS_ITEMS, PROJECTS } from "./Achievements.cofig";
import { LABELS } from "src/app/common/strings";

function Achievements() {
  const {awardsRef, projectsRef} = useScroll();

  return (
    <Section className="achivements-container" title={LABELS.achievements}>
      <Col md={6}>
        <Section ref={projectsRef} title={LABELS.projects} isSubsection={true}>
          <Timeline items={PROJECTS} />
        </Section>
      </Col>
      <Col md={6}>
        <Section ref={awardsRef} title={LABELS.awards} isSubsection={true}>
          <Timeline items={AWARDS_ITEMS} />
        </Section>
        <Section title={LABELS.organisationalSkills} isSubsection={true}>
          <Timeline items={ORGANISATIONAL_SKILLS_ITEMS} />
        </Section>
        <Section title={LABELS.drivingLicense} isSubsection={true}>
          <Timeline items={DRIVING_LICENSE_ITEMS} />
        </Section>
      </Col>
    </Section>
  );
}

export default Achievements;