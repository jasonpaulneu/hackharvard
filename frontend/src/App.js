import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import Flight from "./components/Flight";
import PeoplePage from "./components/PeoplePage";
import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";

function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
     <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/people" element={<PeoplePage />} />
    </Routes>
  </UserAuthContextProvider>
    // <Container style={{ width: "400px" }}>
    //   <Row>
    //     <Col>

        // </Col>
      //</Row >
    //</Container > }
  );
}

export default App;