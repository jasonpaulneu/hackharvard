import React, { useState } from "react";
import { TextField, Grid } from '@mui/material';
import classes from './Trip.module.css';

const Trip = (props) => {

    return (
      <>
      <div className={classes.tripCard}>
          <div className={classes.info}>
              <label>Flight No: </label>
              <label>{props.flight_number}</label>
          </div>
          <div className={classes.info}>
              <label>Date of Departure</label>
              <label>{props.departure_dateTime}</label>
          </div>
      </div>
      </>
    );
  };
  
  export default Trip;