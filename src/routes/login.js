import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
const SLoginTitle = styled.h1`
  font-size: 4rem;
  padding: 3rem;
`;

const SSubText = styled.p`
  font-size: 1.3rem;
  color: #a7a7a7;
  text-align: center;
`;
const SFormGroup = styled.div`
  margin-top: 3rem;
  .MuiFormControl-root {
    margin: 1em auto;
    display: block;
    width: 80%;
    .MuiInputBase-root {
      width: 100%;
    }
    input {
      width: 100%;
    }
  }
`;

const SBtns = styled.div`
  width: 80%;
  margin: 10rem auto 1rem auto;
  button {
    margin: 0.5rem 0;
  }
`;

const Login = () => {
  let history = useHistory();

  const loginClickHandler = () => {
    history.push("/home");
  };
  return (
    <>
      <SLoginTitle>
        Star Wars
        <br />
        Explorer
      </SLoginTitle>
      <SSubText>We're excited to see you!</SSubText>
      <SFormGroup>
        <TextField placeholder="Your Email" variant="outlined" />
        <TextField
          placeholder="Your Password"
          type="password"
          variant="outlined"
        />
      </SFormGroup>
      <SBtns>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={loginClickHandler}
        >
          Log In
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={loginClickHandler}
        >
          I don't have an account yet
        </Button>
      </SBtns>
    </>
  );
};

export default Login;
