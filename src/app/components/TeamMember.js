import React, { useState, useEffect } from "react";
import "../../styles/TeamsPage.css";
import { useMediaQuery } from "@react-hook/media-query";
// import TeamMember from "./TeamMember";
import ContentSection from "./ContentSection";

const TeamMember = ({ teamRoles, rolesData }) => {
  const isMobileView = useMediaQuery("(max-width: 1050px)");
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const handleRoleClick = (index) => setActiveRoleIndex(index);

  return (
    <div>
      {isMobileView ? (
        <div className="mobile-view">
          {rolesData.map((role, index) => (
            <div key={teamRoles[index]}>
              <h1>{teamRoles[index]}</h1>
              {role.map((member, idx) => (
                <ContentSection key={member.name} {...member} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="desktop-view">
          <div className="sidebar">
            {teamRoles.map((role, index) => (
              <button
                key={role}
                onClick={() => handleRoleClick(index)}
                className={`side-nav-button ${
                  activeRoleIndex === index ? "active-role-button" : ""
                }`}
              >
                {role}
              </button>
            ))}
          </div>
          <div className="main-content">
            {rolesData[activeRoleIndex].map((member) => (
              <ContentSection key={member.name} {...member} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default TeamMember;
