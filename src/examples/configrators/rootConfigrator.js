import { styled } from '@mui/material/styles';
import { Drawer } from '@mui/material';

export default styled(Drawer)(({ theme, ownerState }) => {
  const { boxShadows, functions, transitions } = theme;
  const { openConfig } = ownerState;

  console.log(openConfig);
  const configWidth = 360;

  const { lg } = boxShadows;
  const { pxToRem } = functions;

  const drawerOpenStyle = () => ({
    width: configWidth,
    left: 'initial',
    right: 0,
    transition: transitions.create('right', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  const drawerCloseStyle = () => ({
    left: 'initial',
    right: pxToRem(-350),
    transition: transitions.create('all', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  return {
    '& .MuiDrawer-paper': {
      height: '100vh',
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: 'auto',
      ...(openConfig ? drawerOpenStyle() : drawerCloseStyle()),
    },
  };
});
