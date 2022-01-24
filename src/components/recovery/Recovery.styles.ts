import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainDiv: {
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(0deg, #F9FAFB, #F9FAFB)',
            paddingTop: theme.spacing(8)
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        card: {
            // paddingLeft: '2rem',
            backgroundColor: theme.palette.background.default,
            boxShadow: '0px 20px 40px rgba(141, 147, 201, 0.08)',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingBottom: '2rem',
            borderRadius: '10px'
        },
        emailsvg: {
            marginTop: '2rem'
        },
        notify: {
            marginTop: '1rem',
            fontWeight: 600,
            fontSize: '18px',
            textAlign: 'center'
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
