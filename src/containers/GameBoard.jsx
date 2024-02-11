import {createKeys} from "../utils/GameBoardHelpers.jsx";
import BoardSquare from '../assets/board/white_square.svg?react';


function innerJsx(keys) {
  return keys.map((key) => {
    return (
      <BoardSquare key={key} id={key} className='square' />
      // <button key={key} id={key} className='squareButton'><BoardSquare className='' /></button>
    )
  });
}

export default function GameBoard() {
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
