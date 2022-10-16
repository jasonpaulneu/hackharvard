import React, { useState } from "react";
import { TextField } from '@mui/material';
import Trip from './Trip';
import classes from './Flight.module.css';
import LightButton from './generic/LightButton';
import DarkButton from './generic/DarkButton';
import {useSelector} from 'react-redux';



const Flight = (props) => {
    const [flightNumber, setFlightNumber] = useState("");
    const [date, setDate] = useState("");

    const loggedInUser = useSelector((state)=> state.user.loggedInUser)
   
    const addFlightInput = event => {
        props.handleAddFlight(flightNumber,date,loggedInUser.id)
    };
    
    
    return (
      <>
      <div className={classes.container}>
        <div className={classes.inputRow}>
          <div className={classes.formControl}>
            <label>
              Flight No
            </label>
            <TextField className={classes.inputField} id="standard-basic"  variant="standard" onChange={(e) => setFlightNumber(e.target.value)} InputProps={{
              disableUnderline: true,
            }}  />
          </div>
          <div className={classes.formControl}>
            <label>
              Date of Departure
            </label>
            <TextField className={classes.inputField} id="standard-basic" type="date"  variant="standard" onChange={(e) => setDate(e.target.value)} InputProps={{
              disableUnderline: true,
            }}  />
          </div>
        </div>
        <div className={classes.btnRow}>
            <LightButton btnText='Add Flight'  onClick={addFlightInput}/>
            <DarkButton btnText ='People Feed' />
        </div>
      </div>
        {/* <Grid container item spacing={1}>
            {inputList}
            <Grid container item spacing={3}>
                <Button variant="secondary" onClick={addFlightInput}>Add Flight</Button>
                <Button variant="secondary" type='submit' onClick={addFlightInput}>Submit</Button>
            </Grid>
        </Grid> */}
      </>
    );
  };
  
  export default Flight;