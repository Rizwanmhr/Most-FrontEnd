import React, { useState } from 'react';
import { Grid, Typography, Card } from '@material-ui/core';
import ButtonText from '../button/ButtonText';
import TextForm from '../login/TextForm';
import Most from '../most/Most';
import PrivacyPolicy from '../policy/PrivacyPolicy';
import Recovery from '../recovery/Recovery';
import Error from '../ErrorField/Error';
import { Link } from 'gatsby';
import useStyles from './ResetPassword.styles';

const ResetPassword: React.FC = () => {
    const classes = useStyles();
    const [user, setUser] = useState('');
    const [isview, setIsView] = useState(false);
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
                message: 'Invalid email',
                isMessage: true
            });
        } else {
            setIsView(!isview);
            e.preventDefault();
            console.log(user, 'submit email');
        }
    };
    return (
        <>
            {isview ? (
                <Recovery />
            ) : (
                <Grid className={classes.main}>
                    <Most />
                    <Grid container justifyContent="center" className={classes.center}>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card className={classes.card}>
                                <div className={classes.error}>
                                    {Errormessage.isMessage && (
                                        <Error
                                            message={Errormessage.message}
                                            type={Errormessage.type}
                                        />
                                    )}
                                </div>
                                <Grid>
                                    <Grid item lg={4}>
                                        <Typography className={classes.reset}>
                                            Reset Password
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <Grid item lg={10}>
                                        <Typography className={classes.content}>
                                            A reset passwords reset email will be sent to user on
                                            their email assocaited with their account. The reset
                                            link will expire automatically after 48 hours.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <div className={classes.field}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <label className={classes.label}>Email</label>
                                            <div className={classes.input}>
                                                <TextForm
                                                    type="text"
                                                    placeholder="Email"
                                                    size="small"
                                                    variant="outlined"
                                                    name="email"
                                                    value={user}
                                                    onChange={handelInput}
                                                    style={{ background: '#F9FAFB' }}
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <ButtonText
                                        variant="contained"
                                        text="Send Email"
                                        style={{
                                            marginTop: '2rem',
                                            height: '2.6rem',
                                            borderRadius: '7px'
                                        }}
                                        onClick={submit}
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
            )}
        </>
    );
};

export default ResetPassword;
