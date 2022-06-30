import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themeObj } from "./theme";
export default function ThemeConfig({ children }) {
  const theme = useMemo(() => createTheme(themeObj), [themeObj]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
