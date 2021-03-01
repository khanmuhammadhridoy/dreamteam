import "./App.css";
import Players from "./component/Players/Players";
import Hire from "./component/Hire/Hire";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const data = require("./fakeData/data.json");
    setPlayers(data.data);
  }, []);

  const [hired, setHired] = useState([]);
  const handleAddPlayer = (player) => {
    if (hired.includes(player)) {
      setHired(hired);
      alert("Already Selected");
    } else {
      const newHired = [...hired, player];
      setHired(newHired);
    }
  };

  return (
    <div>
      <h2 className="textCenter">
        Choose Your Favorite Players to Join Your Team.
      </h2>
      <div className="player-container">
        <div className="player-info">
          {players.map((player) => (
            <Players
              playerId={player}
              handleAddPlayer={handleAddPlayer}
              key={player.index}
            ></Players>
          ))}
        </div>
        <div className="hire-section">
          <Hire hire={hired} key={players.index}></Hire>
        </div>
      </div>
    </div>
  );
}

export default App;
