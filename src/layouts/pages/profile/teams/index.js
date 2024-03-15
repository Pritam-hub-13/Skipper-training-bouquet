/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import TeamProfileCard from "examples/Cards/TeamCards/TeamProfileCard";
import EventCard from "examples/Cards/EventCard";

// Teams page components
import Header from "layouts/pages/profile/components/Header";
import Stories from "layouts/pages/profile/teams/components/Stories";
import Post from "layouts/pages/profile/teams/components/Post";
import Card from "@mui/material/Card";


// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoInvision from "assets/images/small-logos/logo-invision.svg";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
// import { useState } from "react";
// import * as XLSX from 'xlsx';
import { Button } from "@mui/material";
import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function Teams() {
  // TeamProfileCard dropdown menu state
  const [marketingMenu, setMarketingMenu] = useState(null);
  const [designMenu, setDesignMenu] = useState(null);
  const [myFile, setMyFile] = useState(null);
  // const [dataTableData, setDataTableData] = useState({
  //   columns: [],
  //   rows: []
  // });

  // TeamProfileCard dropdown menu handlers
  const openMarketingMenu = (event) => setMarketingMenu(event.currentTarget);
  const closeMarketingMenu = () => setMarketingMenu(null);
  const openDesignMenu = (event) => setDesignMenu(event.currentTarget);
  const closeDesignMenu = () => setDesignMenu(null);



  // const handleFileUpload = (e) => {

  //   console.log("file>>> ", myFile)
  //   const file = e.target.files[0];
  //   if (file && (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.type === "application/vnd.ms-excel")) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const data = new Uint8Array(e.target.result);
  //       const workbook = XLSX.read(data, { type: 'array' });
  //       const sheetName = workbook.SheetNames[0];
  //       const sheet = workbook.Sheets[sheetName];
  //       const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  //       // Extract column names from the first row of Excel data
  //       const excelColumns = jsonData[0].map(header => ({
  //         Header: header,
  //         accessor: header.toLowerCase().replace(/\s/g, ''),
  //         width: "auto" // You can set default width here
  //       }));

  //       // Extract rows from the Excel data
  //       const excelRows = jsonData.slice(1).map(row => {
  //         const newRow = {};
  //         excelColumns.forEach((column, index) => {
  //           newRow[column.accessor] = row[index];
  //         });
  //         return newRow;
  //       });

  //       // Update the dataTableData state
  //       setDataTableData({
  //         columns: excelColumns,
  //         rows: excelRows
  //       });
  //     };
  //     reader.readAsArrayBuffer(file);
  //   } else {
  //     alert("Please select a valid Excel file!");
  //   }
  // };

  // Dropdown menu for the digital marketing TeamProfileCard
  const renderMarketingMenu = (
    <Menu
      anchorEl={marketingMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(marketingMenu)}
      onClose={closeMarketingMenu}
      keepMounted
    >
      <MenuItem onClick={closeMarketingMenu}>Action</MenuItem>
      <MenuItem onClick={closeMarketingMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMarketingMenu}>Something else here</MenuItem>
    </Menu>
  );

  // Dropdown menu for the design TeamProfileCard
  const renderDesignMenu = (
    <Menu
      anchorEl={designMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(designMenu)}
      onClose={closeDesignMenu}
      keepMounted
    >
      <MenuItem onClick={closeDesignMenu}>Action</MenuItem>
      <MenuItem onClick={closeDesignMenu}>Another action</MenuItem>
      <MenuItem onClick={closeDesignMenu}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={6} pb={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={3} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SoftTypography>
            </SoftBox>

            {/* <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
      /> */}



            <DataTable table={dataTableData} />
          </Card>
        </SoftBox>
        {/* <Card>
          <SoftBox p={3} lineHeight={1}>
            <SoftTypography variant="h5" fontWeight="medium">
              Datatable Search
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </SoftTypography>
          </SoftBox>
          <DataTable table={dataTableData} canSearch />
        </Card> */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Teams;
