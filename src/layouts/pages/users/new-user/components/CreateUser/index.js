//react component
import React from 'react'
import { useState } from 'react';
//import softui component
import SoftButton from 'components/SoftButton'
//import material component
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Divider, Grid } from '@mui/material';
import SoftInput from 'components/SoftInput';
import FormField from 'layouts/applications/wizard/components/FormField';
import SoftDatePicker from 'components/SoftDatePicker';
import SoftTypography from 'components/SoftTypography';
import SoftDropzone from "components/SoftDropzone";
import SoftBox from 'components/SoftBox';
import { FileUploader } from "react-drag-drop-files";
//Dialog transition effect
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CreateUser = () => {
    const [open, setOpen] = useState(false);
    const[file, setFile]= useState(null);
    const fileTypes = ["xlsx", "xls"];
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleFileUpload=(file)=>{
        console.log("file is>>> ", file)
    }
    return (
        <>
            <div>
                <SoftButton color="dark" style={{ left: "19.5rem" }} onClick={handleClickOpen}>Upload User</SoftButton>
            </div>
            <Dialog
            fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                TransitionComponent={Transition}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Upload User"}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} padding={1} xs={12}>
                  
                    <SoftBox mt={3} ml={3} style={{"width": "100%"}}>
        <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block" style={{width:"100%"}}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            *Please upload excel file only
          </SoftTypography>
        </SoftBox>
        <FileUploader handleChange={handleFileUpload} fileOrFiles name="file" types={fileTypes} />
      </SoftBox>
                
                    </Grid>
                </DialogContent>
                <DialogActions>
                <Button autoFocus>
                        Submit
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}



export default CreateUser