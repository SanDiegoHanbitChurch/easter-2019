import React from "react";
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

class Index extends React.Component {
  state = {
    prayerRequest: "",
    initial: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClick = () => {
    this.setState({
      prayerRequest: ""
    });
  };

  render() {
    const { classes, add } = this.props;

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
                name="prayerRequest"
                label="Your Prayer Request"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                value={this.state.prayerRequest}
                onChange={this.onChange}
              />
            </Grid>
            <Grid key="3" item>
              <TextField
                name="initial"
                label="Your Initial"
                margin="normal"
                variant="outlined"
                value={this.state.initial}
                onChange={this.onChange}
              />
            </Grid>
            <Grid key="4" item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  // add(this.state);
                  this.onClick();
                }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
