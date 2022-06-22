import AlertDialog from './AlertDialog';
import SimpleDialogDemo from './BasicDialog';
import MyPlayDialog from './MyPlayDialog';

const MuiDialog = () => {
    return (
        <div>
            <h5>MyPlayDialog</h5>
            <MyPlayDialog isOpen={true}/>
            <h5>Alert dialog</h5>
            <AlertDialog/>
            <h5>simple dialog</h5>
            <SimpleDialogDemo/>
        </div>
    );
};

export default MuiDialog;