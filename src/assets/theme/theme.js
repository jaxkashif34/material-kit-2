import { createTheme } from '@mui/material/styles';
import { colors, borders, boxShadows, breakpoints, globals, typography } from './base';
import { boxShadow, gradientChartLine, hexToRgb, pxToRem, rgba, linearGradient } from './functions';
import {
  container,
  list,
  listItem,
  listItemText,
  card,
  cardMedia,
  cardContent,
  button,
  iconButton,
  input,
  switchButton,
  select,
  formControllLabel,
  formLabel,
  checkBox,
  radio,
  autoComplete,
  divider,
  tableContainer,
  tableHead,
  tableCell,
  linearProgress,
  breadCrumbs,
  slider,
  avatar,
  tooltip,
  appBar,
  tabs,
  tab,
  stepper,
  step,
  stepConnector,
  stepLabel,
  stepIcon,
  popover,
  icon,
  link,
  dialog,
  dialogAction,
  dialogContent,
  dialogContentText,
  dialogTitle,
  menu,
  menuItem,
  inputBase,
  sideNav,
} from './components';
export const themeObj = (isDark, direction) => {
  return createTheme({
    direction,
    palette: { mode: isDark ? 'dark' : 'light', ...colors(isDark) },
    breakpoints: breakpoints,
    typography: typography,
    boxShadows: boxShadows(isDark),
    borders: borders(isDark),
    functions: {
      boxShadow,
      gradientChartLine,
      hexToRgb,
      pxToRem,
      rgba,
      linearGradient,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ...globals,
          ...container,
        },
      },
      // list
      MuiList: list,
      MuiListItem: listItem,
      MuiListItemText: listItemText,
      // card
      MuiCard: card(isDark),
      MuiCardMedia: cardMedia,
      MuiCardContent: cardContent,
      // button
      MuiButton: button,
      // icon Button
      MuiIconButton: iconButton,
      // forms
      MuiInput: input,
      MuiInputBase: inputBase(isDark),
      MuiSwitch: switchButton,
      MuiSelect: select,
      MuiFormControlLabel: formControllLabel,
      MuiFormLabel: formLabel,
      MuiCheckbox: checkBox,
      MuiRadio: radio,
      MuiAutocomplete: autoComplete(isDark),
      // divider
      MuiDivider: divider(isDark),
      // table
      MuiTableContainer: tableContainer(isDark),
      MuiTableHead: tableHead,
      MuiTableCell: tableCell,
      // linearProgress
      MuiLinearProgress: linearProgress(isDark),
      // breadCrumbs
      MuiBreadcrumbs: breadCrumbs,
      // slider
      MuiSlider: slider,
      // avatar
      MuiAvatar: avatar,
      // tooltip
      MuiTooltip: tooltip(isDark),
      // appBar (NavBar)
      MuiAppBar: appBar,
      // tabs
      MuiTabs: tabs(isDark),
      MuiTab: tab(isDark),
      // stepper
      MuiStepper: stepper,
      MuiStep: step,
      MuiStepConnector: stepConnector,
      MuiStepLabel: stepLabel,
      MuiStepIcon: stepIcon,
      // popover
      MuiPopover: popover,
      // icon
      MuiIcon: icon,
      // link
      MuiLink: link,
      // dialogs
      MuiDialog: dialog,
      MuiDialogTitle: dialogTitle,
      MuiDialogContent: dialogContent,
      MuiDialogContentText: dialogContentText,
      MuiDialogActions: dialogAction,
      // menu
      MuiMenu: menu(isDark),
      MuiMenuItem: menuItem(isDark),
      // Drawer
      MuiDrawer: sideNav(isDark),
    },
  });
};
