import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Grid, Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Seo, Lazy, Login } from '../components';

import { FC } from '../util';

const useStyles = makeStyles((theme: Theme) => ({
    heroButtons: {
        marginTop: theme.spacing(4)
    }
}));

const IndexPage: FC = () => {
    const styles = useStyles();
    return (
        <>
            <Seo title="Home" />
            {/* <Lazy type="grow" delay={500} timeout={1000} mountOnEnter unmountOnExit> */}
            <Login />
            {/* <ResetPassword />  */}
            {/* </Lazy> */}
        </>
    );
};

export default IndexPage;
