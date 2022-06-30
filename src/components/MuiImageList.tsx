import MasonryImageList from "./MasonryImageList";
import StandardImageList from "./StandardImageList";
import TitlebarImageList from "./TitlebarImageList";

const MuiImageList = () => {
  return (
    <div style={{ margin: "auto", width: "50%"}}>
      <h3>StandardImageList</h3>
      <div>
        <StandardImageList />
      </div>
      <h3>TitlebarImageList</h3>
      <TitlebarImageList />
      <h3>MasonryImageList</h3>
      <MasonryImageList/>
    </div>
  );
};

export default MuiImageList;
