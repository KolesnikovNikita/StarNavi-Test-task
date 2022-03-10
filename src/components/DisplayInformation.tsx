import React, { useState } from "react";

type Props = {
  hoveredItems: number[];
  currentNumber: number;
}

function DisplayInformation({hoveredItems, currentNumber}:Props) {
  
  return (
    <div>
      {hoveredItems
        .slice(0)
        .reverse()
        .map((item) => (
          <p className="information-item" key={item}>
            <span className="row-span">
              row: {item > currentNumber ? Math.ceil(item / currentNumber) : 1}
            </span>
            col: {item % currentNumber == 0 ? currentNumber : item % currentNumber}
          </p>
        ))}
    </div>
  );
}

export default DisplayInformation;
