import React from 'react'
import PropTypes from "prop-types";

import "./Cards.css";


function Card({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text">
          {text}
        </p>
        <a
href={url ? url : "#!"}
target="_blank"
className="btn btn-outline-secondary border-0"
rel="noreferrer"
>Leer mas</a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

/*<a
href={url ? url : "#!"}
target="_blank"
className="btn btn-outline-secondary border-0"
rel="noreferrer"
>
Leer más
</a> */

export default Card