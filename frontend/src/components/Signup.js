import React, { useState } from "react";
import classes from './Signup.module.css';
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";

import TextField from '@mui/material/TextField';
import { FormControl, Input, InputLabel, FormHelperText, Grid, Autocomplete } from '@mui/material';
import DarkButton from "./generic/DarkButton";

const Signup = () => {
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const intentions = ['dating', 'networking', 'friendship'];
  const hobbies = ['reading', 'hiking', 'cooking'];
  const [bio, setBio] = useState("");
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };


  let navigate = useNavigate();
 
  const handleLoginOnClick = () => {
      navigate('/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.navRow}>
          <img className={classes.logo} src={require('../assets/Logo.png')} />
        </div>
        <div className={classes.title}>
          Create your profile
        </div>
        <div className={classes.signUpForm}>
          <div className={classes.formRow}>
            <div className={classes.formControl}>
              <label>First Name</label>
            <TextField className={classes.inputField} id="standard-basic" label="" variant="standard" onChange={(e) => setFirstName(e.target.value)} InputProps={{
              disableUnderline: true,
            }} />
            </div>
            <div className={classes.formControl}>
            <label>Last Name</label>
            <TextField className={classes.inputField} id="standard-basic" label="" variant="standard" onChange={(e) => setLastName(e.target.value)} InputProps={{
              disableUnderline: true,
            }} />
            </div>
          </div>
          <div className={classes.formRow}>
          <div className={classes.formControl}>
            <label>Email</label>
            <TextField className={classes.inputField} type="email" id="standard-basic" label="" variant="standard" onChange={(e) => setEmail(e.target.value)} InputProps={{
              disableUnderline: true,
            }} />
            </div>
            <div className={classes.formControl}>
            <label>Password</label>
            <TextField className={classes.inputField} type="password" id="standard-basic" label="" variant="standard" onChange={(e) => setPassword(e.target.value)} InputProps={{
              disableUnderline: true,
            }}/>
            </div>
          </div>
          <div className={classes.formRow}>
          <div className={classes.formControl}>
            <label>Tags</label>
            <Autocomplete
              className={classes.autocomplete}
              multiple
              id="tags-standard"
              options={intentions}
              getOptionLabel={(option) => option}
              defaultValue={[intentions[0]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label=""
                  placeholder="Tags"
                />
              )}
              sx={{
                "& .MuiChip-labelMedium": {
                  color: "white"
                },
                "& .MuiChip-filled":{
                  background: "#F89F5F"
                }
              }}
            />
            </div>
          </div>
          <div className={classes.formRow}>
          <div className={classes.formControl}>
            <label>Bio</label>
            <TextField
              className={classes.bio}
              id="filled-multiline-flexible"
              multiline
              rows={5}
              maxRows={5}
              value={bio}
              onChange={handleBioChange}
              variant="filled"
              InputProps={{
                disableUnderline: true,
              }}
            />
            </div>
          </div>
          <div className={classes.formRow}>
          <div className={classes.formControl}>
            <label>Hobbies</label>
            <Autocomplete
              className={classes.autocomplete}
              multiple
              id="hobbies-standard"
              options={hobbies}
              getOptionLabel={(option) => option}
              defaultValue={[hobbies[0]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label=""
                  placeholder="Hobbies"
                />
              )}
              sx={{
                "& .MuiChip-labelMedium": {
                  color: "white"
                },
                "& .MuiChip-filled":{
                  background: "#F89F5F"
                }
              }}
            />
            </div>
          </div>
          <div className={classes.formRow}>
          <div className={classes.formControl}>
            <label>Profile Photo</label>
            <Input type="file"   />
            </div>
          </div>
          <div className={`${classes.logInSection} ${classes.formRow}`}>
          Already have an account? <b><DarkButton btnText='Log In' onClick={handleLoginOnClick} /></b>
        </div>
        </div>
      </div>
      <img src={require('../assets/signupImg.png')} className={classes.signUpImg}/> 

    </>
  );
};

export default Signup;