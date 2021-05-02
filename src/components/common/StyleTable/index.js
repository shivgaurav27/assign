import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./StylesTable.css";
const useStyles = makeStyles({
  buttonStyle: {
    borderRadius: "5px",
  },
  buttonLabel: {
    color: "#fff",
  },
});

function StyleTable() {
  const classes = useStyles();

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Trip Start(Node) to Trip Ends(Node)</th>
            <th scope="col">Driver Name</th>
            <th scope="col">Trip Expenses</th>
            <th scope="col">Trip Km</th>
            <th scope="col">Trip GPs Km</th>
            <th scope="col">Trip Time </th>
            <th scope="col">Odometer Reading </th>
            <th scope="col">Action </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>IFFcO CHOWK(5:20AM) Dwarka(7:20AM)</td>
            <td>ANDREW JOHN</td>
            <td>
              <div>Rs.0</div>
            </td>
            <td>65.0 Km</td>
            <td>0.00 Km </td>
            <td>02 hrs 00 min</td>
            <td>1020 10285</td>
            <td>
              <div className="d-flex justify-content-between">
                <div>
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    classes={{
                      root: classes.buttonStyle,
                      label: classes.buttonLabel,
                      text: classes.buttonText,
                    }}
                  >
                    Movement Report
                  </Button>
                </div>
                <div>
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    classes={{
                      root: classes.buttonStyle,
                      label: classes.buttonLabel,
                      text: classes.buttonText,
                    }}
                  >
                    Stoppage Report
                  </Button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StyleTable;
