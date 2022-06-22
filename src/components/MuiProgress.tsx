import { CircularProgress, LinearProgress } from "@mui/material";
import CircularDeterminate from "./CircularDeterminate";
import CircularIntegration from "./CircularIntegration";
import CircularStatic from "./CircularStatic";
import LinearWithValueLabel from "./LinearProgressWithLabel ";

const MuiProgress = () => {
  return (
    <div>
      <h5>CircularProgress</h5>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <h5>CircularDeterminate</h5>
      <CircularDeterminate />
      <h5>LinearWithValueLabel</h5>
      <LinearWithValueLabel/>
      <h5>CircularStatic</h5>
      <h5>click the following</h5>
      <CircularIntegration />
      <h5>CircularStatic</h5>
      <CircularStatic />
      <h5>LinearProgress</h5>
      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </div>
  );
};

export default MuiProgress;
