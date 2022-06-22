import { Dialog } from "@mui/material";
import { useState } from "react";

const MyPlayDialog = (props: { isOpen: boolean }) => {
  const [open, setOpen] = useState(props.isOpen);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Dialog open={open}>
        {/* the follwoing is super simple.
         using DialogTitle \ DialogContent \ DialogActions might be better */}
        <p>some content</p>
        <button onClick={handleClose}>Close</button>
      </Dialog>
    </div>
  );
};

export default MyPlayDialog;
