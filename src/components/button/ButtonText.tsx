import React from 'react';
import { Button, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            fontWeight: 500,
            fontSize: '15px',
            textTransform: 'capitalize'
        }
    })
);

interface IProps {
    readonly size?: 'medium' | 'small';
    readonly text?: string;
    // This should be renamed to something like colorClass etc.
    // TODO: fix naming of this prop
    readonly type?: 'secondary' | 'secondaryOutlined' | 'primary' | 'primaryOutlined' | 'neutral';
    readonly onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly disabled?: boolean;
    readonly fullWidth?: boolean;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    readonly loading?: boolean;
    readonly icon?: React.ReactElement;
    readonly onlyIcon?: boolean;
    readonly variant?: 'text' | 'outlined' | 'contained' | undefined;
    readonly style?: React.CSSProperties;
    readonly submit?: 'submit';
}
const ButtonText: React.FC<IProps> = ({
    onClick,
    disabled,
    onChange,
    icon,
    size,
    variant,
    style,
    fullWidth,
    loading,
    submit
}) => {
    const classes = useStyles();
    return (
        <>
            <Button
                onClick={onClick}
                onChange={onChange}
                variant={variant}
                className={classes.button}
                disabled={disabled || loading}
                size={size}
                style={style}
                fullWidth={fullWidth}
                type={submit}
                startIcon={icon}
            >
                Sign in
            </Button>
        </>
    );
};

export default ButtonText;
