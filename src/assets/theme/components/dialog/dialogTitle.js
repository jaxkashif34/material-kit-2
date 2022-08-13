import typography from '../../base/typography';
import { pxToRem } from '../../functions';

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
