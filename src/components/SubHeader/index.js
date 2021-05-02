import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const metricStyles = makeStyles({
  root: {
    top: 20,
  },
  rootStyle: {
    display: "flex",
    justifyContent: "space-between",
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
        <Toolbar
          classes={{ regular: classes.regularstyle, root: classes.rootStyle }}
        >
          <Typography variant="h5">
            Date: 04/19/2020 at 5:20AM -04/19/2020 at 10:20AM (5 Hrs 0 Minutes)
          </Typography>
          <div className="d-flex justify-content-between">
            <Typography variant="h5" style={{ color: "#0be0d9" }}>
              Total KM :165 KM &nbsp;
            </Typography>
            <Typography variant="h5" style={{ color: "#c5e305" }}>
              {" "}
              Total Expenses : 0
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <br />
    </>
  );
}

export default SubHeader;
