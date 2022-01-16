import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { navContext } from '../App';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../pages/Template';
import { useTheme } from '@emotion/react';

const Autonav = () => {
    const theme = useTheme();
    const navElements = React.useContext(navContext);
    const colorMode = React.useContext(ColorModeContext)
    return (
        <AppBar position="static" color="primary">
          <Toolbar sx={{
              gap: '12px'
          }}>
          {navElements.map((e)=>(
              <Link to={e.route}>
              <Button variant="outlined" color='secondary'><Typography variant="body1" color="secondary">{e.name}</Typography></Button>
              </Link>
          ))}
                <Typography textAlign="center">
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon />:<Brightness4Icon />}
                </IconButton>
                </Typography>
          </Toolbar>
        </AppBar>
    );
};

export default Autonav;
