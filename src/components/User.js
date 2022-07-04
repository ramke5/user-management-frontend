import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { margin, padding, width } from '@mui/system';

export default function User() {
    const paperStyle = {padding: '50px 20px', width:600, margin:"20px auto"}
    const[name, setName] = React.useState('')
    const[address, setAddress] = React.useState('')
    const[users, setUsers] = React.useState([]) 
    const handleClick=(e)=>{
        e.preventDefault()
        const user={name, address}
        fetch("http://178.62.253.105:8080/user/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("User added")
        })
    }

    // useEffect(()=>{
    //     fetch("http://localhost:8080/user/getAll")
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         setUsers(result);
    //     }
    // )
    // }, [])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h4>Add user</h4>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
        value={name}
        onChange = {(e)=>setName(e.target.value)}
        /> <br/>
        <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
        value={address}
        onChange = {(e)=>setAddress(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
            Submit
        </Button>
        
        </Box>
        </Paper>

        {/* <Paper elevation={3} style={paperStyle}>
            {users.map(user=>(
                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={user.id}>
                    Id: {user.id} <br/>
                    Name: {user.name} <br/>
                    Address: {user.address}
                </Paper>
            ))}

        </Paper> */}
    </Container>
  );
}
