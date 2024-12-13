import React from "react";
import "../../styles/TeamsPage.css"; // Corrected CSS import

const ContentSection = ({ image, name, index, activeContent, role }) => {
  return (
    <div
      className={`contentBx ${
        activeContent === `content${index + 1}` ? "active" : ""
      }`}
      id={`content${index + 1}`}
    >
      <div className="card">
        <div className="imgBx w-[200px]">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
        <div className="textBx">
          <h2>{name}</h2>
          <h2>{role}</h2>
          <ul className="sci">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <div className="team-member-info">
            {/* Add more details if necessary */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
