import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./StylesTable.css";
const useStyles = makeStyles({
  buttonStyle: {
    borderRadius: "5px",
    marginTop: "7px",
  },
  buttonLabel: {
    color: "#fff",
  },
});

function StyleTable(props) {
  const classes = useStyles();
  const { Data } = props;

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
          {Data &&
            Data?.length > 0 &&
            Data.map((item) => (
              <tr>
                <th scope="row">1</th>
                <td>{item?.tripStartEnd}</td>
                <td>{item?.driverName}</td>
                <td>
                  <div>Rs.{item?.tripExpense}</div>
                </td>
                <td>{item?.tripKm} Km</td>
                <td>{item?.tripGPSKm} </td>
                <td>{item?.tripTime}</td>
                <td>{item?.odometerReading}</td>
                <td>
                  <div className="d-flex justify-content-between tableBlock">
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
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default StyleTable;
