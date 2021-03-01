import React from "react";
import "./Hire.css";
const Hire = (props) => {
  const player = props.hire;
  const salary = player.reduce((total, player) => total + player.salary, 0);
  return (
    <div className="hire">
      <h4>Selected Team Member : {props.hire.length}</h4>
      <h4>Total Cost : ${salary}</h4>
      <div className="selectedPlayer">
        <h4>Selected Players Name</h4>
        <ul>
          {player.map((player) => (
            <li key={player.index}>
                {player.name} : ${player.salary}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hire;
