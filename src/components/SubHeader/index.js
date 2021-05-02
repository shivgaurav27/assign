import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const metricStyles = makeStyles({
  root: {
    top: 20,
  },
});

function SubHeader(props) {
  const { title } = props;
  const classes = metricStyles();
  return (
    <>
      <CssBaseline />
      <AppBar className={classes.root} position="relative" color="primary">
        <Toolbar>
          <Typography variant="h3">{title}</Typography>
        </Toolbar>
      </AppBar>
      <br />
    </>
  );
}

export default SubHeader;
