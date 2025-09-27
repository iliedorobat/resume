import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import SocialMedia from "../components/social-media/SocialMedia";

import { HEADER_ITEMS_LIST, IHeaderItem } from "./AppHeader.config";
import { LABELS } from "../common/strings";
import { PATHS } from "../common/paths.const";

import "./AppHeader.scss";

function AppHeader() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navbarRef = useRef({} as HTMLElement);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (navbarRef.current && !navbarRef?.current?.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <header className="app-header">
      <Navbar ref={navbarRef} expanded={expanded} expand="lg" className="bg-body-tertiary">
        <Container className="gap-4">
          <Navbar.Brand as={Link} to={PATHS.HOME}>
            {LABELS.brand}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="responsive-navbar-nav" className="gap-4">
            <Nav className="justify-content-center gap-4">
              {HEADER_ITEMS_LIST.map((item: IHeaderItem) => {
                const className = location.pathname === item.path ? "active" : "";

                return (
                  <Nav.Link className={className} key={item.path} as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
            <SocialMedia />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppHeader;
