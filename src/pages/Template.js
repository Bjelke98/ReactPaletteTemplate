import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AutoNav from '../components/AutoNav';
import { createTheme } from '@mui/material/styles';
import { deepPurple, teal } from '@mui/material/colors';


export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Template = () => {
    return (
        <>
        <AutoNav/>
        <Outlet/>
        </>
    );
};

export default function ToggleColorMode() {

    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            primary: deepPurple,
            secondary: teal,
            mode,
          },
        }),
      [mode],
    );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Template />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }