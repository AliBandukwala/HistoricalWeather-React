import React from 'react';
import logo from '../assets/icon-logo.png'
import {AppBar, Toolbar, Typography} from '@material-ui/core'


const Appbar = (props) => {
  return (
    <AppBar position="relative">
        <Toolbar>
          <img src={logo} alt="" width="50" height="50" style={{marginRight:25}}/>
          <Typography variant="h4">Historical Weather</Typography>
        </Toolbar>
    </AppBar>
  );
}
 
export default Appbar;
