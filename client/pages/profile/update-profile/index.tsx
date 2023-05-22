import type { ReactElement } from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import FullLayout from '../../../src/layouts/full/FullLayout';
import {
  Avatar,
  Box,
  Grid,

} from "@mui/material";

import UpdateProfileForm from '../../../src/components/forms/theme-elements/updateProfileForm';

const editprofile = () => {

  return (
    <PageContainer title="Update Profile" description="Update your Profile here">
      <DashboardCard title="Update Profile">
        <>

          <Grid spacing={2} gap={2} item xs={6} md={8}>
         
            <UpdateProfileForm/>

          </Grid>
       
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default editprofile;
editprofile.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};