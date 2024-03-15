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
import SoftSelect from "components/SoftSelect";
// import Createtraining from "./Createtraining/Index"
function Departmenttable() {
  //for navigation
  const history = useNavigate();
  const handleDetailedView = () => {
    alert("Hi!!. Please take approval first then modal will come")
  }
  // const options = [
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },
  // ];;
  //this row is value table row
  const [selectedOption, setSelectedOption] = useState(null);

  // const handleSelect = (option) => {
  //   setSelectedOption(option);
  // };

  const [rows, setRows] = useState([
    {
      departmentName: "Hr",
      departmentCode: "101",
      Hod: "ABC",
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
    { Header: "department Name", accessor: "departmentName" },
    { Header: "department Code", accessor: "departmentCode" },
    { Header: "Hod", accessor: "Hod" },
    { Header: "department Status", accessor: "status" },

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
  const handleAddDepartment = () => {
    history("/adddepartment")
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
                Department Master
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                All the Department are listed here
              </SoftTypography>
            </SoftBox>
            <SoftBox p={3} lineHeight={1} style={{ width: "100%" }}>

              <SoftButton color="dark" style={{ left: "20rem" }} onClick={handleAddDepartment} >Add Department </SoftButton>
            </SoftBox>
          </SoftBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Departmenttable;
