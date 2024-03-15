import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, Icon, Slide } from "@mui/material";
import Badge from '@mui/material/Badge';
import SoftButton from 'components/SoftButton';
import FormField from 'layouts/applications/wizard/components/FormField';
import SoftSelect from 'components/SoftSelect';
import SoftTypography from 'components/SoftTypography';
import SoftBox from 'components/SoftBox';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Index = () => {
    const [open, setOpen] = useState(false);
    const [disable, setDisable] = useState(true)
    const handleDetailedView = () => {
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
        setDisable(true)
    };
    //edit toggler
    const editForm = () => {
        setDisable(false)
    }
    return (
        <div>
            <Badge color="secondary">
                <Icon onClick={handleDetailedView}>visibility</Icon>
            </Badge>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                TransitionComponent={Transition}
            >
                <DialogTitle id="alert-dialog-title">
                    <Grid container spacing={2}>
                        <Grid item lg="8">{"Training Details"}</Grid>
                        <Grid item lg="4"><SoftButton iconOnly color="dark" style={{ left: "12rem" }} onClick={() => {
                            editForm()
                        }}><Icon sx={{ fontWeight: "bold" }}>edit</Icon></SoftButton></Grid>
                    </Grid>

                </DialogTitle>

                <DialogContent style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <div style={{ border: "1.9px solid ", borderRadius: "10px", borderColor: "#004475" }}>
                        <Grid container spacing={2} style={{
                            padding: "15px",
                        }}>

                            <Grid item lg={12}>
                                <FormField label="Training" disabled={disable} value="Managerial effectiveness & Conflict resolution" />
                            </Grid>

                            <Grid item lg={6} display={'flex'} flexDirection={'column'} >
                                {disable ? <FormField value="Internal" label="Categorey" disabled /> : <><SoftTypography variant="caption" fontWeight="bold" color="dark" style={{ paddingBottom: "8px", marginTop: "0.41rem" }}>
                                    Categorey
                                </SoftTypography>
                                    <SoftSelect label="Categorey" placeholder="Select" type="select" value="Onjob" options={[
                                        { value: "Internal", label: "Internal" },
                                        { value: "External", label: "External" }
                                    ]} onChange={(e) => {
                                        console.log(e)
                                    }} /></>}

                            </Grid>
                            <Grid item lg={6} display={'flex'} flexDirection={'column'} >
                                {disable ? <FormField value="Onjob" label="Type" disabled /> : <><SoftTypography variant="caption" fontWeight="bold" color="dark" style={{ paddingBottom: "8px", marginTop: "0.41rem" }}>
                                    Type
                                </SoftTypography>
                                    <SoftSelect placeholder="Select" type="select" options={[
                                        { value: "onjob", label: "Onjob" },
                                        { value: "induction", label: "Induction" },
                                        { value: "classroom", label: "Classroom" }
                                    ]} onChange={(e) => {
                                        console.log(e)
                                    }} /></>}

                            </Grid>
                            <Grid item lg={6}>
                                <FormField label="Duration(hrs)" type="number" value="2.5" disabled={disable} />
                            </Grid>
                            <Grid item lg={6}>
                                <FormField label="Faculty" value="ABC" type="name" disabled={disable} />
                            </Grid>

                            <Grid item lg={4} >
                                {disable ? <FormField label="Budgeted" value="Yes" disabled /> : <><SoftTypography variant="caption" fontWeight="bold" color="dark" style={{ paddingBottom: "8px", marginTop: "0.41rem" }}>
                                    Budgeted
                                </SoftTypography>
                                    <SoftSelect placeholder="Select" type="select" options={[
                                        { value: "yes", label: "Yes" },
                                        { value: "no", label: "No" },
                                    ]} onChange={(e) => {
                                        console.log(e)
                                    }} /></>}

                            </Grid>
                            <Grid item lg={4}>
                                <FormField label="Budget" disabled={disable} value="10000" />
                            </Grid>

                            <Grid item lg={4} >
                                {disable ? <FormField label="Status" value="active" disabled /> : <><SoftTypography variant="caption" fontWeight="bold" color="dark" style={{ paddingBottom: "8px", marginTop: "0.41rem" }}>
                                    Status
                                </SoftTypography>
                                    <SoftSelect placeholder="Select" type="select" options={[
                                        { value: "active", label: "Active" },
                                        { value: "inactive", label: "Inactive" },
                                    ]} onChange={(e) => {
                                        console.log(e)
                                    }} /></>}

                            </Grid>
                            {!disable ? <Grid item lg={12}>
                                <SoftButton style={{ width: "100%" }} color="dark">Submit</SoftButton>
                            </Grid> : <SoftBox></SoftBox>}

                        </Grid>
                    </div>
                </DialogContent><DialogActions>
                    <SoftButton size="small" color="dark" onClick={() => {
                        handleClose()
                    }}>Cancel</SoftButton>
                </DialogActions></Dialog>
        </div>
    )
}

export default Index