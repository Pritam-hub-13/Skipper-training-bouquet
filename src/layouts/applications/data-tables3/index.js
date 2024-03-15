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
import SoftBadge from "components/SoftBadge";
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
import CreateUser from "layouts/pages/users/new-user/components/CreateUser";
import DetailviewCom from "./detailview/Index"
// import Createtraining from "./Createtraining/Index"
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function DataTables3() {
    //for navigation
    const history = useNavigate();
    const [lgShow, setLgShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [lineItems, setLineItems] = useState([{ id: 1, designation: 'Associate Consultant', department: 'Application', hod: 'Rahul Sinha', reportingManager: 'Rahul Sinha', grade: '11', disabled: true }]);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [selectedRow, setSelectedRow] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [role, setRole] = useState('')

    const handleDetailedView = () => {
        setLgShow(true)
    }

    const handleAddRow = () => {
        setLineItems([...lineItems, { id: Date.now(), designation: '', department: '', hod: '', reportingManager: '', grade: '' }]);
        setShowSaveButton(true);
    };
    const handleDeleteRow = (id) => {
        const newLineItems = lineItems.filter(item => item.id !== id);
        setLineItems(newLineItems);
    };

    const handleSave = () => {
        const updatedLineItems = lineItems.map(item => {
            if (item.isNew) {
                return { ...item, disabled: true, isNew: false };
            }
            return item;
        });
        setLineItems(updatedLineItems);
        setShowSaveButton(false);
    };

    const handleChange = (id, field, value) => {
        const newLineItems = lineItems.map(item => {
            if (item.id === id) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setLineItems(newLineItems);
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
            role: "admin",
            password: "12345678",
            detailView: <DetailviewCom />,
            status: <SoftBadge
                variant="contained"
                color="success"
                size="xs"
                badgeContent="Active"
                container
            />
        }
    ]);

    //this column is value of table column
    const columns = [
        { Header: "Name", accessor: "name" },
        { Header: "Email Address", accessor: "emailAddress" },
        { Header: "Contact Number", accessor: "contactNumber" },
        { Header: "PAN Number", accessor: "panNumber" },
        { Header: "Aadhar Number", accessor: "aadharNumber" },
        { Header: "Role", accessor: "role" },
        { Header: "Password", accessor: "password" },
        { Header: "Detailed View", accessor: "detailView" },
        { Header: "Status", accessor: "status" },
    ];

    //This is the main table data
    const [dataTableData, setDataTableData] = useState({
        columns: columns,
        rows: rows
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
        setLgShow(true);
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
        Swal.fire({
            icon: "success",
            title: "Done",
            text: "User Added",
        })
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
                                User Master
                            </SoftTypography>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                All the users are listed here
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox p={4} lineHeight={1} display="flex" style={{ width: "100%" }}>
                            <CreateUser />                        </SoftBox>
                    </SoftBox>
                    <DataTable table={dataTableData} canSearch />

                    {/* <Dialog
                        open={lgShow}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        TransitionComponent={Transition}
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Upload Users"}
                        </DialogTitle>
                        <Divider variant="dark" />
                        <DialogContent>
                            <CreateUser/>
                        </DialogContent>
                        <DialogActions>
                            <SoftButton color="dark" onClick={handleClose} autoFocus>
                                cancel
                            </SoftButton>
                        </DialogActions>
                    </Dialog> */}
                </Card>
            </SoftBox>
        </DashboardLayout>
    );
}

export default DataTables3;
