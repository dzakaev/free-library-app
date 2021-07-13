import React from "react";
import { Avatar, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomePage from "../pages/HomePage";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "220px",
    marginLeft: "20%",
    height: "400px",
    textAlign: "center",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  display: {
    display: "flex",
  },
  content: {
    width: "50%",
    height: "auto",
    marginLeft: 30,
  },
}));

function MainBody(props) {
  const classes = useStyles();

  return (
    <div className={classes.display}>
      <Paper elevation={20} className={classes.container}>
        <Box style={{ padding: 30 }}>
          <Avatar src="" className={classes.large} />
        </Box>
        <Box>
          <h2>Имя</h2>
        </Box>
        <Box>
          <h2>Фамилия</h2>
        </Box>
      </Paper>
      <Paper className={classes.content} elevation={20}>
        <HomePage />
      </Paper>
    </div>
  );
}

export default MainBody;
