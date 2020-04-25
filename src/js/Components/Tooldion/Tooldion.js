"use strict";

import Util from "../Utilities/Util";

/**
 * @desc Handle show/hide/open/close of all tooltip/accordion/etc components
 * @param - Arguments to pass to functions are:
 * - the trigger/control element that fired the event
 * - the array of content panels to iterate
 * - any specific "selected" class name of the active element if required (ex: tooltip__control--selected)
 *
 */

export const openShow = (control, panels, className) => {
  // Close all other panels
  closeHide(control, panels, className);

  // Add "active" classname and update active aria
  className ? control.classList.add(className) : false;
  control.setAttribute("aria-expanded", "true");

  // Define panel associated with control and open it
  const panelToOpen = document.getElementById(
    control.getAttribute("aria-controls")
  );
  Util.modifyHiddenState(panelToOpen, "hidden", "remove");

  // If a close icon exists in the panel, focus on it
  if (panelToOpen.querySelector(".button--close")) {
    panelToOpen.querySelector(".button--close").focus();
  }
};

export const closeHide = (control, panels, className) => {
  // Hide all panels and remove any active class/state
  panels.forEach(panel => {
    Util.modifyHiddenState(panel, "hidden", "add");
    panel.previousElementSibling.setAttribute("aria-expanded", "false");
    panel.previousElementSibling.classList.remove(className);
  });

  // Focus on the control associated with the closed panel
  control.focus();
};
