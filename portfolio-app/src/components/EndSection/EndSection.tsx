import React from "react";
import "./styles.css";
import githubIcon from "../../assets/github-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import instagram from "../../assets/instagram-icon.png";
import gmail from "../../assets/gmail-icon.png";

export default function EndSection() {
  return (
    <div className="endsection">
      <div className="upper-div">
        <div className="freelancing-content">
          <p className="freelancing-title">My Freelancing Business</p>
          <p>
            This freelancing business is dedicated to developing dynamic and
            user-friendly web and mobile applications tailored to your needs.
            Leveraging expertise in Flutter and various backend technologies, it
            delivers high-quality, scalable solutions designed with your goals
            in mind. Services include UI/UX design, full-stack development, and
            project management, ensuring your project's success from start to
            finish.
          </p>
        </div>
        <div className="contact">
          <p className="freelancing-title">Contact</p>
          <div style={{ marginTop: "10px" }}>
            <img
              src={linkedin}
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <a
              style={{ display: "inline" }}
              href="https://www.linkedin.com/in/sd-sudharsan-6834871b0/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
          <div style={{ marginTop: "10px" }}>
            <img
              src={instagram}
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <a
              style={{ display: "inline" }}
              href="https://www.instagram.com/_sds_oo1/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
          <div style={{ marginTop: "10px" }}>
            <img
              src={githubIcon}
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <a
              style={{ display: "inline" }}
              href="https://github.com/sudhar-01"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div style={{ marginTop: "10px" }}>
            <img
              src={gmail}
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <a
              style={{ display: "inline" }}
              href="mailto:sudhar01sd@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-div">
        <a
          href="https://community.atlassian.com/t5/image/serverpage/image-id/60660iD56849E12A9D191A/image-size/large?v=v2&px=999"
          target="_blank"
        >
          <p style={{ display: "inline" }}>
            PRIVACY POLICY &nbsp;&nbsp;&nbsp;
            <span>TERMS AND CONDITIONS APPLIED</span>
          </p>
        </a>
        <a href="https://i.imgflip.com/p45a9.jpg?a477960" target="_blank">
          <p style={{ display: "inline", marginLeft: "auto" }}>
            <span>COPYRIGHT@2023 SUDHARSAN.COM</span>
          </p>
        </a>
      </div>
    </div>
  );
}
