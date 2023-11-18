import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay/GamePlay";


function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted(prev => !prev);
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay toggleGamePlay={toggleGamePlay} /> : <StartGame toggleGamePlay={toggleGamePlay} />
      }
    </>
  )
}

export default App
