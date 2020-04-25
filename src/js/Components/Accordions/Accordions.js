"use strict";

import HandleEvents from "./Handlers/HandleEvents";

const Accordions = () => {
  const accordionControls = Array.from(
    document.querySelectorAll(".accordion__control")
  );

  const accordionPanels = Array.from(
    document.querySelectorAll(".accordion__content")
  );

  HandleEvents(accordionControls, accordionPanels);
};

export default Accordions;
