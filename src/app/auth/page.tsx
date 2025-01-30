'use client';

import { Button, Container, Typography, Box, Slide } from '@mui/material'
import GamesIcon from '@mui/icons-material/Games';
import { useState } from 'react';
import { TextFieldWhite } from '@/components/TextFieldWhite';
import Link from 'next/link';

export default function Auth() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        if(firstName === "" || lastName === "" || email === "" || password === "") {
            return;
        }
    }

    const handleSignUp = () => {

    }

    const style1 = {
        display: 'flex',
        height: '50vh',
        width: '50vw',
        flexDirection: 'column',
        gap: '10px',
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: '30px',
    }, style2 = {
        display: 'flex',
        height: '50vh',
        width: '50vw',
        flexDirection: 'column',
        gap: '10px',
        position: 'absolute',
        top: 0,
        right: 0,
        paddingTop: '30px',
    }

    return (
        <Container sx={{display: 'block', position: 'relative'}}>
            {/* Desktop View */}
            <Container sx={{
                display: {xs: 'none', md: 'flex'},
                backgroundImage: login? 'linear-gradient(to left, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.3) 100%), url(/Mountain2.jpg)' : 'linear-gradient(to right, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.3) 100%), url(/Mountain1.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '80vh',
                width: '80vw',
                marginY: '10px',
                position: 'absolute',
                top: '7vh',
                left: '10vw',
                border: '2px solid #c1c1c1',
                borderRadius: '10px',
                }}>
                    <Container sx={{display: 'flex', gap: '10px', marginTop: '20px'}}>
                        <Typography sx={{display: 'flex', gap: '10px'}}>
                            <GamesIcon />
                            <span>Want-Ex-Alive</span>
                        </Typography>
                    </Container>
                    {/* <Link href='/' >Home</Link> */}
                    <Container sx={login? style2 : style1}>
                        <Text setLogin={(e : boolean) => setLogin(e)} login={login} />
                        {login? null : <Container sx={{display: 'flex', justifyContent: 'space-between' }}>
                            <TextFieldWhite label='First Name' value={firstName} setValue={(e: any) => setFirstName(e)} type='firstName' />
                            <TextFieldWhite label='Last Name' value={lastName} setValue={(e: any) => setLastName(e)} type='lastName' />
                        </Container>}
                        <Container sx={{display: 'flex', flexDirection: 'column', gap:'10px'}}>
                            <TextFieldWhite label='Email' value={email} setValue={(e: any) => setEmail(e)} type={'email'} />
                            <TextFieldWhite label='Password' value={password} setValue={(e: any) => setPassword(e)} type={'password'} />
                        </Container>
                        <Container sx={{display: 'flex', justifyContent: 'space-around', mt: '10px' }}>
                            <Button sx={{
                                minWidth: '15vw',
                                display: 'flex',
                                border: '2px solid white',
                                borderRadius: '50px',
                                paddingY: '10px',
                                paddingX: '20px',
                                color: 'white',
                                ":hover": {
                                    // borderColor: 'cyan',
                                    // color: 'cyan',
                                    backgroundColor: '#202020'
                                }
                            }}>Change Method</Button>
                            <Button sx={{
                                minWidth: '15vw',
                                display: 'flex',
                                border: '2px solid white',
                                borderRadius: '50px',
                                paddingY: '10px',
                                paddingX: '20px',
                                color: 'white',
                                ":hover": {
                                    // borderColor: 'cyan',
                                    // color: 'cyan',
                                    backgroundColor: '#515151'
                                }
                            }}>{login? 'Login' : 'Sign Up'}</Button>
                        </Container>
                    </Container>
                </Container>
        </Container>
    )
}


const Text = (props : any) => {
    return (
        <Container
            sx={{
                backgroundColor: 'transparent', // Dark background color
                paddingX: '40px',
                borderRadius: '10px',
                color: 'white',
                maxWidth: '500px',
                margin: 'auto',
                textAlign: 'center',
                mt: 5,
            }}
        >
            {/* Title Section */}
            <Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#b0b3c2', // Lighter text color
                        fontWeight: 500,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        mb: 1,
                    }}
                >
                    {props.login? 'Welcome Back' : 'Start for free'}
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        mb: 1,
                    }}
                >
                    {props.login? 'Play a game now' : 'Create new account.'}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#b0b3c2', // Subtle lighter color for the text
                        mt: 2,
                    }}
                >
                    {props.login? 'Not Joined Yet?' : 'Already A Member?' }{' '}
                    <Button
                        onClick={() => {props.setLogin(!props.login)}}
                        sx={{
                            textTransform: 'none',
                            color: '#329af0', // Accent color for 'Log In'
                            fontWeight: 'bold',
                            padding: 0,
                            fontSize: 'inherit',
                        }}
                        disableRipple
                    >
                        {props.login? 'Join Now' : 'Log In'}
                    </Button>
                </Typography>
            </Box>
        </Container>
    );
}
