"use strict";

import HandleEvents from "./Handlers/HandleEvents";

const Tooltips = () => {
  var tooltipControls = Array.from(
    document.querySelectorAll(".tooltip__control")
  );
  var tooltipPanels = Array.from(
    document.querySelectorAll(".tooltip__content")
  );
  var tooltipCloseButtons = Array.from(
    document.querySelectorAll(".tooltip__close")
  );

  HandleEvents(tooltipControls, tooltipPanels, tooltipCloseButtons);
};

export default Tooltips;
