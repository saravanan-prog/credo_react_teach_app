import React from "react";
import ReactDOM from "react-dom/client";
import LifeCyclemethods from "./Pages/Life-cycle-methods/LifeCyclemethods";

import MountingPhaase from "./Pages/side-effects/a_mounting-phase/MountingPahse";
import UpdatingPahse from "./Pages/side-effects/b_updating-phase/UpdatingPhase";
import A_parent from "./Pages/side-effects/c_unmount-phase/A_parent";
import Products from "./Pages/side-effects/Products";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
     <Products />
  </div>
);
