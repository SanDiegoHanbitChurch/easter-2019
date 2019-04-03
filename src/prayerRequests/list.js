import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import PrayerRequest from "./item";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function PrayerRequestList(props) {
  const { classes, prayerRequests } = props;
  return (
    <List className={classes.root}>
      {prayerRequests.map(prayerRequest => (
        <div key={prayerRequest.key}>
          <ListItem>
            <PrayerRequest prayerRequest={prayerRequest} />
          </ListItem>
        </div>
      ))}
    </List>
  );
}

PrayerRequestList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrayerRequestList);
