import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import withRoot from "../withRoot";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Add = ({ onSubmit, classes }) => {
  const [topic, setTopic] = useState("");
  const [initial, setInitial] = useState("");

  const onClick = () => {
    if (topic !== "" && initial !== "") {
      onSubmit({ topic, initial });
      setTopic("");
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid
          container
          spacing={16}
          alignItems="center"
          direction="column"
          justify="center"
        >
          <Grid key="0" item>
            <Typography variant="h4" gutterBottom>
              San Diego Hanbit Church
            </Typography>
          </Grid>
          <Grid key="1" item>
            <Typography variant="h4" gutterBottom>
              Easter 2019
            </Typography>
          </Grid>
          <Grid key="2" item>
            <TextField
              name="topic"
              label="Your Prayer Request"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              value={topic}
              onChange={e => setTopic(e.target.value)}
            />
          </Grid>
          <Grid key="3" item>
            <TextField
              name="initial"
              label="Your Initial"
              margin="normal"
              variant="outlined"
              value={initial}
              onChange={e => setInitial(e.target.value)}
            />
          </Grid>
          <Grid key="4" item>
            <Button variant="contained" color="secondary" onClick={onClick}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Add.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Add));
