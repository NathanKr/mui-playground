import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";

export default function MuiTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const elems = ["1", "2", "3"].map((it) =>
    it == value ? <p key={it}>{it}</p> : ""
  );

  return (
    // <Box sx={{ width: "100%" }}> remark because not clear why Box is needed
    <div>
      <Tabs
        value={value}
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
    // </Box>
  );
}
