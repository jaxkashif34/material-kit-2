import colors from '../../base/colors';
import typography from '../../base/typography';
import borders from '../../base/borders';
import { pxToRem, rgba } from '../../functions';

const { light, text, white, dark } = colors();
const { borderRadius } = borders();
const { size } = typography;

const menuItem = (isDark) => ({
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: 'unset',
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: 'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
        backgroundColor: isDark ? rgba(light.main, 0.1) : light.main,
        color: isDark ? white.main : dark.main,
      },
    },
  },
});

export default menuItem;
