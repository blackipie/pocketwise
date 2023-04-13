import {
  IconAperture, IconCopy, IconEye, IconLayoutDashboard, IconLogin, IconMoodHappy,  IconUserPlus, IconWallet
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
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
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Shared Expense',
  },
  {
    id: uniqueId(),
    title: 'View',
    icon: IconEye,
    href: '/',
  },
  {
    id: uniqueId(),
    title: 'Manage',
    icon: IconCopy,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Helping Pocket',
  },
  {
    id: uniqueId(),
    title: 'View',
    icon: IconEye,
    href: '/',
  },
  {
    id: uniqueId(),
    title: 'Manage',
    icon: IconCopy,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Auth',
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
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  },
];

export default Menuitems;
