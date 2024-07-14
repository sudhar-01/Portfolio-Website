import React from "react";
import "./styles.css";
import logo from "../../assets/designer-logo.png";
import vscode from "../../assets/vscode-logo.png";
import sublimeText from "../../assets/sublime-text-logo.png";
import chatgpt from "../../assets/chatgpt-logo.png";
import github from "../../assets/github-logo.png";
import stackoverflow from "../../assets/stack-overflow-logo.png";
import figma from "../../assets/figma-logo.png";
import androidStudio from "../../assets/android-studio-logo.png";
import Blob from "../Blob/Blob";
import ProfileSection from "../ProfileSection/ProfileSection";
import Background from "../Background/Background";

export default function TitleSection() {
  return (
    <div className="title-section">
      {/* <Background /> */}

      <img src={logo} alt="desginer-logo" className="designer-logo" />
      <div className="designer-title">
        <p className="designer-text">DESIGNER</p>
      </div>
      <div className="stick"></div>
      <div className="developer-title">
        <p className="developer-text">DEVELOPER</p>
      </div>
      <div className="tools-container">
        <img src={vscode} alt="vscode" className="vscode-style" />
        <img
          src={sublimeText}
          alt="sublimetext"
          className="sublime-text-style"
        />
        <img src={chatgpt} alt="chatgpt" className="chatgpt-style" />
        <img src={github} alt="github" className="github-style" />
        <img
          src={stackoverflow}
          alt="stackoverflow"
          className="stackoverflow-style"
        />
        <img src={figma} alt="figma" className="figma-style" />
        <img
          src={androidStudio}
          alt="android-studio"
          className="android-studio-style"
        />
      </div>
    </div>
  );
}
