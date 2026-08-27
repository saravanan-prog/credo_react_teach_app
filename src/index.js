import React from "react";
import ReactDOM from "react-dom/client";

import MountingPhaase from "./Pages/side-effects/a_mounting-phase/MountingPahse";
import UpdatingPahse from "./Pages/side-effects/b_updating-phase/UpdatingPhase";
import Products from "./Pages/side-effects/c_unmount-phase/Products";





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
     <Products />
  </div>
);
