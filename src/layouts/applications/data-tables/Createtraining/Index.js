//react component
import React from 'react'
import { useState } from 'react';
//import softui component
import SoftButton from 'components/SoftButton'
import SoftDatePicker from 'components/SoftDatePicker';
import SoftTypography from 'components/SoftTypography';
import SoftSelect from 'components/SoftSelect';
import SoftInput from 'components/SoftInput';
import FormField from 'layouts/applications/wizard/components/FormField';
//import material component
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Divider, Grid } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Form from 'react-bootstrap/Form';
import SoftBox from 'components/SoftBox';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
//Dialog transition effect
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Index = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //radio group value and function
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [budget, setBudget] = useState("no")
    return (
        <>
            <div>
                <SoftButton style={{ left: "16.5rem", height: "41px", backgroundColor: "#004475", color: "white" }} onClick={handleClickOpen} iconOnly><PlaylistAddIcon fontSize={"large"} /></SoftButton>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                TransitionComponent={Transition}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Create Training"}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} padding={1}>
                        <Grid item xs={12}><FormField label="Training name*" placeholder="Enter Training name..." type="name" required /></Grid>
                        <Grid item xs={6}><FormField label="Duration*" placeholder="Enter Duration..." type="number" /></Grid>
                        <Grid item xs={6}><FormField type="name" label="Faculty" placeholder="Enter Facuty..." /></Grid>
                        <Grid item xs={6} display={'flex'} flexDirection={'column'} ><SoftTypography variant="caption" fontWeight="bold" color="dark" style={{ paddingBottom: "8px", marginTop: "0.41rem" }}>
                            Categorey*
                        </SoftTypography>
                            <SoftSelect label="Categorey*" placeholder="Select" type="select" options={[
                                { value: "Internal", label: "Internal" },
                                { value: "External", label: "External" }
                            ]} onChange={(e) => {
                                console.log(e)
                            }} />
                        </Grid>
                        <Grid item xs={6} display={'flex'} flexDirection={'column'} ><SoftTypography variant="caption" fontWeight="bold" color="dark" style={{ paddingBottom: "8px", marginTop: "0.41rem" }}>
                            Type
                        </SoftTypography>
                            <SoftSelect placeholder="Select" type="select" options={[
                                { value: "onjob", label: "Onjob" },
                                { value: "induction", label: "Induction" },
                                { value: "classroom", label: "Classroom" }
                            ]} onChange={(e) => {
                                console.log(e)
                            }} /></Grid>

                        <Grid item xs={4}><FormControl>
                            <SoftTypography variant="caption" fontWeight="bold" color="dark" style={{ paddingBottom: "8px", marginTop: "0.7rem" }}>Budgeted</SoftTypography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >

                                <FormControlLabel value="yes" control={<Radio />} label="Yes" style={{ paddingLeft: "1rem" }} onChange={(e) => {
                                    let val = e.target.value;
                                    setBudget(val)
                                    console.log(e.target.value)
                                }} />
                                <FormControlLabel value="no" control={<Radio />} label="No" onChange={(e) => {
                                    let val = e.target.value;
                                    setBudget(val)
                                    console.log(e.target.value)
                                }} />


                            </RadioGroup>
                        </FormControl></Grid>
                        <Grid item xs={8}>
                            {budget === "yes" ? <FormField style={{ width: "20px" }} type="number" placeholder="Enter Budget..." /> : <SoftBox></SoftBox>}
                        </Grid>
                        <Grid item xs={12} width={100} style={{ "paddingTop": "2rem" }}><SoftButton color="dark" size="medium" style={{ width: "100%" }} >Submit</SoftButton></Grid>
                        <Grid item xs={12}>
                            <SoftTypography variant="caption" fontWeight="bold" color="error" >
                                * fields are required field
                            </SoftTypography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}



export default Index