import { Typography } from "@material-ui/core";
import React from "react";

function Trip() {
  return (
    <div className="container-fluid px-4">
      <div className=" mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <Typography variant="h4" className="position-absolute">
              Trip Summary
            </Typography>
            <div className="d-flex justify-content-between mt-4">
              <Typography variant="body1">Dashboard</Typography>
              <Typography variant="body1" className="px-2">
                /
              </Typography>
              <Typography variant="body1">Trip Summary</Typography>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
