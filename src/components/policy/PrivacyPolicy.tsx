import React from 'react';
import { Grid, Typography, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bottomText: {
            marginTop: '1rem',
            fontWeight: 500,
            fontSize: '14px'
        },
        dots: {
            fontSize: '25px',
            fontWeight: 'bold',
            borderRadius: '80px'
        }
    })
);
const PrivacyPolicy: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid>
                    <Typography className={classes.bottomText}>
                        @MOST <span className={classes.dots}>.</span> Terms of Service{' '}
                        <span className={classes.dots}>.</span> Privacy Policy
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default PrivacyPolicy;
