import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./Players.css";
import { Button } from "react-bootstrap";
const Players = (props) => {
  const {
    country,
    name,
    img,
    age,
    BattingStyle,
    BowlingStyle,
    Grade,
    gender,
    salary,
  } = props.playerId;
  return (
    <div className="player ">
      <div className="playerImage">
        <img src={img} alt="" />
      </div>
      <div className="playerInfo">
        <h3>Name: {name}</h3>
        <div className="row">
          <div className="col-md-6">
            <p>Age: {age}</p>
          </div>
          <div className="col-md-6">
            <p>Gender: {gender}</p>
          </div>
        </div>
        <p>Batting Style: {BattingStyle}</p>
        <p>Bowling Style: {BowlingStyle}</p>
        <div className="row">
          <div className="col-md-6">
            <p>Grade: {Grade}</p>
          </div>
          <div className="col-md-6">
            <p>Salary: {salary}</p>
          </div>
        </div>
        <p>Country: {country}</p>
        <Button
          className="button"
          onClick={() => props.handleAddPlayer(props.playerId)}
        >
          Select This Player <FontAwesomeIcon icon={faUserPlus} />
        </Button>
      </div>
    </div>
  );
};

export default Players;
