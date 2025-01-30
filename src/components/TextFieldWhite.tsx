'use client';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

export const TextFieldWhite = (props: any) => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <TextField
            id="outlined-basic"
            size="small"
            label={props.label}
            type={props.type==='password' && !showPassword ? 'password' : props.type==='email'? 'email' : 'text'}
            variant="outlined"
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white', // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: 'white', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white', // Border color when focused
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'white', // Label text color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white', // Label text color when focused
                },
                '& .MuiInputBase-input': {
                    color: 'white', // Input text color
                },
            }}
            InputProps={{
                endAdornment: props.type==='password' ? (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                            sx={{ color: 'white' }}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ) : 
                <InputAdornment position="end">
                    {props.type==='firstName' || props.type==='lastName'? <AccountBoxIcon sx={{ color: 'white' }} /> : <EmailIcon sx={{ color: 'white' }} />}
                </InputAdornment>,
            }}
        />
    );
};
