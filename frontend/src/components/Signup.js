import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";

import TextField from '@mui/material/TextField';
import { FormControl, Input, InputLabel, FormHelperText, Grid, Autocomplete } from '@mui/material';

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
      <div className="p-4 box">
        <h2 className="mb-3">Floak Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <TextField id="standard-basic" label="First Name" variant="standard" onChange={(e) => setFirstName(e.target.value)} />
          <TextField id="standard-basic" label="Last Name" variant="standard" onChange={(e) => setLastName(e.target.value)}  />
        </Grid>
        <Grid container item spacing={3}>
          <TextField type="email" id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)}/>
          <TextField type="password" id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
        </Grid>
        <Grid container item spacing={1}>
        <Autocomplete
            multiple
            id="tags-standard"
            options={intentions}
            getOptionLabel={(option) => option}
            defaultValue={[intentions[0]]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Tags"
                placeholder="Tags"
              />
            )}
          />
        </Grid>
        <Grid container item spacing={1}>
          <TextField
            id="filled-multiline-flexible"
            label="Bio"
            multiline
            maxRows={4}
            value={bio}
            onChange={handleBioChange}
            variant="filled"
          />
        </Grid>
        <Grid container item spacing={1}>
        <Autocomplete
            multiple
            id="hobbies-standard"
            options={hobbies}
            getOptionLabel={(option) => option}
            defaultValue={[hobbies[0]]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Hobbies"
                placeholder="Hobbies"
              />
            )}
          />
        </Grid>
        <Grid container item spacing={1}>
          <Input type="file" />
        </Grid>
        <Grid container item spacing={1}>
          <Button variant="secondary" type='submit' onClick={handleSubmit}>Submit</Button>
        </Grid>
        </Grid>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;