import React from 'react';
import MKBox from 'components/MKBox';

export default function DefaultNavBarDropDown({ name, icon, children, collapseStatus, light, href, route, collapse, ...rest }) {
  return <MKBox {...rest} mx={1} p={1} display="flex" alignItems="baseline" color={light ? 'white' : 'dark'} opacity={light ? 1 : 0.6} sx={{ cursor: 'pointer', userSelect: 'none' }}></MKBox>;
}
