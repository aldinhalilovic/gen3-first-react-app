import React from "react";
import "./InfoCard.css";

const InfoCard = ({ firstAndLastName }) => {
  return (
    <div className="imePrezime">
      <h1>{firstAndLastName}</h1>
    </div>
  );
};

export default InfoCard;

// export default function InfoCard() {}
