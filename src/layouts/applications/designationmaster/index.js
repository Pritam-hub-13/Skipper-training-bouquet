//react component
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
import { Icon } from "@mui/material";
// import Createtraining from "./Createtraining/Index"
function Designationtable() {
  //for navigation
  const history = useNavigate();
  const handleDetailedView = () => {
    alert("Hi!!. Please take approval first then modal will come")
  }
  //this row is value table row
  const [rows, setRows] = useState([
    {
      designationName: "Application",
      designationCode: "1011",
      status: <SoftBadge
        variant="contained"
        color="success"
        size="xs"
        badgeContent="Active"
        container
      />,
      //   designation: "Associate Consultant",
      //   designation: "Application",
      //   hod: "Rahul Sinha",
      //   reportingManager: "Rahul Sinha",
      //   grade: "11",
      //   detailView: <Badge  color="secondary"> 
      //   <Icon onClick={handleDetailedView}>visibility</Icon>
      // </Badge>,
      // assignTraining: <SoftButton color="dark" size="small">assign</SoftButton>
    }
  ]);
  //this column is value of table column
  const columns = [
    { Header: "Designation Name", accessor: "designationName" },
    { Header: "Designation Code", accessor: "designationCode" },
    { Header: "Designation Status", accessor: "status" },
    // { Header: "Designation", accessor: "designation" },
    // { Header: "designation", accessor: "designation" },
    // { Header: "HOD", accessor: "hod" },
    // { Header: "Reporting Manager", accessor: "reportingManager" },
    // { Header: "Grade", accessor: "grade" },
    // { Header: "Assign Training", accessor: "assignTraining" },
    // { Header: "Detailed View", accessor: "detailView" },
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
  const handleAddDesignation = () => {
    history("/add-designation")
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
                Designation Master
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                All the designation are listed here
              </SoftTypography>
            </SoftBox>
            <SoftBox p={3} lineHeight={1} style={{ width: "100%" }}>

              <SoftButton color="dark" style={{ left: "20rem" }} onClick={handleAddDesignation} >Add Designation </SoftButton>
            </SoftBox>
          </SoftBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Designationtable;
