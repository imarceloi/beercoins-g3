import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Image from "../../assets/images/logo.png";
import useStyles from "./signUpStyles";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content} maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <div className={classes.avatar}>
          <img src={Image} alt="logo" />
        </div>

        <SignUpForm />
      </div>
    </Container>
  );
};

export default React.memo(SignUp);
