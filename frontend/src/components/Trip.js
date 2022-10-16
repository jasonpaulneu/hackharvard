import React, { useState } from "react";
import { TextField, Grid } from '@mui/material';

const Trip = () => {
    const [flightNumber, setFlightNumber] = useState("");
    const [date, setDate] = useState("");
    return (
      <>
        <Grid container item spacing={3}>
            <TextField id="standard-basic" label="Flight Number" variant="standard" onChange={(e) => setFlightNumber(e.target.value)} />
            <TextField id="standard-basic" type="date" label="Date of Departure" variant="standard" onChange={(e) => setDate(e.target.value)}  />
        </Grid>
      </>
    );
  };
  
  export default Trip;