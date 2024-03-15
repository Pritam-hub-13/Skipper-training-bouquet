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
import DataTable from 'examples/Tables/DataTable';
import data from 'assets/Constant';
import Checkbox from '@mui/material/Checkbox';
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
    const option = data[2].schedule.map((row, index) => {
        let data = ""
        return (
            { value: row.session, label: row.session + " " + row.date + " " + row.time }
        )
    })
    console.log(option)
    const [rows, setRows] = useState([
        {
            name: data[2].training,
            duration: data[2].duration,
            schedule: <SoftSelect options={option} />,
            completed: <Checkbox />,
            absent: <Checkbox />,
            completedhour: "0",
            update: <SoftButton size="small" color="dark">Update</SoftButton>

        }
    ]);

    //this column is value of table column
    const columns = [
        { Header: "Name", accessor: "name" },
        { Header: "Employee Code", accessor: "duration" },
        { Header: "Schedule", accessor: "schedule", width: "25%" },
        { Header: "Training completed", accessor: "completed" },
        { Header: "Absent", accessor: "absent" },
        { Header: "Completed hour", accessor: "completedhour" },
        { Header: "Action", accessor: "update" },

    ];

    //This is the main table data
    const [dataTableData, setDataTableData] = useState({
        columns: columns,
        rows: rows
    });
    return (
        <div>
            <Badge color="secondary">
                <Icon onClick={handleDetailedView}>visibility</Icon>
            </Badge>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xxl"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                TransitionComponent={Transition}
            >
                <DialogTitle id="alert-dialog-title">
                    <Grid container spacing={2}>
                        <Grid item lg="8">{"Training Identification"}</Grid>
                    </Grid>

                </DialogTitle>

                <DialogContent style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "15rem"
                }}>
                    <div style={{ border: "1.9px solid ", borderRadius: "10px", borderColor: "#004475" }}>
                        <SoftBox p={1} lineHeight={1} style={{ width: "100%" }}>
                            <SoftTypography variant="h5" fontWeight="medium">
                                Header Items
                            </SoftTypography>
                        </SoftBox>
                        <Grid container spacing={2} style={{
                            padding: "15px",
                        }}>

                            <Grid item lg={12}>
                                <FormField label="Employee Name" disabled={disable} value="Pritam Manna" />
                            </Grid>

                            <Grid item lg={4} flexDirection={'column'} >
                                <FormField value="Kolkata" label="Location" disabled />

                            </Grid>
                            <Grid item lg={4} flexDirection={'column'} >
                                <FormField value="Associate Consultant" label="Designation" disabled />

                            </Grid>
                            <Grid item lg={4}>
                                <FormField value="Application " label="Department" disabled />
                            </Grid>
                            <Grid item lg={4}>
                                <FormField label="Grade" value="A" type="name" disabled={disable} />
                            </Grid>

                            <Grid item lg={4} >
                                <FormField label="Fiscal Year" value="2024-2025" disabled />

                            </Grid>


                            <Grid item lg={4} >
                                <FormField label="Total Assigned Training(Hrs)" value="0" disabled type="number" />

                            </Grid>


                            <Grid item lg={4} >
                                <FormField label="Total Schedule Training(Hrs)" value="0" disabled type="number" />

                            </Grid>
                            <Grid item lg={4} >
                                <FormField label="Total Completion training(Hrs)" value="0" disabled type="number" />

                            </Grid>
                            <Grid item lg={4} >
                                <FormField label="Status" value="active" disabled />

                            </Grid>


                        </Grid>
                    </div>
                    <div>
                        <Divider variant='dark' />
                    </div>

                    <div style={{ border: "1.9px solid ", borderRadius: "10px", borderColor: "#004475" }}>
                        <SoftBox p={1} lineHeight={1} style={{ width: "100%" }}>
                            <SoftTypography variant="h5" fontWeight="medium">
                                Line Items
                            </SoftTypography>
                        </SoftBox>
                        <Grid container spacing={2} style={{
                            padding: "15px",
                        }}>
                            <Grid item lg={12}>
                                <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false} />
                            </Grid>
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