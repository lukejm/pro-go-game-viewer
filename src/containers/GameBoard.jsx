import {createKeys} from "./GameBoardHelpers.jsx";
import squareImg from '../assets/square.svg';

function innerJsx(keys) {
  return keys.map((key) => {
    return (<img src={squareImg} className='square' alt='square' key={key} />)
  });
}

function GameBoard() {

  const keys = createKeys();


  console.log(innerJsx(keys));

  const board = keys.map((keys, index) => {
    return (<div className='boardRow' key={index}>{innerJsx(keys)}</div>)
  });

  return (
    <>
      <div className='board'>
        {board}
      </div>
    </>
  );
}

export default GameBoard;