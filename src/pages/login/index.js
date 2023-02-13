import React from 'react'
import { Button, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';

function LoginComponent() {
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='bhr-login'>
            <div className='row m-0 h-100'>
                <div className='col-12 col-md-6 p-0 h-100'>
                    <div className='bhr-login-bg'>
                        <div className='bhr-login-bg-text'>
                            <h1>Beever Salary Advance</h1>
                            <p>
                                Improve your financial activities with beever.
                                The new innovative financial solutions allow you
                                to decide your own payday in the fastest and
                                most convenient way possible.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 p-0'>
                    <div className='bhr-login-form'>
                        <div className='bhr-login-form-desc'>
                            <h5>Welcome Back,</h5>
                            <h1>Sign in to Beever.</h1>
                            <h5 className='mb-5'>Create one new account ?</h5>
                            <p className="bhr-form-label mb-2">Email Address <span className='text-danger'>*</span></p>
                            <FormControl variant="outlined" fullWidth>
                                <OutlinedInput
                                    type="email"
                                    name="bfiEmail"
                                    placeholder={"Email"}
                                    className="mb-3 bhr-form-control"
                                />
                            </FormControl>
                            <p className='bhr-form-label mb-2'>Password</p>
                            <FormControl variant="outlined" fullWidth>
                                <OutlinedInput
                                    type={values.showPassword ? 'text' : 'password'}
                                    name="bfiPassword"
                                    placeholder={"Masukan kata sandi"}
                                    className="mb-3 bhr-form-control pe-0"
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <div className='w-100 text-end mb-4'>
                                <Link href={"/login"} className="bhr-login-form-desc-forgot">
                                    Forgot my password?
                                </Link>
                            </div>
                            <Button variant="contained" className='bhr-btn-primary w-100 mb-5' disableElevation>
                                Sign in
                            </Button>
                            <p className='bhr-login-form-desc-text-bottom'>Or sign in with</p>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <Button variant="contained bhr-btn-white w-100" startIcon={<FacebookRoundedIcon />}>
                                        Facebook
                                    </Button>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <Button variant="contained bhr-btn-white w-100" startIcon={<GoogleIcon />}>
                                        Google
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent