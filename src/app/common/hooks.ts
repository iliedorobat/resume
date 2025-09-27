import { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { useLocation } from "react-router-dom";

import { scrollDown, scrollTop } from "./utils";
import { PATHS } from "./paths.const";

function useScroll() {
  const location = useLocation();

  const aboutRef = useRef({} as HTMLElement);
  const awardsRef = useRef({} as HTMLElement);
  const eduRef = useRef({} as HTMLElement);
  const expRef = useRef({} as HTMLElement);
  const projectsRef = useRef({} as HTMLElement);

  useEffect(() => {
    switch (location?.pathname) {
      case PATHS.ABOUT:
        scrollDown(aboutRef);
        scrollTop();
        break;
      case PATHS.AWARDS:
        scrollDown(awardsRef);
        break;
      case PATHS.EDUCATION:
        scrollDown(eduRef);
        break;
      case PATHS.EXPERIENCE:
        scrollDown(expRef);
        break;
      case PATHS.HOME:
        scrollTop();
        break;
      case PATHS.PROJECTS:
        scrollDown(projectsRef);
        break;
      default:
        break;
    }
  });

  return { aboutRef, awardsRef, eduRef, expRef, projectsRef };
}

function useScrollTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const selector = document.querySelector(".app-container");
    const scrollSelector = document.querySelector("#scroll-top");
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (selector?.scrollTop) {
            if (!scrollSelector?.className.includes("active")) {
              scrollSelector?.classList.add("active");
            }
          } else {
            scrollSelector?.classList.remove("active");
          }

          setScrollY(selector?.scrollTop || 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    selector?.addEventListener("scroll", handleScroll);
    return () => selector?.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, setScrollY };
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => setWidth(window.innerWidth), 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export {
  useScroll,
  useScrollTop,
  useWindowWidth,
};
