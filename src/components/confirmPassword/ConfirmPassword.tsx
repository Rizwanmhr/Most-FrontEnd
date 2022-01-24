import React, { useState } from 'react';
import { Grid, Typography, Card } from '@material-ui/core';
import Most from '../most/Most';
import TextForm from '../login/TextForm';
import ButtonText from '../button/ButtonText';
import { Link } from 'gatsby';
import PrivacyPolicy from '../policy/PrivacyPolicy';
import Icon from '../../components/iconsvg/Icon';
import Error from '../ErrorField/Error';
import useStyles from './Confirmpassword.style';

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
            ('');
        } else {
            e.preventDefault();
            console.log(user, 'submit email..........');
            setErrorMessage({
                ...Errormessage,
                type: 'success',
                message: 'Password updated successfully',
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
                                        <div className={classes.input}>
                                            <TextForm
                                                type="text"
                                                variant="outlined"
                                                size="small"
                                                name="password"
                                                value={user}
                                                style={{ background: '#F9FAFB' }}
                                                onChange={handelInput}
                                            />
                                        </div>
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
                            <div className={classes.AllFields}>
                                <ButtonText
                                    text="Confirm Password"
                                    variant="contained"
                                    onClick={submit}
                                    style={{ height: '2.6rem', borderRadius: '7px' }}
                                    disabled={
                                        !regex.isUppercase.test(user) || !regex.isNumber.test(user)
                                    }
                                />
                            </div>
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
