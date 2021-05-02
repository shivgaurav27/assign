import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const metricStyles = makeStyles({
  root: {
    top: 20,
  },
  regularstyle: {
    minHeight: 48,
  },
});

function SubHeader(props) {
  const classes = metricStyles();
  return (
    <>
      <AppBar className={classes.root} position="relative" color="primary">
        <Toolbar classes={{ regular: classes.regularstyle }}>
          <Typography variant="h4">Date</Typography>
        </Toolbar>
      </AppBar>
      <br />
    </>
  );
}

export default SubHeader;
