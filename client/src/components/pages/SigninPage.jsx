import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { auth } from '../../redux/features/application';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  signupUp: {
    position:'absolute',
    left:570,
    top: 200,
  },
  input: {
    left:20
  }
}));

export default function SigninPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signingIn = useSelector((state) => state.application.signingIn);
  const error = useSelector((state) => state.application.error);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChargePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(auth(login, password));
  };
  return (
    <div style={{ width: "auto", position: 'relative' }}>

      <div className={classes.signupUp}>
        <form className={classes.root} noValidate autoComplete="off">
          {error}
          <div>
            <TextField
              className={classes.input}
              id="standard-basic"
              label="login"
              type="login"
              placeholder="type login"
              value={login}
              onChange={handleChangeLogin}
            />
          </div>
          <div>
            <TextField
              className={classes.input}
              id="filled-basic"
              label="password"
              type="password"
              placeholder="type password"
              value={password}
              onChange={handleChargePassword}
            />
          </div>
          <div className={classes.root}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={signingIn}
            >
              Вход
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
