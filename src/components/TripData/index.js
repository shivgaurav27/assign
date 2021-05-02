import React from "react";
import StyleTable from "../common/StyleTable";
import SubHeader from "../SubHeader";

function TripData() {
  const Data = [
    {
      tripStartEnd: "IFFcO CHOWK(5:20AM) Dwarka(7:20AM)",
      driverName: "",
    },
  ];
  return (
    <div>
      <div className="p-4">
        <SubHeader />
        <StyleTable />
      </div>
    </div>
  );
}

export default TripData;
