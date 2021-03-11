import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleTeam.css";
const SingleTeam = (props) => {
  const { strTeamBadge, strTeam, idTeam } = props.team;
  return (
    <Card className="cart">
      <img src={strTeamBadge} alt={strTeam}></img>
      <Card.Body>
        <Card.Title>
          {" "}
          <h2 className="team-name">{strTeam}</h2>
        </Card.Title>
        <Card.Text>
          {" "}
          <p>Sports Type: Football</p>
        </Card.Text>
        <Link to={`/teamDetails/${idTeam}`}>
          <Button className="btn">Explore</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleTeam;
