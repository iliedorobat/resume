import React from "react";
import { Col } from "react-bootstrap";
import Section from "src/app/shared/section/Section";
import Timeline from "src/app/shared/timeline/Timeline";

import { useScroll } from "src/app/common/hooks";

import { EDUCATION_ITEMS } from "./items/Education.config";
import { EXPERIENCE_ITEMS } from "./items/Experience.config";
import { LABELS } from "src/app/common/strings";
import { LANGUAGE_SKILLS_ITEMS, NETWORKS_ITEMS, SOCIAL_ACTIVITIES_ITEMS } from "./items/Activities.config";

function Background() {
  const {eduRef, expRef} = useScroll();

  return (
    <Section className="background-container" title={LABELS.professionalPath}>
      <Col md={6}>
        <Section ref={expRef} title={LABELS.experience} isSubsection={true}>
          <Timeline items={EXPERIENCE_ITEMS} />
        </Section>
      </Col>
      <Col md={6}>
        <Section ref={eduRef} title={LABELS.education} isSubsection={true}>
          <Timeline items={EDUCATION_ITEMS} />
        </Section>
        <Section title={LABELS.languageSkills} isSubsection={true}>
          <Timeline items={LANGUAGE_SKILLS_ITEMS} />
        </Section>
        <Section title={LABELS.networksAndMemberships} isSubsection={true}>
          <Timeline items={NETWORKS_ITEMS} />
        </Section>
        <Section title={LABELS.socialActivities} isSubsection={true}>
          <Timeline items={SOCIAL_ACTIVITIES_ITEMS} />
        </Section>
      </Col>
    </Section>
  )
}

export default Background;
