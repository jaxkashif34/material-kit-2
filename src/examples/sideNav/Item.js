import React from 'react';
import { ListItemIcon, ListItemText, Icon } from '@mui/material';
import ArgonBox from 'components/ArgonBox';
import { useConfig } from 'context';
import { sideBarItem, itemIconBox, itemIcon, itemText } from './style/sideNavItem';
import PropTypes from 'prop-types';

const Item = ({ icon, name, active, ...rest }) => {
  const {
    controller: { isMiniSideNavOpen, darkSidenav, sidenavColor },
  } = useConfig();
  return (
    <ListItemText component="li">
      <ArgonBox
        {...rest}
        sx={(theme) => {
          sideBarItem(theme, { active, darkSidenav, sidenavColor, isMiniSideNavOpen });
        }}>
        <ListItemIcon sx={(theme) => itemIconBox(theme, { active, darkSidenav, sidenavColor })}>
          {typeof icon === 'string' ? <Icon sx={(theme) => itemIcon(theme, { active })}>{icon}</Icon> : icon}
        </ListItemIcon>

        <ListItemText primary={name} sx={(theme) => itemText(theme, { isMiniSideNavOpen, darkSidenav, active })} />
      </ArgonBox>
    </ListItemText>
  );
};

Item.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark']),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  open: PropTypes.bool,
};

export default Item;
