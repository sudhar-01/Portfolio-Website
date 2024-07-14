import React from "react";
import "./styles.css";
import locationIcon from "../../assets/location-icon.svg";
import workIcon from "../../assets/calender-icon.png";
import Timeline from "../Timeline/Timeline";

export default function Journey() {
  return (
    <div className="experience-section">
      <p className="experience-title">Journey</p>
      <Timeline />
      <div className="experience" style={{ top: "120px", left: "10%" }}>
        <img
          className="experience-img"
          src="https://static.wixstatic.com/media/e43dd0_d4e8dc9a4ae44806a538689985508833~mv2.jpg/v1/fit/w_2500,h_1330,al_c/e43dd0_d4e8dc9a4ae44806a538689985508833~mv2.jpg"
        ></img>
        <div className="experience-content">
          <h3>10th Grade CBSE</h3>
          <p>Amrita Vidyalayam</p>
          <div>
            <div className="info-sub-div" style={{ marginRight: "10px" }}>
              <img
                src={locationIcon}
                alt="location"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <p className="subtext">Trichy, TamilNadu</p>
            </div>
            <div className="info-sub-div">
              <img
                src={workIcon}
                alt="location"
                style={{ width: "16px", height: "16px", marginRight: "5px" }}
              />
              <p className="subtext">June 2016 - June 2017</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="experience"
        style={{
          top: "340px",
          right: "10%",
          justifyContent: "flex-end",
          textAlign: "end",
        }}
      >
        <div className="experience-content">
          <h3>12th Grade CBSE</h3>
          <p>Amrita Vidyalayam</p>
          <div>
            <div className="info-sub-div" style={{ marginRight: "10px" }}>
              <img
                src={locationIcon}
                alt="location"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <p className="subtext">Trichy, TamilNadu</p>
            </div>
            <div className="info-sub-div">
              <img
                src={workIcon}
                alt="location"
                style={{ width: "16px", height: "16px", marginRight: "5px" }}
              />
              <p className="subtext">June 2018 - June 2019</p>
            </div>
          </div>
        </div>
        <img
          className="experience-img"
          src="https://static.wixstatic.com/media/e43dd0_d4e8dc9a4ae44806a538689985508833~mv2.jpg/v1/fit/w_2500,h_1330,al_c/e43dd0_d4e8dc9a4ae44806a538689985508833~mv2.jpg"
        ></img>
      </div>

      <div className="experience" style={{ top: "540px", left: "10%" }}>
        <img
          className="experience-img"
          src="https://static.wixstatic.com/media/e43dd0_d4e8dc9a4ae44806a538689985508833~mv2.jpg/v1/fit/w_2500,h_1330,al_c/e43dd0_d4e8dc9a4ae44806a538689985508833~mv2.jpg"
        ></img>
        <div className="experience-content">
          <h3>B.Tech Electronics and Communication Engneering</h3>
          <p>SASTRA University</p>
          <div>
            <div className="info-sub-div" style={{ marginRight: "10px" }}>
              <img
                src={locationIcon}
                alt="location"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <p className="subtext">Trichy, TamilNadu</p>
            </div>
            <div className="info-sub-div">
              <img
                src={workIcon}
                alt="location"
                style={{ width: "16px", height: "16px", marginRight: "5px" }}
              />
              <p className="subtext">June 2019 - June 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="experience"
        style={{
          top: "740px",
          right: "10%",
          justifyContent: "flex-end",
          textAlign: "end",
        }}
      >
        <div className="experience-content">
          <h3>Associate Software Engineer</h3>
          <p>Integrate</p>
          <div>
            <div className="info-sub-div" style={{ marginRight: "10px" }}>
              <img
                src={locationIcon}
                alt="location"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <p className="subtext">Chennai, TamilNadu</p>
            </div>
            <div className="info-sub-div">
              <img
                src={workIcon}
                alt="location"
                style={{ width: "16px", height: "16px", marginRight: "5px" }}
              />
              <p className="subtext">June 2023 - Present</p>
            </div>
          </div>
        </div>
        <img
          className="experience-img"
          src="https://media.licdn.com/dms/image/D560BAQGz3Jnh4g6Qag/company-logo_200_200/0/1689028716548/integrate__logo?e=1729123200&v=beta&t=M6S-dNCYXxDHcj-vm7CG7GlHRCGIGI-E6UelapZ1LJ8"
        ></img>
      </div>
    </div>
  );
}
