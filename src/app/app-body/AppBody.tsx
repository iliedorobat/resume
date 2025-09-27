import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Papers from "../components/papers/Papers";
import Resume from "../components/resume/Resume";

import { PATHS } from "../common/paths.const";

function AppBody() {
  return (
    <main className="app-body">
      <Container>
        <Routes>
          <Route path={PATHS.HOME} element={<Resume />} />
          <Route path={PATHS.ABOUT} element={<Resume />} />
          <Route path={PATHS.ACHIEVEMENTS} element={<Resume />} />
          <Route path={PATHS.AWARDS} element={<Resume />} />
          <Route path={PATHS.EDUCATION} element={<Resume />} />
          <Route path={PATHS.EXPERIENCE} element={<Resume />} />
          <Route path={PATHS.PAPERS} element={<Papers />} />
          <Route path={PATHS.PROJECTS} element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

function NotFound() {
  return <>404 Not Found</>;
}

export default AppBody;