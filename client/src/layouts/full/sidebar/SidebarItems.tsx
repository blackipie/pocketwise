
import Menuitems from './MenuItems';
import { useRouter } from 'next/router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';

const SidebarItems = ({toggleMobileSidebar}: any) => {
  const { pathname } = useRouter();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List  className="sidebarNav" component="div"
               sx={{ 
                pt: 0 }}
      >
        {Menuitems.map((item:any) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return(
            <>
            <NavGroup item={item} key={item.subheader} />
              </>
            )
            // {/********If Sub Menu**********/}
            //  eslint no-else-return: "off" 
          } else {
            return (
              <>
              <NavItem item={item} key={item.id} pathDirect={pathDirect} onClick={toggleMobileSidebar} 
              />


</>

            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
