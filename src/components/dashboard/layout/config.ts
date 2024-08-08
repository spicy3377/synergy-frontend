import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Talents', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Skills', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Admin Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Job and Account', href: paths.dashboard.account, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
