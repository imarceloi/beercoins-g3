import React, { useRef, useCallback, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import signPagesInputErrorCustomStyle from "../../utils/themes";
import { blue } from "@material-ui/core/colors";
import { makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import { useToasts } from "react-toast-notifications";
import { useAuthContext } from "../../context/Auth";
import { useHistory } from "react-router-dom";
import { SignInService } from "../../services/Auth.service";
import cookieHandler from "../../utils/cookieHandler";
const signInService = new SignInService();

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    color: blue[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const usernameRef = useRef<IInputRef>(null);
  const passwordRef = useRef<IInputRef>(null);
  const [usernameInputError, setUsernameInputError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUserInfo } = useAuthContext();
  const { addToast } = useToasts();

  let history = useHistory();

  const signInHandler = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const username = usernameRef?.current?.value;
      const password = passwordRef?.current?.value;

      if (!username) {
        setUsernameInputError(true);
      }

      if (!password) {
        setPasswordInputError(true);
      }

      if (username && password) {
        setLoading(true);

        await signInService
          .execute({ password, username })
          .then((response) => {
            const userInformation = response.data;

            setUserInfo(userInformation);

            cookieHandler.create("userInfo", JSON.stringify(userInformation), 30);

            addToast("Login efetuado com sucesso!", {
              appearance: "success",
            });

            history.push("/");
          })
          .catch((error) => {
            setLoading(false);

            addToast("Credenciais inválidas. Por favor, tente novamente.", {
              appearance: "error",
            });
          });
      }
    },
    [addToast, history, setUserInfo]
  );

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={classes.form} onSubmit={signInHandler} noValidate>
          <ThemeProvider theme={signPagesInputErrorCustomStyle}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              inputRef={usernameRef}
              error={usernameInputError}
              helperText={usernameInputError && "Type an username"}
              onFocus={() => setUsernameInputError(false)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
              error={passwordInputError}
              helperText={passwordInputError && "Type a password"}
              onFocus={() => setPasswordInputError(false)}
            />
          </ThemeProvider>

          <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              size="large"
              disabled={loading}
            >
              Sign In
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>

          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default React.memo(SignIn);
