import React from "react";
import { Service } from "../../components";
import "./services.css";

//Icons

import { Brackets, DigitalMarketing, Sketch, AppDev } from "../../assets";
function Services() {
  return (
    <div className="services section-margin" id="services">
      <h1 className="gradient-text">Services Offered</h1>
      <div className="services-container">
        <Service
          icon={DigitalMarketing}
          title="Ui/Ux Design"
          text="I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth."
        />
        <Service
          icon={Brackets}
          title="Wireframing & Prototyping
"
          text="Creating low and high-fidelity wireframes, mockups, and interactive prototypes to visualize design ideas.
"
        />
        <Service
          icon={Sketch}
          title="UI Design (User Interface Design)
"
          text="Designing visually appealing interfaces with a focus on usability and branding.
"
        />
        <Service
          icon={AppDev}
          title="UX Design (User Experience Design)
"
          text="Enhancing user journeys by optimizing flows, navigation, and interactions.
"
        />

        <Service
          icon={AppDev}
          title="Usability Testing & Feedback Analysis

"
          text="Testing designs with users to gather feedback and improve functionality.

"
        />

        <Service
          icon={AppDev}
          title="Mobile & Web App Design

"
          text="Designing responsive and platform-specific experiences for mobile and web applications.
"
        />

        <Service
          icon={AppDev}
          title="Design Systems & Style Guides

"
          text="
Creating reusable components, typography guidelines, and style guides to ensure design consistency.
"
        />
      </div>
    </div>
  );
}

export default Services;
