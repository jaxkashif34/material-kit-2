import typography from '../../base/typography';
import borders from '../../base/borders';

import { pxToRem } from '../../functions';

const { borderRadius } = borders();
const { fontWeightBold, size } = typography;

export default {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: size.sm,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.md,
  padding: `${pxToRem(10)} ${pxToRem(20)}`,
  lineHeight: 1.4,
  textAlign: 'center',
  textTransform: 'none',
  userSelect: 'none',
  backgroundSize: '150% !important',
  backgroundPositionX: '25% !important',
  transition: 'all 150ms ease-in',

  '&:hover': {
    transform: 'translateY(-1px)',
  },

  '&:disabled': {
    pointerEvent: 'none',
    opacity: 0.65,
  },

  '& .material-icons': {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};
