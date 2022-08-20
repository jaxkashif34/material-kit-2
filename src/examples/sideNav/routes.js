import { routes } from 'routes';
import React from 'react';
import { Divider, Link } from '@mui/material';
import Item from './Item';
import { NavLink, useLocation } from 'react-router-dom';
import ArgonTypoGraphy from 'components/ArgonTypography';

import { useConfig } from 'context';

const Routes = () => {
  const { pathname } = useLocation();

  const {
    controller: { darkSidenav },
  } = useConfig();

  const itemName = pathname.split('/').slice(1)[0];

  return routes.map(({ type, name, href, icon, title, key, route }) => {
    if (type === 'route') {
      if (href) {
        return (
          <Link href={href} key={key} target="_blank" rel="noreferrer">
            <Item name={name} icon={icon} active={key === itemName} />
          </Link>
        );
      } else {
        return (
          <NavLink to={route} key={key}>
            <Item name={name} icon={icon} active={key === itemName} />
          </NavLink>
        );
      }
    } else if (type === 'title') {
      return (
        <ArgonTypoGraphy key={key} color={darkSidenav ? 'white' : 'dark'} display="block" variant="caption" fontWeight="bold" textTransform="uppercase" opacity={0.6} pl={3} mt={2} mb={1} ml={1}>
          {title}
        </ArgonTypoGraphy>
      );
    } else {
      return <Divider key={key} light={darkSidenav} />;
    }
  });
};

export default Routes;
