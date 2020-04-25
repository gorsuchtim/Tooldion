"use strict";

import { closeHide } from "../../Tooldion/Tooldion";

const HandleTooltipClose = (tooltipCloseButton, tooltipPanels) => {
  const control = tooltipCloseButton.parentElement.previousElementSibling;

  // Set Close Icon Click Event
  tooltipCloseButton.addEventListener("click", function() {
    closeHide(control, tooltipPanels, "tooltip__control--selected");
  });

  // Set Close Icon Escape Keydown Event
  tooltipCloseButton.addEventListener("keydown", function() {
    if (event.keyCode == 27) {
      closeHide(control, tooltipPanels, "tooltip__control--selected");
    }
  });
};

export default HandleTooltipClose;
