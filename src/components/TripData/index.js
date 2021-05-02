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
  const subHeading1 = () => ({
    Date: "04/19/2020 at 5:20AM -04/19/2020 at 10:20AM (5 Hrs 0 Minutes)",
    totalKM: 165,
    totalExpenses: 0,
  });

  return (
    <div>
      <div className="px-4">
        <SubHeader subHeading1={subHeading1()} />
        <StyleTable Data={Data} />
        <SubHeader subHeading1={subHeading1()} />
        <StyleTable Data={Data} />
        <SubHeader subHeading1={subHeading1()} />
        <StyleTable Data={Data} />
      </div>
    </div>
  );
}

export default TripData;
