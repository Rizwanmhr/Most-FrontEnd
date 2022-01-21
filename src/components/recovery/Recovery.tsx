import React from 'react';
import { Grid, Typography, Theme, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';
import EmailSvg from '../emailsvg/EmailSvg';
import Most from '../most/Most';
import PrivacyPolicy from '../policy/PrivacyPolicy';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainDiv: {
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(0deg, #F9FAFB, #F9FAFB)',
            paddingTop: theme.spacing(8)
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        card: {
            // paddingLeft: '2rem',
            backgroundColor: theme.palette.background.default,
            boxShadow: '0px 20px 40px rgba(141, 147, 201, 0.08)',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingBottom: '2rem'
        },
        emailsvg: {
            marginTop: '2rem'
        },
        notify: {
            marginTop: '1rem',
            fontWeight: 600,
            fontSize: '18px',
            textAlign: 'center'
        },
        backbtn: {
            textDecoration: 'none',
            textTransform: 'capitalize'
        },
        login: {
            color: theme.palette.primary.main,
            fontWeight: 500,
            marginTop: '1rem',
            fontSize: '14px',
            textAlign: 'center'
        }
    })
);
const Recovery: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.mainDiv}>
                <Most />
                <Grid justifyContent="center" className={classes.center}>
                    <Grid xs={10} sm={10} md={6} lg={4}>
                        <Card className={classes.card}>
                            <Grid container justifyContent="center">
                                <Grid lg={3} className={classes.emailsvg}>
                                    <EmailSvg />
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid xs={12} sm={12} md={10} lg={8}>
                                    <Typography className={classes.notify}>
                                        Password Recovery Email Sent
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid xs={10} sm={10} md={10} lg={4}>
                                    <Link to="/login" className={classes.backbtn}>
                                        <Typography className={classes.login}>
                                            Back to Login
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Card>
                        <Grid container justifyContent="center">
                            <Grid>
                                <PrivacyPolicy />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Recovery;
