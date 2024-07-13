import React from "react";
import "./styles.css";
import { FiExternalLink } from "react-icons/fi";
import cashflow from "../../assets/cash-flow.png";

export default function Projects() {
  return (
    <div className="projects-section">
      <p className="projects-title">Projects</p>
      <div className="project">
        <div className="project-image">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQE5ZjOFuHDZaA/profile-displayphoto-shrink_800_800/0/1622372474451?e=1726099200&v=beta&t=wU7XFLVJWcrFyazCCShVFos9NsY2Copho8huuVQYNMw"
            alt="project-img"
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ width: "70%" }}>
          <a style={{}} href="#">
            Smoose <FiExternalLink />
          </a>
          <p style={{ fontSize: "15px", fontWeight: "normal" }}>
            At Smoose, I contributed as a frontend developer, focusing on
            building and enhancing user interfaces using Flutter. I collaborated
            with a dynamic team to deliver a seamless and engaging user
            experience for our mobile applications. My work involved
            implementing responsive designs, optimizing performance, and
            ensuring cross-platform compatibility.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={cashflow} alt="cashflow" style={{ width: "100%" }} />
        </div>
        <div style={{ width: "70%" }}>
          <a style={{}} href="#">
            CashFlow <FiExternalLink />
          </a>
          <p style={{ fontSize: "15px", fontWeight: "normal" }}>
            The Cashflow project is a comprehensive money manager application. I
            developed the frontend using Flutter, creating an intuitive and
            responsive user interface. The backend, built with Fastify.js,
            ensured fast and efficient data processing, and the entire
            application was hosted on Cyclic for reliable deployment and
            scaling.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="project-image"></div>
        <div style={{ width: "70%" }}>
          <a style={{}} href="#">
            Voice Controlled Robot <FiExternalLink />
          </a>
          <p style={{ fontSize: "15px", fontWeight: "normal" }}>
          Building a small bot whose motions can be controlled through voice commands using esp8266, Arduino,l298n driver. The commands are given through google assistant and it sends them through IFTTT wherein on the other end, we receive the commands that can be converted to useful data for controlling the bot's motion.
          </p>
        </div>
      </div>
    </div>
  );
}
