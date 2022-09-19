import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import RootRouter from './common/RootRouter';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootRouter />
    </ThemeProvider>
  );
}

export default App;
