"use strict";

import { openShow } from "../../Tooldion/Tooldion";

const HandleTooltipControl = (tooltipControl, tooltipPanels) => {
  // Set Tooltip Control Click Event
  tooltipControl.addEventListener("click", function() {
    openShow(this, tooltipPanels, "tooltip__control--selected");
  });
};

export default HandleTooltipControl;
