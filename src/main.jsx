import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GameBoard from "./containers/GameBoard.jsx";
import Square from "./containers/Square.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <Square squareId={'aa'}/>
    <GameBoard />
  </React.StrictMode>,
)
