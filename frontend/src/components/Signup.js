import React, { useState ,useEffect } from "react";
import classes from './Signup.module.css';
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";
import TextField from '@mui/material/TextField';
import { FormControl, Input, InputLabel, FormHelperText, Grid, Autocomplete } from '@mui/material';
import DarkButton from "./generic/DarkButton";
import axios from 'axios';

const Signup = () => {
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [listOfTags, setListOfTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const listOfHobbies = ['Reading', 'Working Out', 'Cooking', 'Hiking', 'Podcasts'];
  const [bio, setBio] = useState("");

  useEffect(() => {
    const fetchTags = async () => {
      await axios
        .get(`http://localhost:9000/api/v1/tag`)
        .then(async (res) => {
          setListOfTags(res.data);
        });
    };
    fetchTags();
  }, []);
  
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleTagsOnChange = (event,values) =>{
    const selectedtags= values.map(value =>value.id);
    setTags(selectedtags);
  }

  const handleHobbiesOnChange = (event,values) =>{
    const selectedHobbies= values.map(value =>value);
    setHobbies(selectedHobbies);
  }


  let navigate = useNavigate();

  const handleOnCreateAccountClick = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      
      const user={
        first_name:firstName,
        last_name: lastName,
        email: email,
        password:password,
        bio:bio
      }

      const postUser = async (user) => {
        return await axios({
          method: "POST",
          url: "http://localhost:9000/api/v1/user",
          data: user,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            accept: "*/*",
          },
          validateStatus: (status) => {
            return true;
          },
        }).catch((err) => console.log(err.data));
      };

      const postTag = async (tagId,userId) =>{
        return await axios({
          method: "POST",
          url: "http://localhost:9000/api/v1/usertag",
          data: {userId,tagId},
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            accept: "*/*",
          },
          validateStatus: (status) => {
            return true;
          },
        }).catch((err) => console.log(err.data));
      }

      const postHobby = async (hobby,userId) =>{
        return await axios({
          method: "POST",
          url: "http://localhost:9000/api/v1/hobby",
          data: {hobby,userId},
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            accept: "*/*",
          },
          validateStatus: (status) => {
            return true;
          },
        }).catch((err) => console.log(err.data));
      }
      const newUser =await postUser(user);

      tags.forEach(tagId => postTag(tagId, newUser.data.id));

      hobbies.forEach(hobby => postHobby(hobby,newUser.data.id));

      navigate("/home");
    } catch (err) {
      setError("There was an error when signing up user in Firebase");
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
              options={listOfTags}
              getOptionLabel={(option) => option.tag}
              // defaultValue={[intentions[0]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label=""
                  placeholder="Tags"
                />
              )}
              onChange={handleTagsOnChange}
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
              options={listOfHobbies}
              getOptionLabel={(option) => option}
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
              onChange={handleHobbiesOnChange}
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
          Already have an account? <b><Link to="/login">Login</Link></b> <DarkButton btnText='Create Account' onClick={handleOnCreateAccountClick} />
        </div>
        </div>
      </div>
      <img src={require('../assets/signupImg.png')} className={classes.signUpImg}/> 

    </>
  );
};

export default Signup;