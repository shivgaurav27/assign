import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CustomDatePickr from "../common/CustomDatePickr";
import "./Trip.css";
const useStyles = makeStyles({
  buttonStyle: {
    borderRadius: "5px",
    marginTop: "7px",
  },
});

function Trip() {
  const classes = useStyles();
  return (
    <div className="container-fluid px-4">
      <div className=" mt-5">
        <div className="d-flex justify-content-between TripResponsiv">
          <div>
            <Typography variant="h4">Trip Summary</Typography>
            <div className="d-flex justify-content-between mt-4">
              <Typography variant="body1">Dashboard</Typography>
              <Typography variant="body1" className="px-2">
                /
              </Typography>
              <Typography variant="body1">Trip Summary</Typography>
            </div>
          </div>
          <div className="d-flex justify-content-around ">
            <div className="m-1">
              <CustomDatePickr />
            </div>

            <div className="m-1">
              <CustomDatePickr />
            </div>
            <div className="m-1 pt-4">
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                classes={{
                  root: classes.buttonStyle,
                  text: classes.buttonText,
                }}
              >
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
