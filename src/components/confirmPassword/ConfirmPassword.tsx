import React, { useState } from 'react';
import { Grid, Typography, Theme, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';
import Most from '../most/Most';
import TextForm from '../login/TextForm';
import ButtonText from '../button/ButtonText';
import { Link } from 'gatsby';
import PrivacyPolicy from '../policy/PrivacyPolicy';
import Icon from '../../components/iconsvg/Icon';
import Error from '../ErrorField/Error';

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
        password: {
            marginTop: '2rem',
            fontWeight: 600,
            fontSize: '18px'
        },
        AllFields: {
            marginTop: '1rem'
        },
        label: {
            body1: theme.typography.fontSize
        },
        icon: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem'
        },
        error: {
            marginTop: '2rem'
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
        },
        char: {
            paddingLeft: '0.5rem'
        },
        iconValidation: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '1rem'
        }
    })
);
const ConfirmPassword: React.FC = () => {
    const classes = useStyles();
    const [user, setUser] = useState('');
    const [regex] = useState({
        isUppercase: /^(?=.*[A-Z])/,
        isNumber: /\d/,
        hasPassword: length
    });
    const [Errormessage, setErrorMessage] = useState({
        type: '',
        message: '',
        isMessage: false
    });
    const handelInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser(e.target.value);
    };
    const submit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!user) {
            setErrorMessage({
                ...Errormessage,
                type: 'error',
                message: 'Invalid Login Credentials!',
                isMessage: true
            });
        } else {
            e.preventDefault();
            console.log(user, 'submit email..........');
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
                            <div className={classes.error}>
                                {Errormessage.isMessage && (
                                    <Error
                                        message={Errormessage.message}
                                        type={Errormessage.type}
                                    />
                                )}
                            </div>
                            <Typography className={classes.password}>Reset Password</Typography>
                            <div className={classes.AllFields}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <label className={classes.label}>New Password</label>
                                        <TextForm
                                            type="text"
                                            variant="outlined"
                                            placeholder="password"
                                            name="password"
                                            size="small"
                                            value={user}
                                            onChange={handelInput}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <Grid container>
                                <Grid item xs={10} lg={5}>
                                    <div className={classes.iconValidation}>
                                        <Icon
                                            status={
                                                user.length >= 8
                                                    ? 'success'
                                                    : user.length === 0
                                                    ? 'primary'
                                                    : 'error'
                                            }
                                        />
                                        <Typography className={classes.char}>
                                            Minimum 8 characters
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={10} lg={5}>
                                    <div className={classes.iconValidation}>
                                        <Icon
                                            status={
                                                regex.isNumber.test(user)
                                                    ? 'success'
                                                    : user.length === 0
                                                    ? 'primary'
                                                    : 'error'
                                            }
                                        />
                                        <Typography className={classes.char}>
                                            Contains a number
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={10} lg={5}>
                                    <div className={classes.iconValidation}>
                                        <Icon
                                            status={
                                                user.length >= 1 && regex.isUppercase.test(user)
                                                    ? 'success'
                                                    : user.length === 0
                                                    ? 'primary'
                                                    : 'error'
                                            }
                                        />
                                        <Typography className={classes.char}>
                                            Contains an uppercase
                                        </Typography>
                                    </div>
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
                            <div className={classes.AllFields}>
                                <ButtonText
                                    text="Confirm Password"
                                    variant="contained"
                                    onClick={submit}
                                />
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

export default ConfirmPassword;
