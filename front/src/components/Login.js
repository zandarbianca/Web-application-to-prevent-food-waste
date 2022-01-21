
import '../css/Login.css'
import { React, useState, useRef } from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export default function Login() {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'purple' }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function onFormSubmit(event) {
        console.log(email);
        console.log(password);
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AssignmentIndIcon /></Avatar>
                    <h2> Sign In</h2></Grid>

                <br></br>
                <br></br>
                <input value={email} onInput={e => setEmail(e.target.value)} />

                <br></br>

                <input value={password} type="password" onInput={e => setPassword(e.target.value)} />

                <br></br>
                <br></br>
                <br></br>
                <Button onClick={onFormSubmit}
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
