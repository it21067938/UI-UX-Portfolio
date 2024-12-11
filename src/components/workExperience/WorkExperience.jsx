import React from "react";
import "./workexperience.css";

//Material Icons
import WorkIcon from "@mui/icons-material/Work";
import { TimelineBlock } from "..";

function WorkExperience() {
  return (
    <div className="workexperience">
      <div className="workexperience-heading">
        <h2>Work Experience</h2>
      </div>
      <div className="timeline-container">
        <TimelineBlock
          icon={<WorkIcon fontSize="large" />}
          title="UI/UX designer Intern
"
          duration="JUNE 2023 - NOV 2023"
          company="ENTIWS"
          text="During a six-month internship at ENTIWS Company, I gained experience in UI/UX
design, working with cross-functional teams, understanding user needs, and
synthesizing complex feedback."
        />

        <TimelineBlock
          icon={<WorkIcon fontSize="large" />}
          title="UI/UX designer Intern
"
          duration="Nov 2023 - Present"
          company="AXCERTRO"
          text="During a six-month internship at ENTIWS Company, I gained experience in UI/UX
design, working with cross-functional teams, understanding user needs, and
synthesizing complex feedback."
        />
      </div>
    </div>
  );
}

export default WorkExperience;
