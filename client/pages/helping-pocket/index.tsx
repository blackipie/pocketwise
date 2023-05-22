import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../src/components/container/PageContainer';
import DashboardCard from '../../src/components/shared/DashboardCard';
import FullLayout from '../../src/layouts/full/FullLayout';

const helpingPocket = () => {
  return (
    <PageContainer title="Helping Pocket" description="this is Sample page">
      <DashboardCard title="Helping Pocket">
        <Typography> Helping Pocket section is under construction</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default helpingPocket;
helpingPocket.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};