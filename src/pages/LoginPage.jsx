import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import videoBg from "../assets/videoBg.mp4";

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (user.username === "rustam" && user.password === "2005") {
      navigate("/debts");
    } else {
      toast.error("Error");
    }
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  console.log(user);
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
      </div>
      <Form className="form-bg" onSubmit={submit}>
        <Form.Group controlId="username">
          <Form.Label>User name</Form.Label>
          <Form.Control
            value={user.username}
            onChange={handleUser}
            required
            type="text"
            placeholder="username"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={user.password}
            onChange={handleUser}
            required
            type="password"
            placeholder="password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button className="mt-3" type="submit">
          Submit Form
        </Button>
        <div className="log">
          <h4>Login: rustam</h4>
          <h4> Password: 2005</h4>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
