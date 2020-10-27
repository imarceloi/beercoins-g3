import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import Image from "../../assets/images/logo.png";

import useStyles from "./signInStyles";

import SignInForm from "./SignInForm";

const SignIn = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content} maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <div className={classes.headerText}>
          <img src={Image} alt="logo" />
        </div>

        <SignInForm />
      </div>
    </Container>
  );
};

export default React.memo(SignIn);
