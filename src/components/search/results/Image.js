import React from "react";
import { Link } from "react-router-dom";

const Image = item => (
  <div className="search-result">
    <Link to={`/asset/${item.id}`}>
      <img className="search-result__image" alt={item.title} src={item.thumb} />
    </Link>
  </div>
);

export default Image;