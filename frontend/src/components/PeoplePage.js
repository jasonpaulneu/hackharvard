import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { storage } from '../firebase-config'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { useState , useEffect} from 'react';
import { uploadBytesResumable } from 'firebase/storage';
import Navbar from "./generic/Navbar";
import classes from './PeoplePage.module.css';
import PersonCard from "./PersonCard";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


const PeoplePage = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [flights, setFlights] = useState([]);
  const [copassengers, setCopassengers] = useState([]);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);


  //first get flights for the user
  useEffect(() => {
    const fetchMyFlights = async () => {
      if (loggedInUser) {
        await axios
          .get(`http://localhost:9000/api/v1/passenger?userId=${loggedInUser.id}`)
          .then(async (res) => {
            setFlights(res.data);
          });
      }
    };
    fetchMyFlights();
  }, [loggedInUser]);

  const fetchPassengersForFlight = async (flight_num) => {
    if (loggedInUser) {
      await axios
        .get(`http://localhost:9000/api/v1/flightpassenger/${flight_num}`)
        .then((res) =>  res.data);
    }
  };

  //get passengers in each flight
  useEffect(() => {
   flights.forEach(async (flight)=>{
    const passengers = await fetchPassengersForFlight(flight.flight_num);
    setCopassengers(copassengers.concat(passengers));
   })
  }, [flights,loggedInUser]);



  const handleSubmit = async (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
  
    if (!file) return null;
    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
  
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgressPercent(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        e.target[0].value = ''
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log(downloadURL)
        })
      }
    )
  } 

  const personCards = copassengers.map(p => <PersonCard person={p}/>)

  return (
    <>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.flightNum}>
        DL 40378  ( 18th Jan)
        </div>
         <PersonCard /> 
        {/* {personCards} */}
      </div>
      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
      </div>
      <div className="p-4 box mt-3" name='upload_file'>
        <form className='app__form' name='upload_file' onSubmit={handleSubmit}>
          <input type='file' />
          <Button variant="secondary" type='submit'>Upload</Button>
        </form>
        <progress value={progressPercent} max="100"/>
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
    </>
  );
};

export default PeoplePage;