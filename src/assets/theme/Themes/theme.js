import { createTheme } from '@mui/material/styles';
import { colors, borders, boxShadows, breakpoints, globals, typography } from '../base';
import { boxShadow, gradientChartLine, hexToRgb, pxToRem, rgba, linearGradient } from '../functions';
import {
  flatpicker,
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
  inputLabel,
  inputOutlined,
  textField,
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
} from '../components';
export const themeObj = (isDark) => {
  return createTheme({
    palette: { mode: isDark ? 'dark' : 'light', ...colors(isDark) },
    breakpoints: breakpoints,
    typography: typography,
    boxShadows: boxShadows,
    borders: borders,
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
          ...flatpicker,
          ...container,
        },
      },
      // list
      MuiList: list,
      MuiListItem: listItem,
      MuiListItemText: listItemText,
      // card
      MuiCard: card,
      MuiCardMedia: cardMedia,
      MuiCardContent: cardContent,
      // button
      MuiButton: button,
      // icon Button
      MuiIconButton: iconButton,
      // forms
      MuiInput: input,
      MuiInputLabel: inputLabel,
      MuiOutlinedInput: inputOutlined,
      MuiTextField: textField,
      MuiSwitch: switchButton,
      MuiSelect: select,
      MuiFormControlLabel: formControllLabel,
      MuiFormLabel: formLabel,
      MuiCheckbox: checkBox,
      MuiRadio: radio,
      MuiAutocomplete: autoComplete,
      // divider
      MuiDivider: divider,
      // table
      MuiTableContainer: tableContainer,
      MuiTableHead: tableHead,
      MuiTableCell: tableCell,
      // linearProgress
      MuiLinearProgress: linearProgress,
      // breadCrumbs
      MuiBreadcrumbs: breadCrumbs,
      // slider
      MuiSlider: slider,
      // avatar
      MuiAvatar: avatar,
      // tooltip
      MuiTooltip: tooltip,
      // appBar (NavBar)
      MuiAppBar: appBar,
      // tabs
      MuiTabs: tabs,
      MuiTab: tab,
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
      MuiMenu: menu,
      MuiMenuItem: menuItem,
    },
  });
};
