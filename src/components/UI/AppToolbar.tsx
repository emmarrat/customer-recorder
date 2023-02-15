import React from 'react';
import {AppBar, Grid, Toolbar, Typography} from "@mui/material";
import {Link} from '../../styledComponents';


const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2 , background: 'linear-gradient(90deg, #F2B97B 16%, #E882BD 100%)', padding: "17px 0"}} >
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center" spacing={3}>
          <Grid item
                container
                justifyContent={{xs: "center", md: "start"}}
                xs={12} md={6}
                flexBasis={{md: '70%'}}
          >
            <Typography variant="h5" fontWeight={700} component="div">
              <Link to="/">Aijana brows</Link>
            </Typography>
          </Grid>
          <Grid item container
                flexDirection={{xs: "column", md: "row"}}
                justifyContent={{xs: "center", md: "space-between"}}
                alignItems="center"
                xs={12} md={6}
                flexBasis={{md: '30%'}}
          >
            <Typography variant="h6" fontWeight={600} component="div">
              <Link to="/my-works">Мои работы</Link>
            </Typography>
            <Typography variant="h6" fontWeight={600} component="div">
              <Link to="/book-place">Записаться на процедуру</Link>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;