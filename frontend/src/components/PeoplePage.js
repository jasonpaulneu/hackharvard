import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";

import { storage } from '../firebase-config'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"

import { useState } from 'react';
import { uploadBytesResumable } from 'firebase/storage';
import Navbar from "./generic/Navbar";
import classes from './PeoplePage.module.css';
import PersonCard from "./PersonCard";

const PeoplePage = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

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

  return (
    <>
      <Navbar />
      <div className={classes.mainContainer}>
        <div className={classes.flightNum}>
        DL 40378  ( 18th Jan)
        </div>
        <PersonCard />
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