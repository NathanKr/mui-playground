import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";

export default function MuiTabsSimple() {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };

  const elems = ["1", "2", "3"].map((it) =>
    it == tabValue ? <p key={it}>{it}</p> : ""
  );

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="1" label="Item One" />
        <Tab value="2" label="Item Two" />
        <Tab value="3" label="Item Three" />
      </Tabs>
      {elems}
    </div>
  );
}
