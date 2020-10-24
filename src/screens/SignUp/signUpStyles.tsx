import { makeStyles, Theme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => ({
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
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
    padding: theme.spacing(1),
    opacity: 0,
    animation: `$fadeIn 1300ms ${theme.transitions.easing.easeInOut} forwards`,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    opacity: 0,
    animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut} forwards 800ms`,
  },
  signInLink: {
    opacity: 0,
    animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut} forwards 1100ms`,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  firstInput: {
    opacity: 0,
    animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut} forwards 200ms`,
  },
  secondInput: {
    opacity: 0,
    animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut} forwards 300ms`,
  },
  thirdInput: {
    opacity: 0,
    animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut} forwards 400ms`,
  },
  fourthInput: {
    opacity: 0,
    animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut} forwards 500ms`,
  },
  fifthInput: {
    opacity: 0,
    animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut} forwards 600ms`,
  },
  sixthInput: {
    opacity: 0,
    animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut} forwards 700ms`,
  },
  content: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
}));

export default useStyles;
