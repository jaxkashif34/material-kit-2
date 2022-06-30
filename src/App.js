import React from "react";
import { ThemeProvider } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material/Icon";
import theme from "assets/theme";
import { Box, Tabs, Tab, Typography } from "@mui/material";

function TabPanel(props) {
  const { index, children } = props;

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs  aria-label="basic tabs example">
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <TabPanel index={0}>Item One</TabPanel>
        <TabPanel index={1}>Item Two</TabPanel>
        <TabPanel index={2}>Item Three</TabPanel>
      </Box>
    </ThemeProvider>
  );
}
