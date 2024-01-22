import {createKeys} from "./GameBoardHelpers.jsx";


function innerJsx(keys) {
  return keys.map((key) => {
    return (
      <button key={key} id={key} className='squareButton'></button>
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