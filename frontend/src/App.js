import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import Flight from "./components/Flight";

function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
     <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
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