import squareImg from '../assets/square.svg';

function placePiece({turn}) {
  return (turn === 'white') ? <img src='../assets/white.svg' alt='W' /> : <img src='' alt='B' />
}

function Square() {
  // console.log(squareKey);
  return (
    <>
    <button className='squareButton' onClick={placePiece('white')}>
      {/*<img src={squareImg} className='square' alt='square' />*/}
    </button>
    </>
  );
}

export default Square;