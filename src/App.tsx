import "./App.css";
import { useState, useEffect } from "react";
import SquareItem from "./components/SquareItem";
import DisplayInformation from "./components/DisplayInformation";
import { queryOptions } from "./api/queries";
import {Square} from "./types/Square";

function App() {
  const [squareList, setSquareList] = useState<number[]>([]);
  const [currentNumber, setCurrentNumber] = useState<number>(0);  
  const [hoveredItems, setHoveredItems] = useState<number[]>([]);
  const [optionList, setOptionList] = useState<Square[]>([]);

  useEffect(() => {
    queryOptions().then((response) => setOptionList(response.data));
  }, []);

  return (
    <div className="main-container">
      <div className="action-section">
        <div className="select-toggle">
          <select
            className="select-option"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setCurrentNumber(Number(event.target.value));
            }}
          >
            <option>Pick Mode</option>
            {optionList.map((option) => (
              <option key={option.field} value={option.field}>
                {option.field}
              </option>
            ))}
          </select>
          <button
            className="start-button"
            type="button"
            onClick={() => setSquareList([...Array(currentNumber ** 2).keys()])}
          >
            Start
          </button>
        </div>
        <div className={`grid_${Math.sqrt(squareList.length)}`}>
          {squareList.map((id) => (
            <SquareItem
              key={id}
              id={id + 1}
              setHoveredItems={setHoveredItems}
              hoveredItems={hoveredItems}
            />
          ))}
        </div>
      </div>
      <div className="interface-section">
        <div className="output-section">
          <h1 className="interface-header">Hover squares</h1>
        </div>
        <DisplayInformation hoveredItems={hoveredItems} currentNumber={currentNumber} />
      </div>
    </div>
  );
}

export default App;
