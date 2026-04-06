import React from "react";
import { Col, Row } from "react-bootstrap";

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
      <Col md={4} className="about-picture-container">
        <Section className="d-flex justify-content-center" isSubsection={true}>
          <img className="about-picture" src="/about-photo.jpg" alt="About" />
        </Section>
      </Col>
      <Col md={8}>
        <Section title={jobTitle} isSubsection={true}>
          <Col md={12}>
            <b>Senior Software Engineer & University Lecturer</b> with 10+ years
            of experience in software engineering. Expert in JavaScript, TypeScript,
            React, Java, and Python , with a proven track record of leading development
            teams and driving the end-to-end delivery of complex, cloud-based platforms
            for global clients like CISCO.
          </Col>
          <Col md={12}>
            <b>Holding a Ph.D. in Computer Science specializing in Knowledge Graphs and
              NLP</b>, I combine advanced technical expertise with strong leadership and
            mentoring skills, being actively involved in training future engineers and
            contributing to international research committees.
          </Col>
          <Row className="summary">
            <Col md={6}>
              <RenderSide sectionConfig={SIDE_LEFT} />
            </Col>
            <Col md={6}>
              <RenderSide sectionConfig={SIDE_RIGHT} />
            </Col>
            <Col md={12}>
              <RenderSide sectionConfig={TECH_STACK} />
            </Col>
          </Row>
        </Section>
      </Col>
    </Section>
  );
}

export default About;
