import React from 'react';
import { Grid, Typography, Card } from '@material-ui/core';
import EmailSvg from '../emailsvg/EmailSvg';
import Most from '../most/Most';
import PrivacyPolicy from '../policy/PrivacyPolicy';
import { Link } from 'gatsby';
import useStyles from './Recovery.styles';

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
