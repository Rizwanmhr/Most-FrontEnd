import React, { useState } from 'react';
import { Typography, Grid, Theme, Box, Button, Checkbox, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';
import ButtonText from '../button/ButtonText';
import Error from '../ErrorField/Error';
import TextForm from './TextForm';
import Most from '../most/Most';
import PrivacyPolicy from '../policy/PrivacyPolicy';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(0deg, #F9FAFB, #F9FAFB)',
            paddingTop: theme.spacing(5)
        },
        card: {
            backgroundColor: theme.palette.background.default,
            boxShadow: '0px 20px 40px rgba(141, 147, 201, 0.08)',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingBottom: '2rem'
        },
        text: {
            color: theme.palette.primary.main,
            fontWeight: 500,
            marginTop: '0.5rem',
            fontSize: '14px'
        },
        signin: {
            marginTop: '2rem',
            fontWeight: 600,
            fontSize: '18px'
        },
        label: {
            body1: theme.typography.fontSize
        },
        AllFields: {
            marginTop: '1rem'
        },
        heading: {
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '14px'
        },
        buttonSignup: {
            width: '100%',
            color: theme.palette.warning.main,
            border: '1px solid #EE8160',
            fontWeight: 500,
            fontSize: '15px',
            textTransform: 'capitalize'
        },
        checkbox: {
            display: 'flex',
            alignItems: 'center'
        }
    })
);

const Login: React.FC = () => {
    const classes = useStyles();
    const [user, setUser] = useState({
        email: '',
        password: '',
        checkbox: 'Stay Signed In'
    });
    const [Errormessage, setErrorMessage] = useState({
        type: '',
        message: '',
        isMessage: false
    });

    let name, value;
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };
    const submit = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!user.email || !user.password) {
            setErrorMessage({
                ...Errormessage,
                type: 'error',
                message: 'Invalid Login Credentials!',
                isMessage: true
            });
        } else {
            e.preventDefault();
            console.log(user, 'testing');
            setErrorMessage({
                ...Errormessage,
                type: 'success',
                message: 'Login successful',
                isMessage: true
            });
        }
    };
    return (
        <>
            <Grid className={classes.main}>
                <Most />
                <Grid container justifyContent="center">
                    <Grid item xs={10} lg={4}>
                        <Card className={classes.card}>
                            <Typography className={classes.signin}>
                                Sign in to your account
                            </Typography>
                            <Box component="form" mt={2}>
                                {Errormessage.isMessage && (
                                    <Error
                                        message={Errormessage.message}
                                        type={Errormessage.type}
                                    />
                                )}
                                <div className={classes.AllFields}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <label className={classes.label}>Email</label>
                                            <TextForm
                                                type="text"
                                                variant="outlined"
                                                placeholder="Email"
                                                name="email"
                                                value={user.email}
                                                size="small"
                                                onChange={(e) => handleInput(e)}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.AllFields}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <label className={classes.label}>Password</label>
                                            <TextForm
                                                type="text"
                                                placeholder="Password"
                                                variant="outlined"
                                                size="small"
                                                name="password"
                                                value={user.password}
                                                onChange={(e) => handleInput(e)}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </Box>
                            <div className={classes.AllFields}>
                                <Grid container justifyContent="space-between">
                                    <Grid item lg={5}>
                                        <div className={classes.checkbox}>
                                            <Checkbox
                                                name="checkbox"
                                                value={user.checkbox}
                                                color="primary"
                                                onChange={(e) =>
                                                    setUser({ ...user, checkbox: e.target.value })
                                                }
                                            />
                                            <Typography>Stay Signed In</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Typography className={classes.text}>
                                            Forgot Password?
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.AllFields}>
                                <ButtonText
                                    variant="contained"
                                    onClick={(e) => submit(e)}
                                    onChange={(e) => handleInput(e)}
                                />
                            </div>
                            <Grid container justifyContent="center">
                                <Grid item xs={10} sm={10} md={7} lg={7}>
                                    <div className={classes.AllFields}>
                                        <Typography className={classes.heading}>
                                            {`Don't`} have an account?
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className={classes.AllFields}>
                                <Button className={classes.buttonSignup}>Sign up</Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center">
                    <Grid>
                        <PrivacyPolicy />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;
