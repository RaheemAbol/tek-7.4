import React, { useContext } from "react";
import LineageContext from "../context/lineage";

function GrandChild({ grandMother, grandFather }) {
  const value = useContext(LineageContext);

  return (
    <div>
      <h1>My grandmother's name {grandMother}</h1>
      <h1>My grandFather's name {grandFather}</h1>
      <h3>
        {value.grandMa} and {value.grandPa}
      </h3>
    </div>
  );
}

export default GrandChild;
