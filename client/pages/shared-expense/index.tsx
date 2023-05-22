import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../src/components/container/PageContainer';
import DashboardCard from '../../src/components/shared/DashboardCard';
import FullLayout from '../../src/layouts/full/FullLayout';

const sharedExpense = () => {
  return (
    <PageContainer title="Shared Expense" description="this is Sample page">
      <DashboardCard title="Shared Expense">
        <Typography> Shared Expense section is under construction</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default sharedExpense;
sharedExpense.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};