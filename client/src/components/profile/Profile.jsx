import React from "react";
import { Avatar, Box, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileCard: {
    width: "40%",
    height: 300,
    marginLeft: "30%",
    marginRight: "30%",
    padding: 30,
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  profileItems: {
    display: "flex",
    justifyContent: "space-between",
  },
  profileBox: {
    display: "flex",
  },
}));

function Profile(props) {
  const classes = useStyles();

  return (
    <Paper
      className={classes.profileCard}
      style={{ marginTop: 50 }}
      elevation={3}
    >
      <Box className={classes.profileItems}>
        <Box className={classes.profileBox}>
          <Box>
            <Avatar src="/broken-image.jpg" className={classes.large} />
          </Box>
          <Box style={{ margin: 50 }}>
            <h2>Имя</h2>
            <h2>Фамилия</h2>
            <h2>login</h2>
          </Box>
        </Box>
        <Box>
          <Button variant="contained" color="primary">
            Edit Profile
          </Button>
        </Box>
      </Box>
      <Box></Box>
    </Paper>
  );
}

export default Profile;
