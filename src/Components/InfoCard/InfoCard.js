import React from "react";
import "./InfoCard.css";

const InfoCard = ({ profil }) => {
  // console.log(props);

  // const { firstAndLastName, age, country } = props;

  return (
    <div className="imePrezime">
      <h1>
        {profil.ime} {profil.prezime}
      </h1>
      <h1>{profil.godinaRodjenja}</h1>
      <h1>{profil.vozackaDozvola ? "Ima dozvolu" : "Ne sme da vozi"}</h1>
    </div>
  );
};

export default InfoCard;

// export default function InfoCard() {}
