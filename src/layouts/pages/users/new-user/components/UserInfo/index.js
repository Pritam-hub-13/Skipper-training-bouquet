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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { firstName, lastName, employeeCode, email, contactNumber } = formField;
  const {
    firstName: firstNameV,
    lastName: lastNameV,
    employeeCode: companyV,
    email: emailV,
    contactNumber: contactNumberV,
  } = values;

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Create User
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={firstName.type}
              label={firstName.label}
              name={firstName.name}
              value={firstNameV}
              placeholder={firstName.placeholder}
             
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={lastName.type}
              label={lastName.label}
              name={lastName.name}
              value={lastNameV}
              placeholder={lastName.placeholder}
           
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={employeeCode.type}
              label={employeeCode.label}
              name={employeeCode.name}
              value={companyV}
              placeholder={employeeCode.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={contactNumber.type}
              label={contactNumber.label}
              name={contactNumber.name}
              value={contactNumberV}
              placeholder={contactNumber.placeholder}
              // error={errors.password && touched.password}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <FormField
            type={repeatPassword.type}
            label={repeatPassword.label}
            name={repeatPassword.name}
            value={repeatPasswordV}
            placeholder={repeatPassword.placeholder}
            error={errors.repeatPassword && touched.repeatPassword}
            success={repeatPasswordV.length > 0 && !errors.repeatPassword}
            inputProps={{ autoComplete: "" }}
            />
          </Grid> */}
        </Grid>
          <Grid container spacing={3}>
          <Grid item xs={4} sm={3}>
            <FormField
              type="text"
              label="Designation"
              name="designation"
              
              placeholder="Enter Designation.."
            />
          </Grid>
          <Grid item xs={4} sm={3}>
            <FormField
              type="text"
              label="Department"
              name="department"
             
              placeholder="Enter Department..."
            />
          </Grid>
          <Grid item xs={4} sm={3}>
            <FormField
              type="text"
              label="HOD"
              name="hod"
             
              placeholder="Enter HOD..."
            />
          </Grid>
          <Grid item xs={4} sm={3}>
            <FormField
              type="text"
              label="Reporting Manager"
              name="reportingManager"
             
              placeholder="Enter Reporting Manager..."
            />
          </Grid>
          <Grid item xs={4} sm={3}>
            <FormField
              type="text"
              label="Grade"
              name="grade"
             
              placeholder="Enter Grade..."
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
