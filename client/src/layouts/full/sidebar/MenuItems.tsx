import { Divider } from '@mui/material';
import {
  IconAperture, IconBoxMultiple, IconLayoutDashboard, IconLogin, IconMoneybag, IconMoodHappy,  IconUserPlus, IconWallet
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
    id: uniqueId(),
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/',
  },
  {
    id: uniqueId(),
    title: 'My Pocket',
    icon: IconWallet,
    href: '/my-pocket',
  },


  {
    id: uniqueId(),
    title: 'Shared Expense',
    icon: IconBoxMultiple,
    href: '/shared-expense',
  },


  {
    id: uniqueId(),
    title: 'Helping Pocket',
    icon: IconMoneybag,
    href: '/helping-pocket',
  },
  {
    navlabel: true,
     id: uniqueId(),
    subheader: <Divider sx={{
      borderWidth:'1px',
      borderColor: "white",
      marginBottom:3
      
    }} />,

  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/authentication/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/authentication/register',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Extra',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Sample Page',
  //   icon: IconAperture,
  //   href: '/sample-page',
  // },
];

export default Menuitems;
