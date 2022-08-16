import { boxShadow } from '../functions';
import colors from './colors';
const { black, info, dark, white, text, tabs } = colors();
const boxShadows = (isDark) => ({
  // createRootShadow
  xs: boxShadow([0, 2], [9, -5], black.main, 0.15),
  // small shadow
  sm: boxShadow([0, 5], [10, 0], black.main, 0.12),
  // medium shadow
  md: `${boxShadow([0, 4], [6, -1], isDark ? black.main : black.light, 0.12)}, ${boxShadow([0, 2], [4, -1], black.main, 0.07)}`,
  // large shadow
  lg: `${boxShadow([0, 8], [24, -4], isDark ? black.main : black.light, 0.15)}, ${boxShadow([0, 8], [9, -5], isDark ? black.main : black.light, 0.06)}`,
  // extra large shadow
  xl: boxShadow([0, 23], [45, -11], isDark ? black.main : black.light, 0.25),
  // extra extra large shadow
  xxl: boxShadow([0, 20], [27, 0], black.main, 0.05),
  // inset shadow
  inset: boxShadow([0, 1], [2, 0], black.main, 0.075, 'inset'),
  // navbar shadow
  navbarBoxShadow: `${boxShadow([0, 0], [1, 1], isDark ? black.main : white.main, 0.9, 'inset')}, ${boxShadow([0, 20], [27, 0], black.main, 0.05)}`,
  // card shadow
  cardBoxShadow: boxShadow([0, 0], [16, 1], isDark ? black.main : text.main, 0.075),
  // button shadow
  buttonBoxShadow: {
    main: `${boxShadow([0, 4], [6, 0], dark.main, 0.1)}, ${boxShadow([0, 1], [3, 0], black.main, 0.8)}`,

    stateOf: `${boxShadow([0, 7], [14, 0], dark.main, 0.1)}, ${boxShadow([0, 3], [6, 0], black.main, 0.08)}`,

    stateOfNotHover: boxShadow([0, 0], [0, 3.2], info.main, 0.5),
  },
  // input shadow
  inputBoxShadow: `${boxShadow([0, 3], [9, 0], info.main, 0)}, ${boxShadow([3, 4], [8, 0], info.main, 0.1)}`,
  // slider shadow
  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], black.main, 0.2),
  },
  // tabs shadow
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], isDark ? black.main : tabs.indicator.boxShadow, isDark ? 0.5 : 1),
  },
});
export default boxShadows;
