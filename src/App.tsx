import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import MuiAlerts from "./components/MuiAlerts";
import MuiButtons from "./components/MuiButtons";
import MuiIcons from "./components/MuiIcons";
import MuiTabs from "./components/MuiTabs";
import MuiTypography from "./components/MuiTypography";
import MuiTextInputs from "./components/MuiTextInputs";

export default function App() {
  const [tabValue, setTabValue] = useState("Alerts");

  const handleChange = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };

  /* i was not able to create MUI element with map !!! looks like MUI bug*/

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="Alerts" label="Alerts" />
        <Tab value="Buttons" label="Buttons" />
        <Tab value="Tabs" label="Tabs" />
        <Tab value="Icons" label="Icons" />
        <Tab value="TextInputs" label="Text Inputs" />
        <Tab value="Typography" label="Typography" />
      </Tabs>
      {tabValue == 'Alerts' ? <MuiAlerts/> : ''}
      {tabValue == 'Buttons' ? <MuiButtons/> : ''}
      {tabValue == 'Tabs' ? <MuiTabs/> : ''}
      {tabValue == 'Icons' ? <MuiIcons/> : ''}
      {tabValue == 'TextInputs' ? <MuiTextInputs/> : ''}
      {tabValue == 'Typography' ? <MuiTypography/> : ''}
    </div>
  );
}
