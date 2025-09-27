import React from "react";
import { Nav } from "react-bootstrap";

import { HEADER_MEDIA_LIST, IHeaderMediaItem } from "./SocialMedia.config";

import "./SocialMedia.scss";

function SocialMedia() {
  return (
    <div className="social-media d-flex justify-content-center gap-2">
      {HEADER_MEDIA_LIST.map((item: IHeaderMediaItem) => {
        return (
          <Nav.Link key={item.path} href={item.path} target="_blank" rel="noopener noreferrer">
            <i className={item.className}></i>
          </Nav.Link>
        );
      })}
      <Nav.Link className="research-gate" href={"https://www.researchgate.net/profile/Ilie-Dorobat"} target="_blank" rel="noopener noreferrer">
        <img src="/rg-logo-black-white.png" alt="RG"/>
      </Nav.Link>
    </div>
  );
}

export default SocialMedia;
