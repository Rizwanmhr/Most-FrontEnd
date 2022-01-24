import React, { useState } from 'react';
import { Typography, Grid, Box, Button, Checkbox, Card } from '@material-ui/core';
import ButtonText from '../button/ButtonText';
import Error from '../ErrorField/Error';
import TextForm from './TextForm';
import Most from '../most/Most';
import PrivacyPolicy from '../policy/PrivacyPolicy';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from 'gatsby';
import useStyles from './Login.styles';

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
    const [open, setOpen] = useState(false);

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
    const handleToggle = () => setOpen(!open);

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
                                            <div className={classes.input}>
                                                <TextForm
                                                    type="text"
                                                    variant="outlined"
                                                    placeholder="Email"
                                                    name="email"
                                                    value={user.email}
                                                    size="small"
                                                    onChange={(e) => handleInput(e)}
                                                    style={{ background: '#F9FAFB' }}
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={classes.AllFields}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <label className={classes.label}>Password</label>
                                            <div className={classes.icon}>
                                                <TextForm
                                                    type={open === false ? 'password' : 'text'}
                                                    placeholder="Password"
                                                    variant="outlined"
                                                    size="small"
                                                    name="password"
                                                    value={user.password}
                                                    onChange={(e) => handleInput(e)}
                                                    style={{
                                                        background: '#F9FAFB',
                                                        position: 'relative'
                                                    }}
                                                />
                                                <div className={classes.visible}>
                                                    {open === false ? (
                                                        <VisibilityOffIcon onClick={handleToggle} />
                                                    ) : (
                                                        <VisibilityIcon onClick={handleToggle} />
                                                    )}
                                                </div>
                                            </div>
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
                                            <Typography className={classes.signdin}>
                                                Stay Signed In
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Link
                                            to="/confirmpassword"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Typography className={classes.text}>
                                                Forgot Password?
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.AllFields}>
                                <ButtonText
                                    variant="contained"
                                    text="Sign in"
                                    onClick={(e) => submit(e)}
                                    onChange={(e) => handleInput(e)}
                                    style={{ height: '2.6rem', borderRadius: '7px' }}
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
                    <Grid item lg={10}>
                        <PrivacyPolicy />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
export default Login;
