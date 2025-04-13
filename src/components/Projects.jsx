import React from "react";
import Card from "./Card";

import "../style/project.css";
import projectBg from "../assets/projects/bg-project.png";

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <div className="project-content">
        <h2 className="project-h">
          Projects I've <span>created</span>
        </h2>
        <p className="project-p">
          Project building is the best way to test the skills we’ve learned so
          far.
        </p>
      </div>
      <div className="project-cards">
        <Card
          Proj_Title="ZenVoyager"
          Proj_Paragraph="Created fully functional website for ZenVoyager, a creative tech company. Reactjs for the frontend and Supabase for serverless backend."
          Proj_Link="https://zenvoyager.in/"
          GitLink="https://github.com/ZenVoyager/ZenVoyager-Official"
          RepoDate="Dec 30, 2024"
        />
        <Card
          Proj_Title="ShopKirana Reimagined"
          Proj_Paragraph="ShopKirana is a brand which provides tech solutions to small and medium-sized businesses. I created a website for them using Reactjs."
          Proj_Link="https://shopkirana.netlify.app/"
          GitLink="https://github.com/ArinBagul/ShopKirana-Reimagined"
          RepoDate="Sep 23, 2024"
        />
        <Card
          Proj_Title="Milk Accounting App"
          Proj_Paragraph="A milk accounting app that helps dairy farmers manage their milk account. Built with Reactjs and Firebase."
          Proj_Link="https://arinbagul.github.io/MilkAccountingApplication/"
          GitLink="https://github.com/ArinBagul/MilkAccountingApplication"
          RepoDate="Jun 05, 2024"
        />
        <Card
          Proj_Title="ElectoConnect"
          Proj_Paragraph="ElectoConnect, built with React Native, streamlined communication during the 2024 Lok Sabha Elections by centralizing election officials' contact details."
          Proj_Link="https://www.dropbox.com/scl/fi/hopiah2c10ctvfsdgwyc4/application-7d7a1477-77ee-4e72-8b3f-36e6a8fb43e2.apk?rlkey=e2wajhmo65y2j4dqxxjq2j3ux&st=8md3nm82&dl=0"
          GitLink="https://github.com/ArinBagul/eGovernance-Contact-Directory-App"
          RepoDate="Jun 05, 2024"
        />
      </div>
      <div className="project-bg">
        <img src={projectBg} alt="" />
      </div>
    </section>
  );
}
