import React, { useState } from 'react';
import { Fade } from '@mui/material';
import MKAlertRoot from './MKAlertRoot';
import MKBox from '../MKBox';
import MKAlertCloseIcon from './MKAlertCloseIcon';
export default function MkAlert({ color, dismissible, children, ...rest }) {
  const [mount, setMount] = useState(true);

  return (
    <Fade in={mount}>
      <MKAlertRoot ownerState={{ color }} {...rest}>
        <MKBox display="flex" alignItems="center" fontSize="1rem" fontWeight="regular" color={color === 'light' ? 'dark' : 'white'}>
          {children}
        </MKBox>
        {dismissible ? <MKAlertCloseIcon onClick={mount ? () => setMount(!mount) : null}>&times;</MKAlertCloseIcon> : null}
      </MKAlertRoot>
    </Fade>
  );
}
