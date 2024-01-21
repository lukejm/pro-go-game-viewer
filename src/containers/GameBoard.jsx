import {createKeys} from "./GameBoardHelpers.jsx";
import Square from "./Square.jsx";

function innerJsx(keys) {
  return keys.map((key) => {
    return (
      <Square squareKey={key} />
    )
  });
}

function GameBoard() {
  const keys = createKeys();

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