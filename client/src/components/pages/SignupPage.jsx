import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/features/application";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

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

export default function SignupPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signingUp = useSelector((state) => state.application.signingUp);
  const error = useSelector((state) => state.application.error);

  console.log(error)
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChargePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(createUser(login, password));
  };
  return (
    <div style={{ width: "auto", position: 'relative' }}>
      <div className={classes.signupUp}>
        {error}
        <form className={classes.root} noValidate autoComplete="off">
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
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              disabled={signingUp}
            >

              Регистрация
            </Button>

            <NavLink style={{textDecoration:'none', color:'white'}} to="signin">
              <Button variant="contained" color="primary">
                  Вход
              </Button>
            </NavLink>

          </div>
        </form>
      </div>
    </div>
  );
}
