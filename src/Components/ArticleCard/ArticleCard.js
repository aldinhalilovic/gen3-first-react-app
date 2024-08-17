import React from "react";
import "./ArticleCard.css";

// const ArticleCard = ({ title, description, btn }) => {
const ArticleCard = ({ movie }) => {
  return (
    <div className="card">
      <h1 className="title">{movie.title}</h1>
      <p className="description">{movie.description}</p>
      <p className="button">{movie.btn}</p>
    </div>
  );
};

export default ArticleCard;
