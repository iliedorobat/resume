import { RefObject } from "react";

const scrollDown = (ref: RefObject<HTMLElement>) => {
  ref?.current?.scrollIntoView?.({ behavior: "smooth" });
}

function scrollTop() {
  const selector = document.querySelector(".app-container");
  selector?.scrollTo({ top: 0, behavior: "smooth" });
}

export {
  scrollDown,
  scrollTop,
};
