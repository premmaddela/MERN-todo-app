import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const lightTheme = {
  background: '#ffffff',
  color: '#333333',
  buttonBackground: '#4caf50',
  buttonColor: '#ffffff',
  inputBorder: '#ddd',
  inputFocusBorder: '#4caf50',
};

const darkTheme = {
  background: '#333333',
  color: '#ffffff',
  buttonBackground: '#555555',
  buttonColor: '#ffffff',
  inputBorder: '#555',
  inputFocusBorder: '#4caf50',
};

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark'); // 'light' or 'dark'

  const theme = themeName === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);