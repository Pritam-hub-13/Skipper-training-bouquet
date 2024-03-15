//react component
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";
// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import SoftButton from "components/SoftButton";
import Badge from '@mui/material/Badge';
import { Divider, Icon } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid } from "@mui/material";
import FormField from "layouts/pages/account/components/FormField";
import { CheckBox } from "@mui/icons-material";
import SoftSelect from "components/SoftSelect";
import Swal from "sweetalert2";
import SoftBadge from "components/SoftBadge";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import Createtraining from "./Createtraining/Index"
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
function DataTables2() {
    //for navigation
    const history = useNavigate();
    const [lgShow, setLgShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [lineItems, setLineItems] = useState([{ id: 1, designation: 'Associate Consultant', department: 'Application', hod: 'Rahul Sinha', reportingManager: 'Rahul Sinha', grade: '11', disabled: true }]);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [selectedRow, setSelectedRow] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [role, setRole] = useState('')
    const [row, setRow] = useState([{ location: 'Alampur', designation: 'Associate Consultant', department: 'Application', adminReportingManager: 'Rahul Sinha', functionReportingManager: 'Subrata Saha', hod: 'Rahul Sinha', grade: '11', startDate: '17-07-2023', disabled: true }]);

    const addRow = () => {
        setShowSaveButton(true)
        setRow([...row, { location: '', designation: '', department: '', adminReportingManager: '', functionReportingManager: '', hod: '', grade: '', startDate: '' }])
    }
    const handleDetailedView = () => {
        setLgShow(true)
    }

    // const handleAddRow = () => {
    //     setLineItems([...lineItems, { id: Date.now(), designation: '', department: '',adminReportingManager: '', functionReportingManager: '', hod: '', reportingManager: '', grade: '', startDate: '' }]);
    //     setShowSaveButton(true);
    // };
    // const handleDeleteRow = (id) => {
    //     const newLineItems = lineItems.filter(item => item.id !== id);
    //     setLineItems(newLineItems);
    // };

    const handleSave = () => {
        const updatedRows = row.map(row => {
            if (!row.disabled) {
                return { ...row, disabled: true };
            }
            return row;
        });
        setRow(updatedRows);
        setShowSaveButton(false);
    };

    const handleChange = (index, field, value) => {
        const newRows = [...row];
        newRows[index][field] = value;
        setRow(newRows);
    };

    const handleSelectedRow = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedRow(true);
        }
        else {
            setSelectedRow(false);
        }
    }

    //this row is value table row
    const [rows, setRows] = useState([
        {
            checkbox: <input type="checkbox" onChange={handleSelectedRow} />,
            name: "Pritam Manna",
            employeeCode: "2000",
            emailAddress: "pritam.manna@arodek.com",
            contactNumber: "44556677",
            panNumber: "cgfcgfcyh",
            aadharNumber: "23456789",
            location: "Alampur",
            designation: "Associate Consultant",
            department: "Application",
            adminReportingManager: "Rahul Sinha",
            functionReportingManager: "Subrata Saha",
            hod: "Rahul Sinha",
            grade: "11",
            startDate: "17-07-2013",
            detailView: <Badge color="secondary">
                <Icon onClick={handleDetailedView}>visibility</Icon>
            </Badge>,
            status: <SoftBadge
                variant="contained"
                color="success"
                size="xs"
                badgeContent="Active"
                container
            />
        }
    ]);
    const [rows2, setRows2] = useState([
        {

            name: "Pritam Manna",
            employeeCode: "2000",
            emailAddress: "pritam.manna@arodek.com",
            selectRole: <SoftSelect
                placeholder="Select Role..."
                options={[
                    { value: "01", label: "HR" },
                    { value: "02", label: "Admin" },
                ]}
                onChange={(e) =>
                    setRole(e.label)
                }
            />,

            moduleAccess: <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={[
                    { value: "01", title: "Training Boquet" },
                    { value: "02", title: "Employee Master" },
                    { value: "03", title: "User Master" },
                    { value: "04", title: "Department Master" },
                    { value: "05", title: "Designation Master" },
                    { value: "06", title: "Plant Master" },
                ]}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.title}
                    </li>
                )}
                style={{ width: 500 }}
                renderInput={(params) => (
                    <TextField {...params} placeholder="Modules" />
                )}
            />,
            create: <input type="checkbox" />,
            view: <input type="checkbox" />,
            edit: <input type="checkbox" />,
            delete: <input type="checkbox" />,
        }
    ]);
    //this column is value of table column
    const columns = [
        { Header: "Select", accessor: "checkbox" },
        { Header: "Name", accessor: "name" },
        { Header: "Employee Code", accessor: "employeeCode" },
        { Header: "Email Address", accessor: "emailAddress" },
        { Header: "Contact Number", accessor: "contactNumber" },
        { Header: "PAN Number", accessor: "panNumber" },
        { Header: "Aadhar Number", accessor: "aadharNumber" },
        { Header: "Location", accessor: "location" },
        { Header: "Designation", accessor: "designation" },
        { Header: "Department", accessor: "department" },
        { Header: "HOD", accessor: "hod" },
        { Header: "Administrative Reporting Manager", accessor: "adminReportingManager" },
        { Header: "Functional Reporting Manager", accessor: "functionReportingManager" },
        { Header: "Grade", accessor: "grade" },
        { Header: "Start Date", accessor: "startDate" },
        { Header: "Detailed View", accessor: "detailView" },
        { Header: "Status", accessor: "status" },
    ];
    const columns2 = [
        { Header: "Name", accessor: "name" },
        { Header: "Employee Code", accessor: "employeeCode" },
        { Header: "Email Address", accessor: "emailAddress" },
        { Header: "Role", accessor: "selectRole" },
        { Header: "Module Access", accessor: "moduleAccess" },
        { Header: "Create", accessor: "create" },
        { Header: "View", accessor: "view" },
        { Header: "Edit", accessor: "edit" },
        { Header: "Delete", accessor: "delete" },
    ];
    //This is the main table data
    const [dataTableData, setDataTableData] = useState({
        columns: columns,
        rows: rows
    });
    const [dataTableData2, setDataTableData2] = useState({
        columns: columns2,
        rows: rows2
    });

    //This function is use for API call
    const getList = async () => {
        let data = {
            //Api json data declare here
        }
        try {
            //fetch API here using any fetch method
        } catch (err) {

        }
    }
    const handleCreateUser = () => {
        history("/createusers")
    }
    const handleClose = () => {
        setLgShow(false)
        setModalOpen(false);
    }
    const handleMakeUser = () => {
        if (role === '' || role === undefined || role === null) {
            alert("Please Select Role for user");
            return;
        }

    }
    useEffect(() => {
    }, [])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox pt={6} pb={3}>
                <Card>
                    <SoftBox style={{
                        display: "flex",
                    }}>
                        <SoftBox p={3} lineHeight={1} style={{ width: "100%" }}>
                            <SoftTypography variant="h5" fontWeight="medium">
                                Employee Master
                            </SoftTypography>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                All the employees are listed here
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox p={4} lineHeight={1} display="flex" style={{ width: "100%" }}>
                            {selectedRow ? (
                                <>
                                    <SoftButton color="dark" style={{ left: "10rem", }} onClick={() => setModalOpen(true)}>Make User</SoftButton>

                                    <SoftButton color="dark" style={{ left: "12rem", }} onClick={handleCreateUser} >Create Employee</SoftButton>
                                </>
                            ) : (

                                <SoftButton color="dark" style={{ left: "20rem", }} onClick={handleCreateUser} >Create Employee</SoftButton>
                            )}
                        </SoftBox>
                    </SoftBox>
                    <DataTable table={dataTableData} canSearch />
                    <Dialog
                        open={lgShow}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        TransitionComponent={Transition}
                        fullScreen
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"User Deatils"}
                        </DialogTitle>
                        <Divider variant="dark" />
                        <DialogContent>
                            <div style={{ border: "2px solid ", borderRadius: "10px", borderColor: "#004475" }}>

                                <SoftTypography p={1} variant="h5" fontWeight="medium" color="text">
                                    Header Items
                                </SoftTypography>



                                <Grid container spacing={2} p={2}>
                                    <Grid item lg={3} xs={12} sm={6}>
                                        <FormField
                                            type="text"
                                            label=" Name"
                                            name="name"
                                            value="Pritam Manna"
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item lg={3} xs={12} sm={6}>
                                        <FormField
                                            type="text"
                                            label="Employee Code"
                                            name="employeeCode"
                                            value="2000"
                                            disabled
                                        />

                                    </Grid>
                                    <Grid item lg={3} xs={12} sm={6}>
                                        <FormField
                                            type="email"
                                            label="Email Address"
                                            name="email"
                                            value="pritam.manna@arodek.com"
                                            disabled
                                        />

                                    </Grid>
                                    <Grid item lg={3} xs={12} sm={6}>
                                        <FormField
                                            type="number"
                                            label="Contact Number"
                                            name="contactNumber"
                                            value="44556677"
                                            disabled
                                        />

                                    </Grid>
                                    <Grid item lg={3} xs={12} sm={6}>
                                        <FormField
                                            type="text"
                                            label="Location"
                                            name="location"
                                            value="Kolkata"
                                            disabled
                                        />

                                    </Grid>
                                </Grid>


                            </div>
                            <Divider />
                            <div style={{ border: "2px solid ", borderRadius: "10px", borderColor: "#004475" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>

                                    <SoftTypography p={1} variant="h5" fontWeight="medium" color="text">
                                        Line Items
                                    </SoftTypography>

                                    {showSaveButton ? (
                                        <>
                                            <SoftButton
                                                size="medium"
                                                style={{ backgroundColor: "#004475", color: "white", marginTop: "1rem" }}
                                                onClick={addRow}
                                            ><Icon>edit</Icon></SoftButton>
                                            <SoftButton
                                                size="medium"
                                                style={{ backgroundColor: "#004475", color: "white", marginTop: "1rem" }}
                                                onClick={handleSave}
                                            >Save</SoftButton>
                                        </>

                                    ) : (
                                        <SoftButton
                                            size="medium"
                                            style={{ backgroundColor: "#004475", color: "white", marginTop: "1rem", marginRight: "1rem" }}
                                            onClick={addRow}
                                        ><Icon>edit</Icon></SoftButton>
                                    )}
                                </div>
                                {row.map((row, index) => (
                                    <Grid key={index} container spacing={2} p={2}>
                                        <Grid item lg={3} xs={12} sm={6}>
                                            <FormField
                                                type="text"
                                                label="Location"
                                                name="location"
                                                value={row.location}
                                                disabled={row.disabled}
                                                onChange={(e) => handleChange(index, 'location', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={6}>
                                            <FormField
                                                type="text"
                                                label="Designation"
                                                name="designation"
                                                value={row.designation}
                                                disabled={row.disabled}
                                                onChange={(e) => handleChange(index, 'designation', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={6}>
                                            <FormField
                                                type="text"
                                                label="Department"
                                                name="department"
                                                value={row.department}
                                                disabled={row.disabled}
                                                onChange={(e) => handleChange(index, 'department', e.target.value)}
                                            />

                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={6}>
                                            <FormField
                                                type="text"
                                                label="Administrative Reporting Manager"
                                                name="adminReportingManager"
                                                value={row.adminReportingManager}
                                                disabled={row.disabled}
                                                onChange={(e) => handleChange(index, 'adminReportingManager', e.target.value)}
                                            />

                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={6}>
                                            <FormField
                                                type="text"
                                                label="Functional Reporting Manager"
                                                name="functionReportingManager"
                                                value={row.functionReportingManager}
                                                disabled={row.disabled}
                                                onChange={(e) => handleChange(index, 'functionReportingManager', e.target.value)}
                                            />

                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={6}>
                                            <FormField
                                                type="text"
                                                label="HOD"
                                                name="hod"
                                                value={row.hod}
                                                disabled={row.disabled}
                                                onChange={(e) => handleChange(index, 'hod', e.target.value)}
                                            />

                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={6}>
                                            <FormField
                                                type="text"
                                                label="Grade"
                                                name="grade"
                                                value={row.grade}
                                                disabled={row.disabled}
                                                onChange={(e) => handleChange(index, 'grade', e.target.value)}
                                            />

                                        </Grid>
                                        <Grid item lg={3} xs={12} sm={6}>
                                            <FormField
                                                type="text"
                                                label="Start Date"
                                                name="startDate"
                                                value={row.startDate}
                                                disabled={row.disabled}
                                                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                                            />

                                        </Grid>

                                    </Grid>
                                ))}


                            </div>
                        </DialogContent>
                        <DialogActions>
                            <SoftButton color="dark" onClick={handleClose} autoFocus>
                                cancel
                            </SoftButton>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={modalOpen}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        TransitionComponent={Transition}
                        maxWidth="100%"
                        fullWidth
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"User Deatils"}
                        </DialogTitle>
                        <Divider variant="dark" />
                        <DialogContent sx={{ height: "15rem" }}>
                            <DataTable height={'10rem'} entriesPerPage={false} showTotalEntries={false} table={dataTableData2} />
                        </DialogContent>
                        <DialogActions>
                            <SoftButton color="dark" onClick={handleMakeUser} autoFocus>
                                Add
                            </SoftButton>
                            <SoftButton color="dark" onClick={handleClose} autoFocus>
                                cancel
                            </SoftButton>
                        </DialogActions>
                    </Dialog>
                </Card>
            </SoftBox>
        </DashboardLayout>
    );
}

export default DataTables2;
