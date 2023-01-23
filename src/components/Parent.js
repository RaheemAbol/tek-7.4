import React from "react";
import GrandChild from "./GrandChild";

function Parent({ grandMother, grandFather }) {
  return (
    <div>
      <GrandChild grandMother={grandMother} grandFather={grandFather} />
    </div>
  );
}

export default Parent;
