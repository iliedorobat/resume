import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { scrollTop } from "src/app/common/utils";
import { useScrollTop } from "src/app/common/hooks";

import { PATHS } from "src/app/common/paths.const";

function ScrollTop() {
  const location = useLocation();
  const navigate = useNavigate();
  useScrollTop();

  function onClick() {
    if ([PATHS.ABOUT, PATHS.HOME, PATHS.PAPERS].includes(location.pathname)) {
      scrollTop();
    } else {
      navigate(PATHS.ABOUT);
    }
  }

  return (
    <div onClick={onClick} id="scroll-top" className="d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short" />
    </div>
  );
}

export default ScrollTop;
