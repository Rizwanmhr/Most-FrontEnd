import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Link } from 'gatsby';
const Navbar: React.FC = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent="flex-start">
                        <Grid item lg={1}>
                            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                                <Typography>Login</Typography>
                            </Link>
                        </Grid>
                        <Grid item lg={1}>
                            <Link
                                to="/resetpassword"
                                style={{ textDecoration: 'none', color: '#fff' }}
                            >
                                <Typography>Reset Password</Typography>
                            </Link>
                        </Grid>
                        <Grid item lg={1}>
                            <Link
                                to="/confirmpassword"
                                style={{ textDecoration: 'none', color: '#fff' }}
                            >
                                <Typography>Confirm Password</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
