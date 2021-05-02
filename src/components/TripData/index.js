import React from "react";
import StyleTable from "../common/StyleTable";
import SubHeader from "../SubHeader";

function TripData() {
  const Data = [
    {
      tripStartEnd: "IFFcO CHOWK(5:20AM) Dwarka(7:20AM)",
      driverName: "ANDREW JOHN",
      tripExpense: "0",
      tripKm: "65",
      tripGPSKm: "0.00",
      tripTime: "02hrs 00 min",
      odometerReading: "1020-10286",
    },
    {
      tripStartEnd: "IFFcO CHOWK(5:20AM) Dwarka(7:20AM)",
      driverName: "ANDREW JOHN",
      tripExpense: "0",
      tripKm: "65",
      tripGPSKm: "0.00",
      tripTime: "02hrs 00 min",
      odometerReading: "1020-10286",
    },
  ];
  return (
    <div>
      <div className="px-4">
        <SubHeader />
        <StyleTable Data={Data} />
        <SubHeader />
        <StyleTable Data={Data} />
        <SubHeader />
        <StyleTable Data={Data} />
      </div>
    </div>
  );
}

export default TripData;
