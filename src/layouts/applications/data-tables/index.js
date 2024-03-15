//react component
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Schedulecom from "./Schedule/Index"
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
import Detailedview from "./Detailedview/Index"
import Createtraining from "./Createtraining/Index"
function DataTables() {
  //for navigation
  const navigate = useNavigate();
  //view function

  //this row is value table row
  const [rows, setRows] = useState([
    {
      training: "Managerial effectiveness & Conflict resolution",
      duration: "2.5 hrs",
      categorey: "Internal",
      type: "On Job",
      faculty: "ABC",
      budgeted: "Yes",
      budget: "10000",
      schedule: <Schedulecom />,
      detail: <Detailedview />,
      status: <SoftBadge
        variant="contained"
        color="success"
        size="xs"
        badgeContent="Active"
        container
      />,
    }
  ]);
  //this column is value of table column
  const columns = [
    { Header: "Training", accessor: "training" },
    { Header: "duration", accessor: "duration" },
    { Header: "categorey", accessor: "categorey" },
    { Header: "type", accessor: "type" },
    { Header: "Faculty", accessor: "faculty" },
    { Header: "budgeted", accessor: "budgeted" },
    { Header: "Budget", accessor: "budget" },
    { Header: "schedule", accessor: "schedule" },
    { Header: "Detailed View", accessor: "detail" },
    { Header: "status", accessor: "status" },
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
  //Callback
  const callback = (e) => {
    console.log(e);
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
                Training Bouquet
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                All the trainings are listed here
              </SoftTypography>
            </SoftBox>
            <SoftBox p={3} lineHeight={1} style={{ width: "100%" }}>
              <SoftButton style={{
                left: "24rem", color: "white", backgroundColor: "#004475"
              }} onClick={() => {
                navigate("/schedule-trainings")
              }}>View Scheduled training</SoftButton>
            </SoftBox>
            <SoftBox p={3} lineHeight={1} style={{ width: "100%" }}>
              <Createtraining />
            </SoftBox>

          </SoftBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default DataTables;
