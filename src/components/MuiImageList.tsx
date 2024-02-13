import MasonryImageList from "./MasonryImageList";
import StandardImageList from "./StandardImageList";
import TitlebarImageList from "./TitlebarImageList";

const MuiImageList = () => {
  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <h2>
        Notice : MUI use here responsive{" "}
        <span style={{ color: "orange" }}>(only unsplash ?)</span> images
        tricks. Check the attributes of img
      </h2>
      <h3>StandardImageList</h3>
      <div>
        <StandardImageList />
      </div>
      <h3>TitlebarImageList</h3>
      <TitlebarImageList />
      <h3>MasonryImageList</h3>
      <MasonryImageList />
    </div>
  );
};

export default MuiImageList;
