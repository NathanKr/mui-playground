import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";

export default function MuiTabsShowHide() {
  const [tabValue, setTabValue] = useState("1");
  const [secondaryTabValue, setSecondaryTabValue] = useState("");

  function isSecondary(tabValue: string): boolean {
    return tabValue.indexOf(".") > -1;
  }

  const handleChange = (event: SyntheticEvent, newTabValue: string) => {
    if (isSecondary(newTabValue)) {
      setSecondaryTabValue(newTabValue);
    } else {
      setSecondaryTabValue("");
    }
    setTabValue(newTabValue);
  };

  const elems = ["1", "2", "3", "3.1", "3.2"].map((it) =>
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
        {secondaryTabValue == "3.1" ? (
          <Tab value="3.1" label="Item Three.One" />
        ) : (
          ""
        )}
        {secondaryTabValue == "3.2" ? (
          <Tab value="3.2" label="Item Three.Two" />
        ) : (
          ""
        )}
      </Tabs>
      <button onClick={() =>{
        setSecondaryTabValue('3.1')
      }}>show secondary</button>
      {elems}
    </div>
  );
}
