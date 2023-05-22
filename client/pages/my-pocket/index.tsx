import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../src/components/container/PageContainer';
import DashboardCard from '../../src/components/shared/DashboardCard';
import FullLayout from '../../src/layouts/full/FullLayout';

const myPocket = () => {
  return (
    <PageContainer title="My Pocket" description="this is Sample page">
      <DashboardCard title="My Pocket">
        <Typography> My Pocket section is under construction</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default myPocket;
myPocket.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};