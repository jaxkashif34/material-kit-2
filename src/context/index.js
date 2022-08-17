import { createContext, useContext, useReducer } from 'react';
import useDarkMode from './darkMood';
const Argon = createContext();

const TYPES = {
  DARK_MODE: 'DARK_MODE',
  TOGGLE_CONFIG: 'TOGGLE_CONFIG',
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

export { useConfig, TYPES, setDarkMode, toggleConfig };

export default ContextProvider;
