import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
            paddingBottom: '2rem',
            borderRadius: '10px'
        },
        text: {
            color: theme.palette.primary.main,
            fontWeight: 500,
            marginTop: '0.5rem',
            fontSize: '14px',
            paddingLeft: '1.8rem'
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
            marginTop: '2rem'
        },
        input: {
            marginTop: '0.7rem'
        },
        icon: {
            display: 'flex',
            marginTop: '0.7rem',
            position: 'relative'
        },
        visible: {
            position: 'absolute',
            marginLeft: '3rem',
            left: '78%',
            right: '0',
            marginTop: '0.4rem'
        },
        heading: {
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '14px'
        },
        buttonSignup: {
            width: '100%',
            height: '2.6rem',
            color: theme.palette.warning.main,
            border: '1px solid #EE8160',
            fontWeight: 500,
            fontSize: '15px',
            textTransform: 'capitalize',
            borderRadius: '10px'
        },
        checkbox: {
            display: 'flex',
            alignItems: 'center'
        },
        signdin: {
            alignItems: 'center'
        }
    })
);
export default useStyles;
