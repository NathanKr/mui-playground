import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import MuiAlerts from "./components/MuiAlerts";
import MuiButtons from "./components/MuiButtons";
import MuiIcons from "./components/MuiIcons";
import MuiTabs from "./components/MuiTabs";
import MuiTypography from "./components/MuiTypography";
import MuiTextInputs from "./components/MuiTextInputs";
import MuiProgress from "./components/MuiProgress";
import TabValue from "./types/TabValue";
import MuiDialog from "./components/MuiDialog";
import MuiImageList from "./components/MuiImageList";
import MuiDivider from "./components/MuiDivider";
import MuiSnackBar from "./components/MuiSnackBar";
import MuiSelect from "./components/MuiSelect";

export default function App() {
  const [tabValue, setTabValue] = useState<TabValue>(TabValue.ImageList);

  const handleChange = (event: SyntheticEvent, newTabValue: TabValue) => {
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
        <Tab value={TabValue.Alerts} label="Alerts" />
        <Tab value={TabValue.Buttons} label="Buttons" />
        <Tab value={TabValue.Dialog} label="Dialogs" />
        <Tab value={TabValue.Divider} label="Divider" />
        <Tab value={TabValue.Icons} label="Icons" />
        <Tab value={TabValue.ImageList} label="ImageList" />
        <Tab value={TabValue.Progress} label="Progress" />
        <Tab value={TabValue.Select} label="Select" />
        <Tab value={TabValue.SnackBar} label="SnackBar" />
        <Tab value={TabValue.Tabs} label="Tabs" />
        <Tab value={TabValue.TextInputs} label="Text Inputs" />
        <Tab value={TabValue.Typography} label="Typography" />
      </Tabs>
      {tabValue == TabValue.Alerts ? <MuiAlerts /> : ""}
      {tabValue == TabValue.Buttons ? <MuiButtons /> : ""}
      {tabValue == TabValue.Dialog ? <MuiDialog /> : ""}
      {tabValue == TabValue.Divider ? <MuiDivider /> : ""}
      {tabValue == TabValue.Icons ? <MuiIcons /> : ""}
      {tabValue == TabValue.ImageList ? <MuiImageList /> : ""}
      {tabValue == TabValue.Progress ? <MuiProgress /> : ""}
      {tabValue == TabValue.Select ? <MuiSelect /> : ""}
      {tabValue == TabValue.SnackBar? <MuiSnackBar/> : ""}
      {tabValue == TabValue.Tabs ? <MuiTabs /> : ""}
      {tabValue == TabValue.TextInputs ? <MuiTextInputs /> : ""}
      {tabValue == TabValue.Typography ? <MuiTypography /> : ""}
    </div>
  );
}
