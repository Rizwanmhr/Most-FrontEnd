import * as React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Grid from '@mui/material/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputField: {
            borderRadius: '6px',
            width: '100%',
            background: 'white'
        },
        label: {
            fontSize: '12px'
        },
        textGrid: {
            display: 'flex',
            alignItems: 'center'
        },
        labelDiv: {
            minWidth: '130px'
        }
    })
);

interface Props {
    readonly type: string;
    readonly id?: string;
    readonly disabled?: boolean;
    readonly variant?: 'filled' | 'standard' | 'outlined';
    readonly size?: 'small';
    readonly style?: React.CSSProperties;
    readonly name: string;
    readonly value?: string | number;
    readonly label?: string;
    readonly isMultiline?: boolean;
    readonly placeholder?: string;
    readonly margin?: 'dense' | 'none';
    readonly minRows?: number;
    readonly maxRows?: number;
    readonly error?: boolean;
    readonly helperText?: string | false | undefined;
    readonly defaultValue?: TextFieldProps['defaultValue'];
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextForm: React.FC<Props> = (props) => {
    const {
        type,
        id,
        onChange,
        variant,
        value,
        name,
        label,
        isMultiline,
        placeholder,
        margin,
        disabled,
        minRows,
        maxRows,
        style,
        size,
        error,
        helperText
    } = props;
    const classes = useStyles();
    return (
        <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
            <Grid item lg={12} xs={12}>
                {label && (
                    <div className={classes.labelDiv}>
                        <span className={classes.label}>{label}:</span>
                    </div>
                )}
                <TextField
                    className={classes.inputField}
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    variant={variant}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={(e) => onChange?.(e)}
                    margin={margin}
                    multiline={isMultiline}
                    minRows={minRows}
                    maxRows={maxRows}
                    style={style}
                    size={size}
                    error={error}
                    helperText={helperText}
                />
            </Grid>
        </Grid>
    );
};

export default TextForm;
