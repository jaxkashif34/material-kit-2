import { createContext, useContext, useReducer } from 'react';
import useDarkMode from './darkMood';
const Argon = createContext();

const TYPES = {
  DARK_MODE: 'DARK_MODE',
};

const reducer = (state, { type, value }) => {
  switch (type) {
    case TYPES.DARK_MODE: {
      const { setEnabled, mode } = value;
      return { ...state, darkMode: setEnabled(mode) };
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

export { useConfig, TYPES, setDarkMode };

export default ContextProvider;
