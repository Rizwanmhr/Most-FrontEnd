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
        password: {
            marginTop: '2rem',
            fontWeight: 600,
            fontSize: '18px'
        },
        AllFields: {
            marginTop: '2rem'
        },
        label: {
            fontWeight: 400,
            fontSize: '14px',
            LineHeight: '16.94px'
        },
        input: {
            marginTop: '0.7rem'
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
            marginTop: '2rem',
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
export default useStyles;
