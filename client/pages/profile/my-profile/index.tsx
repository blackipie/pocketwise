import type { ReactElement } from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import FullLayout from '../../../src/layouts/full/FullLayout';

import Profile from '../../../src/components/profile/profile';
const  myProfile= () => {
  return (
    <PageContainer  title="My Profile" description="this is Sample page">
      <DashboardCard>
 <>
          
     
              <Profile  />
        


           </>
      </DashboardCard>
    </PageContainer>
  );
};

export default myProfile;
myProfile.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};