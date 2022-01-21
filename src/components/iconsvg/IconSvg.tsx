import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';
import Icon from './Icon';

interface Iprops {
    user: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
            fontWeight: 400,
            fontSize: '14px'
        }
    })
);

const IconSvg: React.FC<Iprops> = ({ user }) => {
    const classes = useStyles();
    console.log(user);
    return (
        <>
            {/* <Grid container>
                <Grid item xs={10} lg={12}>
                    <div className={classes.icon}>
                        {user?.length === 8 ? (
                            <Icon  user={''} />
                        ) : (
                            <>
                                <Icon />
                                <Typography>Minimum 8 characters</Typography>
                            </>
                        )}
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={10} lg={12}>
                    <div className={classes.icon}>
                        <Icon user={''} />
                        <Typography>Contains a number</Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={10} lg={12}>
                    <div className={classes.icon}>
                        <Icon />
                        <Typography>Contains a uppercase</Typography>
                    </div>
                </Grid>
            </Grid> */}
        </>
    );
};

export default IconSvg;
