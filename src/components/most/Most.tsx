import React from 'react';
import { Grid, Typography, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        most: {
            color: theme.palette.primary.main,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '1rem',
            fontSize: '25px'
        },
        dot: {
            color: theme.palette.error.main,
            fontSize: '25px',
            fontWeight: 'bold',
            borderRadius: '50px'
        }
    })
);

const Most: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={10} sm={10} md={2} lg={2}>
                    <Typography className={classes.most}>
                        most<span className={classes.dot}>.</span>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Most;
