"use strict";

import HandleTooltipControl from "./HandleTooltipControl";
import HandleTooltipClose from "./HandleTooltipClose";

const HandleEvents = (tooltipControls, tooltipPanels, tooltipCloseButtons) => {
  // Set Events on Tooltip Controls
  tooltipControls.forEach(tooltipControl => {
    HandleTooltipControl(tooltipControl, tooltipPanels);
  });

  // Set Events on Tooltip Close Buttons
  tooltipCloseButtons.forEach(tooltipCloseButton => {
    HandleTooltipClose(tooltipCloseButton, tooltipPanels);
  });
};

export default HandleEvents;
