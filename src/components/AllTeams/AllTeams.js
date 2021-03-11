import React from "react";
import { useEffect, useState } from "react";
import SingleTeam from "../SingleTeam/SingleTeam";
import "./AllTeams.css";

const AllTeams = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328"
    )
      .then((res) => res.json())
      .then((data) => {
        const firstNineTeam = data.teams.slice(0, 9);
        setTeam(firstNineTeam);
      });
  }, []);
  return (
    <div className="teams">
      <div className="team-container">
        {team.map((team) => (
          <SingleTeam team={team}></SingleTeam>
        ))}
      </div>
    </div>
  );
};

export default AllTeams;
