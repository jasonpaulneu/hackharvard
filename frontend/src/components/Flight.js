import React, { useState } from "react";
import { Grid, Button } from '@mui/material';
import Trip from './Trip';

const Flight = (props) => {
    const [inputList, setInputList] = useState([<Trip />]);
    const addFlightInput = event => {
        setInputList(inputList.concat(<Trip />));
    };
    
    return (
      <>
        <Grid container item spacing={1}>
            {inputList}
            <Grid container item spacing={3}>
                <Button variant="secondary" onClick={addFlightInput}>Add Flight</Button>
                <Button variant="secondary" type='submit' onClick={addFlightInput}>Submit</Button>
            </Grid>
        </Grid>
      </>
    );
  };
  
  export default Flight;