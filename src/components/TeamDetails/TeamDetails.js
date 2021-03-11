import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import maleImage from "../../images/male.png";
import { CgGenderMale } from "react-icons/cg";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaPassport,
  FaFlag,
  FaRev,
} from "react-icons/fa";
const TeamDetails = () => {
  const [singleTeam, setSingleTeam] = useState({});
  const { idTeam } = useParams();
  const {
    strTeam,
    strTeamBadge,
    strCountry,
    intFormedYear,
    strStadiumThumb,
    strGender,
    strStadiumDescription,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strYoutube,
  } = singleTeam;
  console.log(strYoutube);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    )
      .then((res) => res.json())
      .then((data) => setSingleTeam(data.teams[0]));
  }, [idTeam]);
  return (
    <section className="team-details">
      <div className="banner">
        <img className="banner-img" src={strStadiumThumb} alt={strCountry} />
        <div className="logo">
          <img src={strTeamBadge} alt={strCountry} />
        </div>
      </div>

      <section className="details">
        <div className="container">
          <section className="team-overview">
            <div className="team-names">
              <h2>{strTeam}</h2>
              <p>
                <FaRev />
                <span>Founded:{intFormedYear}</span>
              </p>
              <p>
                <FaFlag />
                <span>Country:{strCountry}</span>
              </p>
              <p>
                <FaPassport />
                <span>Sport Type: Football</span>
              </p>
              <p>
                <CgGenderMale />
                <span>Gender:{strGender}</span>
              </p>
            </div>
            <div className="small-banner">
              <img className="male-female-img" src={maleImage} alt="" />
            </div>
          </section>
          <article>
            <p className="paragraph">{strStadiumDescription}</p>
            <p className="paragraph">{strDescriptionEN}</p>
          </article>
          <div className="social-link">
            <a className="twitter" href={strTwitter}>
              <FaTwitter />
            </a>
            <a className="facebook" href={strFacebook}>
              <FaFacebook></FaFacebook>
            </a>
            <a className="youtube" href={strYoutube}>
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TeamDetails;
