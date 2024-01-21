import Square from "./Square.jsx";
import {initId, boardRowClose, boardRowOpen, createKeys} from "./GameBoardHelpers.jsx";


const GameBoard = () => {

  const keys = createKeys();
  function innerJsx(keys) {
    return keys.map((key, index) => {
      <Square squareId={key}/>
    });
  }

  const board = keys.map((keys, index) => {
    innerJsx(keys);
  });


  return (
    <div className='board'>
      {board}
    </div>
  );
}

export default GameBoard;