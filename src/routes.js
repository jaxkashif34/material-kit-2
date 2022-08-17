import ArgonBox from 'components/ArgonBox';
import { Route } from 'react-router-dom';
export const routes = [
  {
    type: 'route',
    name: 'Dashboard',
    key: 'dashboard',
    route: '/dashboard',
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <h1>Dashboard</h1>,
  },
  {
    type: 'route',
    name: 'Tables',
    key: 'tables',
    route: '/tables',
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />,
    component: <h1>Tables</h1>,
  },
  {
    type: 'route',
    name: 'Billing',
    key: 'billing',
    route: '/billing',
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <h1>billing</h1>,
  },
  {
    type: 'route',
    name: 'Virtual Reality',
    key: 'virtual-reality',
    route: '/virtual-reality',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <h1>virtual-reality</h1>,
  },
  {
    type: 'route',
    name: 'RTL',
    key: 'rtl',
    route: '/rtl',
    icon: <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-world-2" />,
    component: <h1>RTL</h1>,
  },
  {
    type: 'route',
    name: 'Profile',
    key: 'profile',
    route: '/profile',
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <h1>profile</h1>,
  },
  {
    type: 'route',
    name: 'Sign In',
    key: 'sign-in',
    route: '/authentication/sign-in',
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />,
    component: <h1>sign-in</h1>,
  },
  {
    type: 'route',
    name: 'Sign Up',
    key: 'sign-up',
    route: '/authentication/sign-up',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <h1>sign-up</h1>,
  },
];

export const getRoutes = (allRoutes) => {
  return allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return <Route path={route.route} element={route.component} key={route.key} />;
    }

    return null;
  });
};
