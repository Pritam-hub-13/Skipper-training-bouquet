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

import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";
import Badge from '@mui/material/Badge';

const dataTableData = {
  columns: [
    { Header: "Training", accessor: "training" },
    { Header: "duration", accessor: "duration" },
    { Header: "type", accessor: "type" },
    { Header: "start date", accessor: "startDate" },
    { Header: "end date", accessor: "endDate" },
    { Header: "schedule", accessor: "schedule" },
    { Header: "status", accessor: "status" },
  ],

  rows: [
    {
      training: "Managerial effectiveness & Conflict resolution",
      duration: "2.5 hrs",
      type: "Soft Skills",
      startDate: "4/11/2021",
      endDate: "4/11/2021",
      salary: "$474,978",
      schedule: <Badge badgeContent={4} color="secondary">
        <SoftButton color="dark" size="small">schedule</SoftButton>
      </Badge>,
      status: <SoftBadge
        variant="contained"
        color="success"
        size="xs"
        badgeContent="Active"
        container
      />,

    },
    {
      training: "Managerial effectiveness & Conflict resolution",
      duration: "2.5 hrs",
      type: "Soft Skills",
      startDate: "4/11/2021",
      endDate: "4/11/2021",
      salary: "$474,978",
      schedule: <SoftButton color="dark" size="small">schedule</SoftButton>,
      status: <SoftBadge
        variant="contained"
        color="success"
        size="xs"
        badgeContent="Active"
        container
      />,

    },
    {
      training: "Managerial effectiveness & Conflict resolution",
      duration: "2.5 hrs",
      type: "Soft Skills",
      startDate: "4/11/2021",
      endDate: "4/11/2021",
      salary: "$474,978",
      schedule: <SoftButton color="dark" size="small">schedule</SoftButton>,
      status: <SoftBadge
        variant="contained"
        color="success"
        size="xs"
        badgeContent="Active"
        container
      />,

    },
    {
      training: "Managerial effectiveness & Conflict resolution",
      duration: "2.5 hrs",
      type: "Soft Skills",
      startDate: "4/11/2021",
      endDate: "4/11/2021",
      salary: "$474,978",
      schedule: <SoftButton color="dark" size="small">schedule</SoftButton>,
      status: <SoftBadge
        variant="contained"
        color="success"
        size="xs"
        badgeContent="Active"
        container
      />,

    },
    {
      training: "Managerial effectiveness & Conflict resolution",
      duration: "2.5 hrs",
      type: "Soft Skills",
      startDate: "4/11/2021",
      endDate: "4/11/2021",
      salary: "$474,978",
      schedule: <SoftButton color="dark" size="small">schedule</SoftButton>,
      status: <SoftBadge
        variant="contained"
        color="success"
        size="xs"
        badgeContent="Active"
        container
      />,

    },
    {
      training: "Managerial effectiveness & Conflict resolution",
      duration: "2.5 hrs",
      type: "Soft Skills",
      startDate: "4/11/2021",
      endDate: "4/11/2021",
      salary: "$474,978",
      schedule: <SoftButton color="dark" size="small">schedule</SoftButton>,
      status: <SoftBadge
        variant="contained"
        color="success"
        size="xs"
        badgeContent="Active"
        container
      />,

    },
  ],
};

export default dataTableData;
