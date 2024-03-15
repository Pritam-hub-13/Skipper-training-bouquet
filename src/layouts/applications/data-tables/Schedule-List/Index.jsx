//import react component
import React from 'react';
import { useState } from 'react';
//import Softui component
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import DataTable from 'examples/Tables/DataTable'
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
//import Mui component
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Card, Divider, Grid } from '@mui/material';
import FormField from 'layouts/applications/wizard/components/FormField';
import SoftBadge from 'components/SoftBadge';
import SoftButton from 'components/SoftButton';
const Index = () => {
    const [rows, setRows] = useState([

        {
            session: "1st Session",
            date: "23-04-2024",
            time: "11:00 AM",
            action: <SoftButton color="dark" size="small">assign</SoftButton>,
            status: <SoftBadge
                variant="contained"
                color="success"
                size="xs"
                badgeContent="Active"
                container
            />
        },
        {
            session: "2nd Session",
            date: "05-05-2024",
            time: "12:00 PM",
            action: <SoftButton color="dark" size="small">assign</SoftButton>,
            status: <SoftBadge
                variant="contained"
                color="success"
                size="xs"
                badgeContent="Active"
                container
            />
        },
        {
            session: "3rd Session",
            date: "10-06-2024",
            time: "01:00 pm",
            action: <SoftButton color="dark" size="small">assign</SoftButton>,
            status: <SoftBadge
                variant="contained"
                color="success"
                size="xs"
                badgeContent="Active"
                container
            />
        },
    ]);
    //this column is value of table column
    const columns = [
        { Header: "Session", accessor: "session" },
        { Header: "Date", accessor: "date" },
        { Header: "Time", accessor: "time" },
        { Header: "Action", accessor: "action" },
        { Header: "Status", accessor: "status" },
    ];
    //This is the main table data
    const [dataTableData, setDataTableData] = useState({
        columns: columns,
        rows: rows
    });
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={2} paddingTop={"3rem"}>
                <Grid item lg={12}>
                    <Card style={{
                        padding: "10px"
                    }}>
                        <Grid container spacing={2}>
                            <Grid item lg={9}>
                                <SoftBox p={3} lineHeight={1} style={{ width: "100%" }}>
                                    <SoftTypography variant="h5" fontWeight="medium">
                                        Scheduled Trainings
                                    </SoftTypography>
                                    <SoftTypography variant="button" fontWeight="regular" color="text">
                                        All the scheduled trainings are listed here
                                    </SoftTypography>
                                </SoftBox>
                            </Grid>
                            <Grid item lg={3}>
                                <SoftBox p={1} lineHeight={1} style={{ width: "100%" }}>
                                    <FormField placeholder="Search..." />
                                </SoftBox>
                            </Grid>
                            <Grid item lg={12} style={{
                                padding: "5px 40px"
                            }}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <SoftTypography variant="h6" fontWeight="medium" style={{
                                            color: "#004475", padding: "0px 10px", borderRadius: "4px"
                                        }}>
                                            Managerial effectiveness & Conflict resolution
                                        </SoftTypography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Card>
                                            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false} />
                                        </Card>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>

                        </Grid>
                    </Card>
                </Grid>
            </Grid >


        </DashboardLayout >
    )
}

export default Index