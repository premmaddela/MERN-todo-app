import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from './context/ThemeContext';
import TodoList from './components/Todo/TodoList';

const App = () => {
  const { theme, toggleTheme, themeName } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <Router>
        <div
          style={{
            background: theme.background,
            color: theme.color,
            minHeight: '100vh',
            padding: '20px',
          }}
        >
          <button
            onClick={toggleTheme}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              padding: '10px 20px',
              background: theme.buttonBackground,
              color: theme.buttonColor,
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {themeName === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          <Routes>
            <Route path="/" element={<TodoList />} />
          </Routes>
        </div>
      </Router>
    </StyledThemeProvider>
  );
};

export default App;