import React from 'react';
import { Grid, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

interface IProps {
    message: string;
    type: string;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // width: '29vw',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        },
        snack: {
            backgroundColor: '#FFF9F9',
            border: `1px solid ${theme.palette.error.main}`,
            color: theme.palette.error.main
        }
    })
);

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Error: React.FC<IProps> = ({ type, message }) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className={classes.root}>
                    <Alert severity={type} className={classes.snack}>
                        {message}
                    </Alert>
                </div>
            </Grid>
        </Grid>
    );
};

export default Error;
