//import react component
import React from 'react';
import { useState } from 'react';
//import softui component
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import SoftButton from 'components/SoftButton';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
//import material ui component
import { Card, Grid } from '@mui/material';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DataTable from 'examples/Tables/DataTable';
import FormField from 'layouts/applications/wizard/components/FormField';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Index = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [rows, setRows] = useState([
        {
            training: "Managerial effectiveness & Conflict resolution",
            duration: "2.5 hrs",
            type: "Soft Skills",
            faculty: "Internal",
            Scheduledate: "10000",
            schedule: "",
            status: "",
        }
    ]);
    //this column is value of table column
    const columns = [
        { Header: "Training", accessor: "training" },
        { Header: "duration", accessor: "duration" },
        { Header: "type", accessor: "type" },
        { Header: "Faculty", accessor: "faculty" },
        { Header: "Budget", accessor: "budget" },
        { Header: "schedule", accessor: "schedule" },
        { Header: "status", accessor: "status" },
    ];
    //This is the main table data

    //onjob,induction,classroom
    //add row
    const [row, setRow] = useState([{ session: '', date: '', time: '' }]);

    const addRow = () => {
        setRow([...row, { session: '', date: '', time: '' }]);
    };

    const handleFieldChange = (index, field, value) => {
        const newRows = [...row];
        newRows[index][field] = value;
        setRow(newRows);
    };
    return (
        <>
            <Badge badgeContent={4} color="secondary">
                <SoftButton color="dark" size="small" onClick={handleClickOpen}>schedule</SoftButton>
            </Badge>
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <DialogTitle id="alert-dialog-title">
                    <Grid container spacing={2}>
                        <Grid item lg={8}>{"Schedule Training"}</Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent style={{
                    padding: "1px 10px"
                }}>

                    <Grid container spacing={2} >
                        <Grid item lg={9}><FormField label="Training Name" value="Managerial effectiveness & Conflict resolution" disabled /></Grid>
                        <Grid item lg={3}><SoftButton
                            size="medium"
                            style={{ marginLeft: "3rem", marginTop: "1.8rem" }}
                            onClick={addRow}
                            color="dark"
                        >
                            Add Row
                        </SoftButton></Grid>
                        {row.map((row, index) => (
                            <Grid spacing={2} container key={index} style={{ margin: "2px" }}>
                                <Grid item lg={12}>
                                    <FormField
                                        label="Session"
                                        placeholder="Enter Session..."
                                        value={row.session}
                                        onChange={(e) => handleFieldChange(index, 'session', e.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={6}>
                                    <FormField
                                        type="date"
                                        label="Select Date"
                                        value={row.date}
                                        onChange={(e) => handleFieldChange(index, 'date', e.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={6}>
                                    <FormField
                                        type="time"
                                        label="Select Time"
                                        value={row.time}
                                        onChange={(e) => handleFieldChange(index, 'time', e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        ))}

                        <Grid item lg={12}><SoftButton color="dark" style={{ width: "100%" }}>SCHEDULE</SoftButton></Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        cancel
                    </Button>
                </DialogActions>

            </Dialog >
        </>

    )
}

export default Index