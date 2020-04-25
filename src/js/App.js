"use strict";

import Accordions from "./Components/Accordions/Accordions";
import Tooltips from "./Components/Tooltips/Tooltips";

const App = () => {
  // Conditional Test for Accordion
  if (document.querySelector(".accordion__control")) {
    Accordions();
  }

  // Conditional Test for Tooltip
  if (document.querySelector(".tooltip__control")) {
    Tooltips();
  }
};

export default App;
