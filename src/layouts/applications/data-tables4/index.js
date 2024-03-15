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
import data from "assets/Constant";
import AssignTraining from "../ScheduleTraining";
import Detailedview from "./detailedview/index"
// import Createtraining from "./Createtraining/Index"
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function DataTables4() {
    //for navigation
    const history = useNavigate();
    const [added, setAdded] = useState(true);
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
            name: data[3].name,
            employeeCode: data[3].employeeCode,
            emailAddress: data[3].emailAddress,
            designation: data[3].designation,
            department: data[3].department,
            adminReportingManager: data[3].adminReportingManager,
            functionReportingManager: data[3].functionReportingManager,
            detailview: <Detailedview />,
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
        { Header: "Employee Code", accessor: "employeeCode" },
        { Header: "Email Address", accessor: "emailAddress" },
        { Header: "Designation", accessor: "designation" },
        { Header: "Department", accessor: "department" },
        { Header: "Administrative Reporting Manager", accessor: "adminReportingManager" },
        { Header: "Functional Reporting Manager", accessor: "functionReportingManager" },
        { Header: "Detailed View", accessor: "detailview" },
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
    const handleAssignTraining = () => {
        history("/assignTraining")
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
                                Training Identification
                            </SoftTypography>
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                                All the Training identification are listed here
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox p={4} lineHeight={1} display="flex" style={{ width: "100%" }}>

                            <SoftButton style={{ left: "20rem" }} onClick={handleAssignTraining} color="dark" >Assign Training</SoftButton>

                        </SoftBox>
                    </SoftBox>
                    <DataTable table={dataTableData} canSearch />
                </Card>
            </SoftBox>
        </DashboardLayout>
    );
}

export default DataTables4;
