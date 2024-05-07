import React from "react";

interface CardProps {
  image: string;
  title: string;
  openingDate: string;
}

const Card: React.FC<CardProps> = ({ image, title, openingDate }) => {
  return (
    <div className="card border border-gray-300 rounded p-4 flex flex-col justify-between">
      <img
        src={image}
        alt={title}
        className="card-image"
        style={{ height: 200, width: 200 }}
      />
      <div className="flex flex-col justify-between">
        <h3 className="card-title">{title}</h3>
        <p className="card-opening-date text-xs">Opened on: {openingDate}</p>
      </div>
      <div className="card-options">
        <button className="card-options-button">...</button>
      </div>
    </div>
  );
};

export default Card;
