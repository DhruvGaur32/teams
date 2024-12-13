"use client";
import React, { useState, useEffect } from "react";
import "../styles/TeamsPage.css";
import Anushka from "../images/assets/coreHeadAnushka-Singh.jpg";
import Prashant from "../images/assets/coreHeadprashant-tripathi.jpg";
import Vaibhav from "../images/assets/coreHeadVaibhav-Joshi.jpg";
import Siddharth from "../images/assets/coreHeadSiddharth-Sabhari-Shankar.jpg";
import Priyanshu from "../images/assets/Priyanshu-Shaw.jpg";
import Jatin from "../images/assets/Jatin-Motwani.jpg";
import Aditya from "../images/assets/Aditya-G-Gaikwad.jpg";
import Neeraj from "../images/assets/Neeraj-Patel.jpg";
import img1 from "../images/assets/img1.jpg";
import img2 from "../images/assets/img2.jpg";
import img3 from "../images/assets/img3.jpg";
import img4 from "../images/assets/img4.jpg";
import img5 from "../images/assets/img5.jpg";
import img6 from "../images/assets/img6.jpg";
import img7 from "../images/assets/img7.jpg";
import Circle from "../app/components/Circle";
import TeamMember from "../app/components/TeamMember";
import ContentSection from "../app/components/ContentSection";
import { useMediaQuery } from "@react-hook/media-query";

const TeamsPage = () => {
  const [activeImg, setActiveImg] = useState(1);
  const [activeContent, setActiveContent] = useState("content1");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1050);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1050);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Contacts = [
    { name: "a", image: img1, phone: 123, email: "email" },
    { name: "b", image: img2, phone: 342, email: "emasd" },
    { name: "c", image: img3, phone: 123, email: "email" },
    { name: "d", image: img4, phone: 342, email: "emasd" },
    { name: "e", image: img5, phone: 123, email: "email" },
    { name: "f", image: img6, phone: 342, email: "emasd" },
    { name: "R", image: img7, phone: 123, email: "email" },
  ];

  const coreHeads = [
    { name: "Anushka Singh", role: "Accommodation Head", image: Anushka },
    { name: "Prashant Tripathi", role: "Marketing Head", image: Prashant },
    { name: "Vaibhav Joshi", role: "Design Head", image: Vaibhav },
    { name: "Siddharth Sabhari", role: "Marketing Head", image: Siddharth },
    { name: "Priyanshu Shaw", role: "Events Head", image: Priyanshu },
    { name: "Jatin Motwani", role: "Marketing Head", image: Jatin },
    { name: "Aditya Gaikwad", role: "Sponsorship Head", image: Aditya },
    { name: "Neeraj Patel", role: "Logistics Head", image: Neeraj },
  ];

  const scoms = [
    { name: "Soujanya Nayak", role: "General Secretary", image: img1 },
    { name: "Shreya Mishra", role: "Sports Nominee", image: img2 },
  ];

  const teamRoles = ["CONTACTS", "COREHEADS", "SCOMS"];

  const handleRoleClick = (index) => setActiveRoleIndex(index);

  return (
    <div>
      {isMobileView ? (
        <div className="p-10">
          <div className="mobile-content grid-container">
            <div className="grid-item">
              <h1 className="text-white text-3xl py-5">Contacts</h1>
              <div className="photo-grid">
                {Contacts.map((member, index) => (
                  <TeamMember key={index} {...member} />
                ))}
              </div>
            </div>
            {/* Add sections for other roles */}
          </div>
        </div>
      ) : (
        <div className="main-div">
          <div className="side-navbar">
            <ul>
              {teamRoles.map((role, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleRoleClick(index)}
                    className={`side-nav-button ${
                      activeRoleIndex === index ? "active-role-button" : ""
                    }`}
                  >
                    {role}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="container">
            <div className="icon">
              {teamRoles.map((_, index) => (
                <Circle
                  key={index}
                  activeImg={activeImg}
                  activeContent={activeContent}
                  setActiveImg={setActiveImg}
                  setActiveContent={setActiveContent}
                  Contacts={index === 0 ? Contacts : index === 1 ? coreHeads : scoms}
                />
              ))}
            </div>
            <div className="content">
              {(activeRoleIndex === 0 ? Contacts : coreHeads).map((contact, index) => (
                <ContentSection key={index} {...contact} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsPage;
