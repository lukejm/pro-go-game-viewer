import squareImg from '../assets/square.svg';

function Square({ squareKey }) {
  return (
    <button className='squareButton' key={squareKey}>
      <img src={squareImg} className='square' alt='square' />
    </button>
  );
}

export default Square;