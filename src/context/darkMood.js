import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
// explain each line of code
const useLocalStorage = (key, initialValue) => {
  // custom hook to set and get local storage state
  const [storedValue, setStoredValue] = useState(() => {
    // useState hook to set and get state
    try {
      // try to get the value from local storage
      const item = window.localStorage.getItem(key); // get the value from local storage
      const isDark = item ? JSON.parse(item) : initialValue; // parse the value from local storage
      return isDark; // return the value from local storage
    } catch (error) {
      // if there is an error
      console.log(error); // log the error
      return initialValue; // return the initial value from local storage
    }
  });
  const setValue = (value) => {
    // set the value in local storage
    try {
      // try to set the value in local storage
      const valueToStore = value instanceof Function ? value(storedValue) : value; // check if the parameter is a function or not
      setStoredValue(valueToStore); // set the value to the state
      window.localStorage.setItem(key, JSON.stringify(valueToStore)); // set the value to local storage
      return valueToStore; // return the value to storedValue
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};
const useDarkMode = () => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [enabled, setEnabled] = useLocalStorage('dark-theme', isDarkMode); // set the value of dark-theme to enabled

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // add an event listener to the window to receive the change in OS color scheme
    const osTheme = e.matches;
    setEnabled(osTheme);
  });

  return [enabled, setEnabled]; // return the value of enabled  and setEnabled
};

export default useDarkMode;
