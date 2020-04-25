"use strict";

import { openShow, closeHide } from "../../Tooldion/Tooldion";

const HandleEvents = (accordionControls, accordionPanels) => {
  accordionControls.forEach(accordionControl => {
    accordionControl.addEventListener("click", function() {
      if (this.nextElementSibling.classList.contains("hidden")) {
        openShow(this, accordionPanels, "accordion__control--selected");
      } else {
        closeHide(this, accordionPanels, "accordion__control--selected");
      }
    });
  });
};

export default HandleEvents;
