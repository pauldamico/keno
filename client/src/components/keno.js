import { React, useState } from "react";
import Square from "./Square";

function Keno() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [matchingNumbers, setMatchingNumbers] = useState([]);
  const [timeoutIds, setTimeoutIds] = useState([]);
  const [startGame, setStartGame] = useState(false)




const getPickedNumber = (numbersArray, x) =>{
    let pickedNumber = Math.floor(Math.random() * 80) + 1
    numbersArray.find(item=>item.randomNumber === pickedNumber) ? getPickedNumber(numbersArray, x) :
    numbersArray.push({
        randomNumber: pickedNumber,
        id: x,
      });
      setRandomNumbers([...numbersArray]);

}

const endGame =()=>{
    setStartGame(false) 
    setRandomNumbers([]);
    // setMatchingNumbers([]);    
    
    
}


  
  const newGame = () => {
    setTimeoutIds([]);
    timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    let numbersArray = []; 
    let newTimeoutIds  = []
    for (let x = 0; x < 20; x++) {        
       let timeoutId = setTimeout(function() {
            getPickedNumber(numbersArray, x)            
        }, 1000 * x);
        numbersArray.length >= 20 && endGame() 
        newTimeoutIds.push(timeoutId)       
    }
    setTimeoutIds(newTimeoutIds)
  };
 

function matchListOfNumbers (id){
setMatchingNumbers(prev=>[...prev,id])
console.log("test")
}
function removeFromMatch (id){
    setMatchingNumbers(prev=>prev.filter(item=>item !==id))}

  const firstNumber = 1;
  const nums80 = () => {
    let squareArray = [];
    for (let x = 0; x < 80; x++) {
      squareArray.push({ square: firstNumber + x, id: x + 1, selected: false });
    }
    return squareArray;
  };

  const squares = nums80().map((item) => {
    return (
      <Square
      startGame={startGame}
      setRandomNumbers={setRandomNumbers}
      removeFromMatch={removeFromMatch}
      matchListOfNumbers={matchListOfNumbers}
        className="keno_square"
        randomNumbers={randomNumbers}
        {...item}
        key={item.id}
        style={{ color: "red", background: "grey" }}
      />
    );
  });

  const mappedRandomNumbers = randomNumbers.map(item=><p key={Math.random()*22} style={{background:matchingNumbers.find(num=>num === item.randomNumber) ? "red" : "white"}} className="drawn-number">{item.randomNumber}</p>)

  return (
    <div className="keno-body">
       <div className="keno-title-div"><h1>Keno</h1></div> 
      <div className="drawn-numbers">{mappedRandomNumbers}</div>
      <div className="keno-div">{squares}</div>
      <div className="keno-new-game-div"><h1
        onClick={() => {
          newGame();
        }}
      >
        New Game
      </h1></div>
    </div>
  );
}

export default Keno;
