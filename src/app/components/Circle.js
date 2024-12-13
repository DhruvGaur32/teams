import React from "react";
import "../../styles/TeamsPage.css";

const Circle = ({ 
  Contacts, 
  activeContent, 
  activeImg, 
  setActiveImg, 
  setActiveContent 
}) => {
  const handleMouseOver = (dataID, index) => {
    setActiveContent(dataID);
    setActiveImg(index);
  };

  return (
    <>
      {Contacts.map((contact, index) => (
        <div
          id={`content${index + 1}`}
          key={index}
          className={`imgBx ${activeImg === index + 1 ? "active" : ""}`}
          style={{ "--i": index + 1, "--count": Contacts.length }}
          data-id={`content${index + 1}`}
          onMouseOver={() => handleMouseOver(`content${index + 1}`, index + 1)}
        >
          <img src={contact.image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </>
  );
};

export default Circle;
