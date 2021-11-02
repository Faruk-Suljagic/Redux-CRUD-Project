import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/actions';

const AddUser = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        street: ""
    })
    const [error, setError] = useState("")

    const {name, email, phone, street} = state;
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !street || !email || !phone){
            setError("Please complete the process!")
        } else {
            dispatch(addUser(state));
            history.push('/');
            setError("")
        }
    }


    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({ ...state, [name]: value })
    }
    return (
        <>
        <ButtonGroup style={{backgroundColor: "#2D78CF", width: "50px", margin: "3px 100% 3px 3px"}} variant="contained" aria-label="outlined secondary button group">
            <Button onClick={() => history.push("/")} variant="container"  style={{color: "#fff", fontWeight: "300", width: "100%"}}>
                <i className="fas fa-arrow-left" style={{padding: " 5px 0px", fontSize: 22}}></i>
            </Button>
          </ButtonGroup>
        <h2>Add User</h2>
        {error && <h3 style={{color: "red"}}>{error}</h3> }
        <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
          marginTop: 20,
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField name="name" onChange={handleInputChange} id="standard-basic" label="Name" variant="standard" value={name} type="text" />
      <br />
      <TextField name="email" onChange={handleInputChange} id="standard-basic" label="Email" variant="standard" value={email} type="email" />
      <br />
      <TextField name="phone" onChange={handleInputChange} id="standard-basic" label="Contact" variant="standard" value={phone} type="number" />
      <br />
      <TextField name="street"  onChange={handleInputChange} id="standard-basic" label="Street" variant="standard" value={street} type="text" />
      <br /> 
      <ButtonGroup style={{backgroundColor: "#942DA7", width: "130px"}} variant="contained" aria-label="outlined secondary button group">
            <Button variant="container"  style={{color: "#fff", fontWeight: "300", width: "100%"}} type="submit">
              Add User
            </Button>
          </ButtonGroup>
    </Box>
        </>
    )
}

export default AddUser
