import React from "react";
import profile from "../../assets/profile-photo.png";
import locationIcon from "../../assets/location-icon.svg";
import workIcon from "../../assets/work-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import './styles.css';

export default function ProfileSection() {
  return (
    <div className="profile-section">
      <img src={profile} alt="profile" className="profile-pic" />
      <div className="profile-details">
        <p className="profile-name"><span>Hi, I'm </span>Sudharsan</p>
        <div>
            <img src={locationIcon} alt="lcoation" />
            <p style={{display: 'inline'}}>Chennai, India</p>
        </div>
        <div>
            <img src={workIcon} alt="lcoation" />
            <p style={{display: 'inline'}}>Integrate Inc.</p>
        </div>
        <div>
            <img src={emailIcon} alt="lcoation" />
            <p style={{display: 'inline'}}>sudhar01sd@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
