import { CircularProgress, LinearProgress } from "@mui/material";
import CircularDeterminate from "./CircularDeterminate";
import CircularIntegration from "./CircularIntegration";
import CircularStatic from "./CircularStatic";
import LinearWithValueLabel from "./LinearProgressWithLabel ";

const MuiProgress = () => {
  return (
    <div>
      <CircularProgress />
      <br />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <br />
      <CircularDeterminate />
      <br />
      <LinearWithValueLabel/>
      <p>click the following</p>
      <CircularIntegration />
      <CircularStatic />
      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </div>
  );
};

export default MuiProgress;
