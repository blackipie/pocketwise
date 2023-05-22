import { useMediaQuery, Box, Drawer } from '@mui/material';
import Logo from '../shared/logo/Logo';
import SidebarItems from './SidebarItems';

interface ItemType {
  isMobileSidebarOpen:  boolean;
  onSidebarClose:  (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({isMobileSidebarOpen, onSidebarClose, isSidebarOpen }: ItemType) => {

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const sidebarWidth = '270px';

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
         
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
      
          PaperProps={{
            sx: {

              background: " linear-gradient(280deg, rgba(237,240,255,0.9652193641128326) 0%, rgba(241,240,255,1) 50%, rgba(189,194,250,0.9344070391828606) 100%)",
              boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
              width: sidebarWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
         
              height: '100%',
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box px={3}>
              <Logo />
            </Box>
            <Box
          
            >
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
          
            </Box>
            
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          // overflow:"hidden",
         background: " linear-gradient(280deg, rgba(237,240,255,0.9652193641128326) 0%, rgba(241,240,255,1) 50%, rgba(189,194,250,0.9344070391828606) 100%)",
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={2}>
        <Logo />
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
  
    </Drawer>
  );
};

export default Sidebar;
