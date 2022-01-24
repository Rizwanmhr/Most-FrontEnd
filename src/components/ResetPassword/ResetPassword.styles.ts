import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(0deg, #F9FAFB, #F9FAFB)',
            paddingTop: theme.spacing(5)
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px'
        },
        error: {
            marginTop: '2rem'
        },
        card: {
            backgroundColor: theme.palette.background.default,
            boxShadow: '0px 20px 40px rgba(141, 147, 201, 0.08)',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingBottom: '2rem',
            borderRadius: '10px'
        },
        reset: {
            fontWeight: 600,
            fontSize: '18px',
            marginTop: '2rem'
        },
        content: {
            marginTop: '1.5rem',
            fontWeight: 400,
            fontSize: '14px'
        },
        label: {
            body1: theme.typography.fontSize
        },
        input: {
            marginTop: '0.7rem'
        },
        field: {
            marginTop: '1.5rem'
        },
        backbtn: {
            textDecoration: 'none',
            textTransform: 'capitalize'
        },
        login: {
            color: theme.palette.primary.main,
            fontWeight: 500,
            marginTop: '2rem',
            fontSize: '14px',
            textAlign: 'center'
        }
    })
);
export default useStyles;
