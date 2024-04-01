import { React, useState, useEffect } from "react";

function Square(props) {
  const {removeFromMatch, matchListOfNumbers, className, square, randomNumbers, id } = props;
  const [currentSquare, setCurrentSquare] = useState({
    selected: false,
    matchingSquare: false,
  });


  const toggleSelected = () => {
    setCurrentSquare((currentSquare) => ({
      ...currentSquare,
      selected: !currentSquare.selected,
    }));
    !currentSquare.selected && matchListOfNumbers(id)
    currentSquare.selected &&  removeFromMatch(id)   
  };

  // Styles
  const square_background =
    currentSquare.selected && currentSquare.matchingSquare
      ? "green"
      : currentSquare.selected
      ? "green"
      : currentSquare.matchingSquare
      ? "red"
      : "blue";

  const square_text_color =
    currentSquare.matchingSquare && currentSquare.selected ? "red" : "yellow";

  useEffect(() => {
    setCurrentSquare((prev) => ({
      ...prev,
      matchingSquare: randomNumbers.find((item) => id === item.randomNumber),
    }));
  }, [randomNumbers, id]);

  return (
    <div
      style={{ background: square_background, color: square_text_color }}
      onClick={() => {
        toggleSelected();
      }}
      className={className}
    >
      {square}
    </div>
  );
}
export default Square;
