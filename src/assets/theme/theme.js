import { createTheme } from '@mui/material/styles';
import { colors, borders, boxShadows, breakpoints, globals, typography } from './base';
import { boxShadow, gradientChartLine, hexToRgb, pxToRem, rgba, linearGradient } from './functions';
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
} from './components';
export const themeObj = createTheme({
  palette: colors,
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
  },
});
