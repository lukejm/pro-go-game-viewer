import './App.css'
import GameBoard from "./containers/GameBoard.jsx";
import Square from "./containers/Square.jsx";

function App() {

  return (
    <>
      <p>This is the app.</p>
      <Square squareId={'aa'}/>
      <GameBoard />
    </>
  )
}

export default App
