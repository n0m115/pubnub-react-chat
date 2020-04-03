import React from "react";
import { useDispatch } from "main/useDispatch";
import {
  Wrapper,
  Button,
  PoweredByPubNub,
  PoweredBy,
  Body
} from "./Login.style";
import { login } from "../loginCommand";
import { isLoggingIn } from "../authenticationModel";
import { isUserLoggedIn } from "features/authentication/authenticationModel";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const loggingIn = useSelector(isLoggingIn);
  const loggedIn = useSelector(isUserLoggedIn);
  const getQueryStringValue = (name: string) => {
    const params = new URLSearchParams(window.location.search);
    
    return params.get(name);
  }

  const loginUser = () => {
    if (loggingIn || loggedIn) {
      return;
    }
    
    const userId = String(getQueryStringValue('userID'));
    dispatch(login(userId));
  };

  if (!loggedIn && !loggingIn) {
    loginUser();
  }

  return (
    <Wrapper>
      <Body>
        <Button onClick={loginUser}>
          {loggingIn ? "Connecting" : "Connect"}
        </Button>
        <PoweredByPubNub>
          <PoweredBy>Powered By Wadic</PoweredBy>
        </PoweredByPubNub>
      </Body>
    </Wrapper>
  );
};

export { Login };
