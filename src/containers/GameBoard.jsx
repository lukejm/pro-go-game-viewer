import {createKeys} from "./GameBoardHelpers.jsx";
import Square from "./Square.jsx";

function innerJsx(keys) {
  return keys.map((key) => {
    return (
      <Square key={key} />
    )
  });
}

function GameBoard() {
  const allKeys = createKeys();

  const board = allKeys.map((keys, index) => {
    const row = innerJsx(keys);
    return (<div className='boardRow' key={index}>{row}</div>);
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