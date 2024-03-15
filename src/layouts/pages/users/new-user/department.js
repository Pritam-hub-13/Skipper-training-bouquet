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

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// NewUser page components
import UserInfo from "layouts/pages/users/new-user/components/UserInfo";
import Address from "layouts/pages/users/new-user/components/Address";
import Socials from "layouts/pages/users/new-user/components/Socials";
import Profile from "layouts/pages/users/new-user/components/Profile";

// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user/schemas/validations";
import form from "layouts/pages/users/new-user/schemas/form";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";
import FormField from "./components/FormField";
import SoftTypography from "components/SoftTypography";
import SoftSelect from "components/SoftSelect";
import divider from "assets/theme/components/divider";
import { Divider } from "@mui/material";
import CreateUser from "./components/CreateUser";

function getSteps() {
  return ["User Info", "Address", "Social", "Profile"];
}

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} />;
    case 1:
      return <Address formData={formData} />;
    case 2:
      return <Socials formData={formData} />;
    case 3:
      return <Profile formData={formData} />;
    default:
      return null;
  }
}

function NewUser() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  // const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();

    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>

            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id="add-department" autoComplete="off">

                  <Card >
                    <SoftBox p={2}>

                      <SoftBox p={1} display="flex">
                        <SoftTypography variant="h5" fontWeight="medium" color="text">
                          Department details
                        </SoftTypography>
                        {/* <SoftBox style={{ "paddingLeft": "5.3rem" }} >
                          <CreateUser />
                        </SoftBox> */}
                      </SoftBox>

                      <Grid container spacing={2}>
                        <Grid item lg={6}>
                          <FormField
                            type="text"
                            label="Department Name"
                            name="departmenttName"
                            placeholder="Enter Department Name..."
                          />
                        </Grid>
                        <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                          <SoftTypography variant="caption" fontWeight="bold" color="dark" style={{ paddingBottom: "8px", marginTop: "0.8rem", marginLeft: "2px" }}>
                            Hod*
                          </SoftTypography>
                          <SoftSelect options={options} onSelect={handleSelect} />
                        </Grid>
                        <Grid item lg={6}>
                          <FormField
                            type="text"
                            label="Department Code"
                            name="departmentCode"

                            placeholder="Enter Department code..."

                          />
                        </Grid>
                        <Grid item lg={6}>
                          <FormField
                            type="text"
                            label="Department Status"
                            name="departmentstatus"

                            placeholder="Enter Status..."

                          />
                        </Grid>
                        <Grid item lg={12}>
                          <SoftButton
                            disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark"
                            fullWidth
                          >
                            Save
                          </SoftButton>
                        </Grid>
                      </Grid>
                    </SoftBox>

                  </Card>

                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SoftBox>

    </DashboardLayout>
  );
}

export default NewUser;
