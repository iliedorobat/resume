import React, { ReactNode } from "react";

import { ITimelineItem } from "src/app/shared/timeline/Timeline.types";
import { LABELS } from "src/app/common/strings";

const EXPERIENCE_ITEMS: ITimelineItem[] = [
  {
    title: LABELS.softwareDeveloper,
    institution: LABELS.luxoft,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "14/05/2018 – CURRENT",
    website: "https://www.luxoft.com/",
    descriptions: [
      <b>
        Achievements:<br/>
        - I developed multiple enterprise projects using various technologies.<br/>
        - I have conducted interviews for JavaScript developer positions since 2019.<br/>
        - I have lead software development teams since 2020.
      </b>,
      <ProjectDescription
        techStack={<><b>TypeScript, ReactJS, Context API,</b> SCSS, HTML5, Bootstrap, <b>Python,
          Flask, SQLAlchemy, PostgreSQL, </b>Docker</>}
        text={
          <>
            <b>Tortuga QA Dashboard:</b> Since the early stages of this platform, which provides QA
            engineers with real-time visibility into software release status and test coverage, I have
            driven its end-to-end development, from architecture and environment setup to team coordination,
            prioritization, and hands-on implementation.
          </>
        }
      />,
      <ProjectDescription
        techStack={<><b>JavaScript, TypeScript, ReactJS, Redux,</b> SCSS, HTML5, Bootstrap,
          <b>Micro Frontends</b></>}
        text={
          <>
            <a href="https://www.cisco.com/site/us/en/products/networking/cloud-networking/nexus-platform/index.html"
            target="_blank" rel="noreferrer"><b>Cisco Nexus Dashboard:</b></a> Key contributor to the
            early development of a leading cloud-based platform for data center network management,
            monitoring, and troubleshooting. Defined system architecture, designed core components,
            resolved critical issues, and later led and coordinated four additional teams.
          </>
        }
      />,
      <ProjectDescription
        techStack={<><b>JavaScript, Polymer 3, LitElement,</b> SCSS, HTML5, <b>Java, Spring Boot</b></>}
        text={
          <>
            <a href="https://www.cisco.com/site/us/en/products/computing/hybrid-cloud-operations/intersight-platform/index.html"
            target="_blank" rel="noreferrer"><b>Intersight:</b></a> I developed the next release of this
            cloud-based platform that provides adaptive, cloud-powered infrastructure management.
          </>
        }
      />,
      <ProjectDescription
        techStack={<><b>TypeScript, Angular 8,</b> SCSS, HTML5</>}
        text={
          <>
            <a href="https://www.cisco.com/c/en/us/td/docs/switches/datacenter/aci/apic/sw/html5-vcenter-plug-in/cisco-aci-html5-vcenter-plug-in/m-cisco-aci-vcenter-plug-in.html"
            target="_blank" rel="noreferrer"><b>Cisco ACI vCenter Plugin:</b></a> Transitioned the application
            from Adobe Flash Player to Angular, taking over development and stabilizing it during a critical phase.
          </>
        }
      />,
      <ProjectDescription
        techStack={<><b>JavaScript, ReactJS, Redux,</b> SCSS, HTML5</>}
        text={
          <>
            <a href="https://www.cisco.com/c/en/us/support/data-center-analytics/nexus-insights/series.html"
            target="_blank" rel="noreferrer"><b>Network Dashboard Insights (NDI):</b></a> Delivered
            full-feature implementations from the initial stages of development, shaping core functionality
            of the application.
          </>
        }
      />
    ],
    priority: 5,
  },
  {
    title: LABELS.lecturer,
    institution: LABELS.upbNew,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "01/10/2024 – CURRENT",
    website: "https://upb.ro/",
    descriptions: [
      <ProjectDescription text={
        <>
          <b>I lead university laboratories</b> in the following disciplines, guiding students through
          practical exercises and projects:<br/>
          - Human-Computer Interaction (mockup design in Figma)<br/>
          - Object Oriented Programming in Java
        </>
      } />,
    ],
    priority: 6,
  },
  {
    title: LABELS.expert,
    institution: LABELS.ministryOfFinance,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "10/01/2018 – 13/05/2018",
    website: "https://mfinante.gov.ro/",
    descriptions: [
      <ProjectDescription text="Held the same responsibilities as in my role at ANAF." />
    ],
    priority: 4,
  },
  {
    title: LABELS.expert,
    institution: LABELS.anaf,
    locality: LABELS.bucharest,
    country: LABELS.romania,
    period: "13/10/2014 – 09/01/2018",
    website: "https://www.anaf.ro/",
    descriptions: [
      <ProjectDescription
        techStack={<><b>JavaScript,</b> SmartClient, HTML, CSS, <b>Oracle SQL, PL/SQL</b></>}
        text={<>
          Developed multiple plugins for declaration forms (including <b>VAT D300</b> and <b>Income
          Tax Statement</b>) and the <b>Risk Analysis Sheet</b> module to integrate new forms into
          commercial risk assessments.
        </>}
      />,
      <ProjectDescription
        techStack={<><b>Oracle SQL, PL/SQL</b></>}
        text={<>
          Developed <b>various scripts for data standardization</b>, managing transfers between ANAF
          servers, and ensuring timely updates requested by the General Directorate for Tax Information.
        </>}
      />,
    ],
    priority: 3,
  },
  {
    title: LABELS.freelancer,
    institution: LABELS.aprSolutions,
    locality: LABELS.turin,
    country: LABELS.italy,
    period: "2016",
    website: "https://www.aprsolutionssrl.com/en/",
    descriptions: [
      <ProjectDescription
        techStack={<><b>JavaScript,</b> AngularJS 1.6, HTML, CSS, Bootstrap, <b>Java, MariaDB 10.2</b></>}
        text={
        <>
          <b>Solutions Manager</b> is a management system for production of industrial graphics machinery.
          It allows users to have a great view about the production of industrial graphics machinery and about
          suppliers relation.
          <br/>
          The system includes a module for authentication and registration, one for storing suppliers information,
          one for storing the nomenclatures, one for production management. It also includes a module for bidding
          and another one for command order.
        </>
        }
      />
    ],
    priority: 2,
  },
  {
    title: "Technician in Financial and Commercial Activities",
    institution: LABELS.designMobila,
    locality: LABELS.margineni,
    country: LABELS.romania,
    period: "02/12/2008 – 15/05/2009",
    website: "https://www.depozituldescaune.ro/",
    priority: 1,
  },
  {
    title: "Clerical Officer in Accounting and Financial Services",
    institution: LABELS.contExpert,
    locality: LABELS.bacau,
    country: LABELS.romania,
    period: "27/12/2007 – 19/09/2008",
    website: "https://www.contexpertbacau.ro/",
    priority: 0,
  },
];

interface IProjectDescriptionProps {
  techStack?: string | ReactNode;
  text?: string | ReactNode;
}

function ProjectDescription({ techStack, text }: IProjectDescriptionProps) {
  if (!text && !techStack) {
    return null;
  }

  return (
    <>
      {text && <div>{text}</div>}
      {techStack && <div><b>{LABELS.techStack}:</b> {techStack}</div>}
    </>
  );
}

export { EXPERIENCE_ITEMS };
