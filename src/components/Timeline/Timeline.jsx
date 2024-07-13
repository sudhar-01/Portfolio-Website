import React from "react";
import "./styles.css";
import { calc } from "@chakra-ui/react";

export default function Timeline() {
  return (
    <>
      <div
        className="timeline-vertical-fill"
        style={{ top: "100px", left: "5%" }}
      ></div>

      <div
        className="timeline-horizontal-fill"
        style={{ top: "300px", left: "5%", animationDelay: "2s" }}
      ></div>
      <div
        className="timeline-vertical-fill"
        style={{ top: "300px", right: "5%", animationDelay: "4s" }}
      ></div>

      <div
        className="timeline-horizontal-fill"
        style={{ top: "500px", right: "5%", animationDelay: "6s" }}
      ></div>
      <div
        className="timeline-vertical-fill"
        style={{ top: "500px", left: "5%", animationDelay: "8s" }}
      ></div>

      <div
        className="timeline-horizontal-fill"
        style={{ top: "700px", left: "5%", animationDelay: "10s" }}
      ></div>
      <div
        className="timeline-vertical-fill"
        style={{ top: "700px", right: "5%", animationDelay: "12s" }}
      ></div>
    </>
  );
}
