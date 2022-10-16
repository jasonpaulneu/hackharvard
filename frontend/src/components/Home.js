import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { storage } from '../firebase-config'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { useState, useEffect } from 'react';
import { uploadBytesResumable } from 'firebase/storage';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from "../store/user_slice";
import Navbar from "./generic/Navbar";
import Flight from "./Flight";
import classes from './Home.module.css';
import axios from "axios";
import Trip from "./Trip";


const Home = (props) => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [flights, setFlights] = useState([]);
  const { logOut, user } = useUserAuth();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser)

  useEffect(() => {
    const fetchUser = async () => {
      if (user.email) {
        await axios
          .get(`http://localhost:9000/api/v1/user?email=${user.email}`)
          .then((res) => {
            dispatch(userActions.login(res.data));
          });
      };
    }
    fetchUser();
  }, [user])


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
  const handleAddFlight = async (flight_number, departure_dateTime, userId) => {
    const postPassenger = async (flight_number, departure_dateTime, userId) => {
      return await axios({
        method: "POST",
        url: "http://localhost:9000/api/v1/passenger",
        data: { flight_number, departure_dateTime, userId },
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
    console.log("flightno",flight_number);
    console.log("dep",departure_dateTime);
    console.log("userId",userId);
    console.log("IN POST PASSENGER");
    const newFlight = await postPassenger(flight_number, departure_dateTime, userId);
    setFlights(flights.concat(newFlight));
  }

  const FlightCards = flights.map((flight) => { return <Trip flight_number={flight.flight_number} departure_dateTime={flight.departure_dateTime} /> })

  return (
    <>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.flightDetails}>
          <div>
            <div className={classes.title}>
              Enter Flight Details
            </div>
            <Flight handleAddFlight={handleAddFlight} />
          </div>
          <div className={classes.flightCardsSection}>
            {FlightCards}
          </div>
        </div>
        <div className={classes.homeImageContainer}>
          <img src={require('../assets/HomeIcons.png')} className={classes.homeImage} />
        </div>
      </div>
      {/* <div className="p-4 box mt-3" name='upload_file'>
        <form className='app__form' name='upload_file' onSubmit={handleSubmit}>
          <input type='file' />
          <Button variant="secondary" type='submit'>Upload</Button>
        </form>
        <progress value={progressPercent} max="100"/>
      </div> */}
      {/* <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
    </>
  );
};

export default Home;