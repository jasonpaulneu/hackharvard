import React, { useState } from "react";
import classes from './Login.module.css';
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";
import DarkButton from './generic/DarkButton';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError('Please enter valid user credentials');
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.navRow}>
          <img className={classes.logo} src={require('../assets/Logo.png')} />
        </div>
        <div className={classes.contentRow}>
          <div className={classes.sideImage}>
            <img src={require('../assets/HomeImg.png')} />
          </div>
          <div className={classes.sideContent}>
            <div className={classes.formContainer}>
              <div className={classes.message}>
                Hey there, We missed you!!!
              </div>
              <div className={classes.subMessage}>
                Enter your credentials and start where you left.
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={classes.formLabel}>Email address</Form.Label>
                  <Form.Control
                    className={classes.formInput}
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={classes.formLabel}>Password</Form.Label>
                  <Form.Control
                    className={classes.formInput}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {/* <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                    Log In
                  </Button>
                </div> */}
                 {error && <Alert variant="danger">{error}</Alert>}
                <div className={classes.btnLogin}>
                  <DarkButton btnText='Login' type="Submit" />
                </div>
              </Form>
            </div>

          </div>
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;