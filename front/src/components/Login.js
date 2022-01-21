
import '../css/Login.css'
import { React, useState, useRef } from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

function Login(props) {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'purple' }
    const emailRef = useRef();
    const passRef = useRef();

    const { onAddUser } = props
    const [isRegistering, setIsRegistering] = useState(true);

    // function onFormSubmit(event) {
    //     console.log(email);
    //     console.log(password);
    // }

    const LogInOrRegister = () => {
        if (isRegistering) {
            fetch('http://localhost:7000/utilizatori/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emailUtilizator: emailRef.current.value,
                    parolaUtilizator: passRef.current.value
                })
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        alert('Email sau parola gresite')
                    }
                })
                .then((data) => {
                    localStorage.setItem('idUtilizator', data.id)
                    props.onLogin()
                    onAddUser(data)
                })
                .catch((e) => console.error(e.message))
        }
    }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AssignmentIndIcon /></Avatar>
                    <h2> Sign In</h2></Grid>

                <br></br>
                <br></br>
                <input type='text' placeholder='Email' ref={emailRef} />

                <br></br>

                <input type="password" placeholder='Password' ref={passRef} />

                <br></br>
                <br></br>
                <br></br>
                <Button onClick={(e) => {
                    e.preventDefault()
                    LogInOrRegister()
                }}
                    type='submit' color="primary" fullWidth variant="outlined">Sign In</Button>
                <br></br>
                <br></br>
                <Typography> Do you have an account?
                    <Link href="#"
                    // onClick={preventDefault}
                    >Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Login
