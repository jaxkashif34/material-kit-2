import { createContext, useContext, useReducer } from 'react';
import useDarkMode from './darkMood';
const Argon = createContext();

const TYPES = {
  DARK_MODE: 'DARK_MODE',
  TOGGLE_CONFIG: 'TOGGLE_CONFIG',
  SIDENAV_COLOR: 'SIDENAV_COLOR',
  DARK_SIDENAV: 'DARK_SIDENAV',
  FIXED_NAVBAR: 'FIXED_NAVBAR',
  MINI_SIDENAV: 'MINI_SIDENAV',
};

const reducer = (state, { type, value }) => {
  switch (type) {
    case TYPES.DARK_MODE: {
      const { setEnabled, mode } = value;
      return { ...state, darkMode: setEnabled(mode) };
    }
    case TYPES.TOGGLE_CONFIG: {
      return { ...state, openConfig: value };
    }
    case TYPES.SIDENAV_COLOR: {
      return { ...state, openConfig: value };
    }
    case TYPES.DARK_SIDENAV: {
      return { ...state, darkSideNav: value };
    }
    case TYPES.DARK_SIDENAV: {
      return { ...state, darkSideNav: value };
    }
    case TYPES.FIXED_NAVBAR: {
      return { ...state, fixedNavbar: value };
    }
    case TYPES.MINI_SIDENAV: {
      return { ...state, miniSideNav: value };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

const ContextProvider = ({ children }) => {
  const [enabled, setEnabled] = useDarkMode();
  const initialValues = {
    darkMode: enabled,
    direction: 'ltr',
    layout: 'dashboard',
    openConfig: false,
    sideNavColor: null,
    darkSideNav: false,
    fixedNavbar: false,
    miniSideNav: false,
  };
  const [controller, dispatch] = useReducer(reducer, initialValues);

  return (
    <Argon.Provider
      value={{
        controller,
        dispatch,
        setEnabled,
      }}>
      {children}
    </Argon.Provider>
  );
};

const useConfig = () => {
  return useContext(Argon);
};
const setDarkMode = (dispatch, value) => {
  return dispatch({ type: TYPES.DARK_MODE, value });
};
const toggleConfig = (dispatch, value) => {
  return dispatch({ type: TYPES.TOGGLE_CONFIG, value });
};
const setSideNavColor = (dispatch, value) => {
  return dispatch({ type: TYPES.SIDENAV_COLOR, value });
};
const setDarkSideNav = (dispatch, value) => {
  return dispatch({ type: TYPES.DARK_SIDENAV, value });
};
const setFixedNavbar = (dispatch, value) => {
  return dispatch({ type: TYPES.FIXED_NAVBAR, value });
};
const setMiniSideNav = (dispatch, value) => {
  return dispatch({ type: TYPES.MINI_SIDENAV, value });
};

export { useConfig, TYPES, setDarkMode, toggleConfig, setSideNavColor, setDarkSideNav, setFixedNavbar, setMiniSideNav };

export default ContextProvider;
