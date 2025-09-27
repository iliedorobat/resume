import React from "react";
import { Link } from "react-router-dom";

import SocialMedia from "../components/social-media/SocialMedia";

import { LABELS } from "../common/strings";
import { PATHS } from "../common/paths.const";

import "./AppFooter.scss";

function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="copyright">
        <Link to={PATHS.HOME}>
          {LABELS.brand}
        </Link>
         © {getInterval()} All Rights Reserved
      </div>
      <SocialMedia />
      <div className="designed-by">
        Designed by <b>Ilie Cristian Dorobat</b>
      </div>
    </footer>
  );
}

function getInterval() {
  const crrYear = new Date().getFullYear();

  if (crrYear === 2025) {
    return crrYear;
  }

  return `2025 - ${crrYear}`;
}

export default AppFooter;
