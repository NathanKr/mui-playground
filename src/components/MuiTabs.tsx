import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import MuiTabsSimple from "./MuiTabsSimple";
import MuiTabsShowHide from "./MuiTabsShowHide";

export default function MuiTabs() {
  
  return (
    <div>
      <h1>Tabs</h1>
      <h3>Simple</h3>
      <MuiTabsSimple/>
      <h3>Show hide</h3>
      <MuiTabsShowHide/>
    </div>
  );
}
