import React from "react";
import UserInfo from "../../components/UserInfo";
import Statement from "../../components/Statement";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      paddingLeft: 0,
      minHeight: "100vh",
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.content} direction="row" justify="center" spacing={0}>
      <Grid item xs={12} sm={4} style={{ backgroundColor: "white" }}>
        <UserInfo />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Statement />
      </Grid>
    </Grid>
  );
};

export default Home;
