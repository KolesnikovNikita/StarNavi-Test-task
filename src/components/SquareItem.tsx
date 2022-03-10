import classNames from "classnames";
import React, { useState } from "react";

type Props = {
  id: number;
  hoveredItems:number[];
  setHoveredItems([]): void;
}

function SquareItems({setHoveredItems, hoveredItems, id}:Props) {
  const [handleOver, setHandleOver] = useState(false);
  const itemClass = classNames("square-for-hover", { "on-hover": handleOver });

  return (
    <div
      className={itemClass}
      onMouseEnter={() => {
        if (!handleOver) {
          setHoveredItems([...hoveredItems, id].slice(-7));
        } else {
          setHoveredItems(
            hoveredItems.filter((id) => id !== id).slice(-7)
          );
        }
        setHandleOver(!handleOver);
      }}
    ></div>
  );
}

export default SquareItems;
