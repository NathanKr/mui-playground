import React from 'react';
import AlertDialog from './AlertDialog';
import SimpleDialogDemo from './BasicDialog';

const MuiDialog = () => {
    return (
        <div>
            <h5>Alert dialog</h5>
            <AlertDialog/>
            <h5>simple dialog</h5>
            <SimpleDialogDemo/>
        </div>
    );
};

export default MuiDialog;