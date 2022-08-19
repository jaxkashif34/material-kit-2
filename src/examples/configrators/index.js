import React from 'react';
import RootConfigrator from './rootConfigrator';
import ArgonBox from 'components/ArgonBox';
import ArgonTypoGraphy from 'components/ArgonTypography';
import { Icon, Divider, IconButton, Link } from '@mui/material';
import { setDarkMode, toggleConfig, setSideNavColor, setDarkSideNav, setFixedNavbar, setMiniSideNav, useConfig } from 'context';
import ArgonButton from 'components/ArgonButton';
import Config from './config';
import GitHubButton from 'react-github-btn';
import { Twitter, Facebook } from '@mui/icons-material';
const Configrator = () => {
  const {
    controller: { openConfig, darkMode, darkSideNav, fixedNavbar, miniSideNav },
    dispatch,
    setEnabled,
  } = useConfig();

  const sidenavColors = ['primary', 'dark', 'info', 'success', 'warning', 'error'];
  return (
    <RootConfigrator variant="permanent" ownerState={{ openConfig }}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="baseline" pt={3} pb={0.8} px={3}>
        <ArgonBox>
          <ArgonTypoGraphy variant="h5">Argon Configrator</ArgonTypoGraphy>
          <ArgonTypoGraphy variant="body2" color="text">
            See our dashboard options
          </ArgonTypoGraphy>
        </ArgonBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.main} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: '2px',
            cursor: 'pointer',
            mt: 2,
          })}
          onClick={() => toggleConfig(dispatch, !openConfig)}>
          close
        </Icon>
      </ArgonBox>

      <Divider />

      <ArgonBox pt={1.25} pb={3} px={3}>
        <ArgonBox>
          <ArgonTypoGraphy variant="h6">SideNav Colors</ArgonTypoGraphy>

          <ArgonBox mb={0.5}>
            {sidenavColors.map((color, i) => (
              <IconButton
                key={i}
                sx={({ borders: { borderWidth }, palette: { white, dark }, transitions }) => ({
                  width: '24px',
                  height: '24px',
                  padding: 0,
                  border: `${borderWidth[1]} solid ${white.main}`,
                  borderColor: sidenavColors === color && dark.main,
                  transition: transitions.create('border-color', {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) => linearGradient(gradients[color].main, gradients[color].state),

                  '&:not(:last-child)': {
                    mr: 1,
                  },

                  '&:hover, &:focus, &:active': {
                    borderColor: dark.main,
                  },
                })}
                onClick={() => setSideNavColor(dispatch, color)}
              />
            ))}
          </ArgonBox>
        </ArgonBox>

        <ArgonBox mt={3} lineHeight={1}>
          <ArgonTypoGraphy variant="h6">SideNav Type</ArgonTypoGraphy>

          <ArgonTypoGraphy variant="button" color="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </ArgonTypoGraphy>

          <ArgonBox sx={{ display: 'flex', mt: 2 }}>
            <ArgonButton color="info" variant={darkSideNav ? 'outlined' : 'gradient'} onClick={() => setDarkSideNav(dispatch, false)} fullWidth>
              White
            </ArgonButton>

            <ArgonButton color="info" variant={darkSideNav ? 'gradient' : 'outlined'} onClick={() => setDarkSideNav(dispatch, true)} fullWidth sx={{ ml: 1 }}>
              Dark
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
        {/* FixedNavbar  */}
        <Config data={{ text: 'Navbar Fixed', mt: 3, checkedValue: fixedNavbar, onChange: () => setFixedNavbar(dispatch, !fixedNavbar) }} />

        {/* miniSideNav  */}
        <Config data={{ text: 'SideNav Mini', mt: 3, checkedValue: miniSideNav, onChange: () => setMiniSideNav(dispatch, !miniSideNav) }} />

        {/* Light / Dark mode  */}
        <Config data={{ text: 'Light / Dark', mt: 3, checkedValue: darkMode, onChange: () => setDarkMode(dispatch, { setEnabled, mode: !darkMode }) }} divider={false} />

        <ArgonBox mt={5} mb={2}>
          <ArgonBox mb={2}>
            <ArgonButton component={Link} href="/" color="info" fullWidth>
              Buy Now
            </ArgonButton>
          </ArgonBox>

          <ArgonBox mb={2}>
            <ArgonButton component={Link} href="/" color="dark" fullWidth>
              Free Download
            </ArgonButton>
          </ArgonBox>

          <ArgonButton color={darkMode ? 'white' : 'dark'} variant="outlined" fullWidth>
            View Documentation
          </ArgonButton>
        </ArgonBox>

        <ArgonBox display="flex" justifyContent="center">
          <GitHubButton
            href="https://github.com/jaxkashif34/material-kit-2"
            data-icon="octicon-star"
            data-size="large"
            data-show-count={true}
            aria-label="Star creativetimofficial/argon-dashboard-material-uit on GitHub"
          />
        </ArgonBox>

        <ArgonBox mt={3} textAlign="center">
          <ArgonBox mb={0.5}>
            <ArgonTypoGraphy variant="h6">Thank you for sharing!</ArgonTypoGraphy>
          </ArgonBox>

          <ArgonBox display="flex" justifyContent="center">
            <ArgonBox mr={1.5}>
              <ArgonButton component={Link} href="https://twitter.com/Kashifali3435" target="_blank" titlecolor="dark">
                <Twitter />
                &nbsp; Tweet
              </ArgonButton>
            </ArgonBox>

            <ArgonButton component={Link} href="https://twitter.com/Kashifali3435" target="_blank" titlecolor="dark">
              <Facebook />
              &nbsp; Share
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </RootConfigrator>
  );
};

export default Configrator;
