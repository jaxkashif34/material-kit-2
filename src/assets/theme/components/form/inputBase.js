import colors from '../../base/colors';
import typography from '../../base/typography';
import borders from '../../base/borders';

// Soft UI Dashboard PRO helper functions
import { pxToRem } from '../..//functions';

const { dark, background, grey, inputColors, white } = colors();
const { size, fontWeightRegular } = typography;
const { borderWidth, borderRadius } = borders();

const inputBase = (isDark) => ({
  styleOverrides: {
    root: {
      display: 'flex !important',
      alignItems: 'center !important',
      width: '100% !important',
      height: 'auto !important',
      padding: `${pxToRem(8)} ${pxToRem(12)}`,
      fontSize: `${size.sm} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      lineHeight: '1.4 !important',
      color: `${grey[700]} !important`,
      backgroundColor: `${isDark ? background.dark : white.main} !important`,
      backgroundClip: 'padding-box !important',
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      appearance: 'none !important',
      borderRadius: borderRadius.md,
      transition: 'box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease !important',
    },

    input: {
      width: '100% !important',
      height: pxToRem(22),
      paddingTop: '0 !important',
      paddingRight: '0 !important',
      paddingBottom: '0 !important',
      paddingLeft: pxToRem(6),

      '&::-webkit-input-placeholder': {
        color: `${dark.main} !important`,
      },
    },
  },
});
export default inputBase;
