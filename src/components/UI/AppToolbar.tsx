import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {Link} from '../../styledComponents';


const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2 , background: 'linear-gradient(90deg, #F2B97B 16%, #E882BD 100%)'}}>
      <Toolbar>
        <Typography variant="h6" fontWeight={700} component="div" sx={{flexGrow: 4}}>
          <Link to="/">Aijana brows</Link>
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent: 'space-evenly' } }}>
          <Typography variant="subtitle1" component="div">
            <Link to="/my-works">Мои работы</Link>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <Link to="/book-place">Записаться на процедуру</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;