import React from "react";
import { Col } from "react-bootstrap";

import RenderSide from "./RenderSide";
import Section from "src/app/shared/section/Section";
import { useScroll } from "src/app/common/hooks";

import { LABELS } from "src/app/common/strings";
import { SIDE_LEFT, SIDE_RIGHT, TECH_STACK } from "./About.config";

import "./About.scss";

function About() {
  const {aboutRef} = useScroll();

  const jobTitle = (
    <>
      {LABELS.luxoftJobTitle}
      <br/>
      {LABELS.upbJobTitle}
    </>
  );

  return (
    <Section ref={aboutRef} className="about-container">
      <Col md={4}>
        <Section className="d-flex justify-content-center" isSubsection={true}>
          <img className="about-picture" src="/about-photo.jpg" alt="About" />
        </Section>
      </Col>
      <Col md={8}>
        <Section title={jobTitle} isSubsection={true}>
          <Col md={6}>
            <RenderSide sectionConfig={SIDE_LEFT} />
          </Col>
          <Col md={6}>
            <RenderSide sectionConfig={SIDE_RIGHT} />
          </Col>
          <Col md={12}>
            <RenderSide sectionConfig={TECH_STACK} />
          </Col>
        </Section>
      </Col>
    </Section>
  );
}

export default About;
