import React from "react"
import Card from "./Card"

import "../style/project.css"
import projectBg from "../assets/projects/bg-project.png"

export default function Projects(){
    return(
        <section className="projects-container" id="projects">
            <div className="project-content">
                <h2 className="project-h">PROJECTS I<span>’ve created</span></h2>
                <p className="project-p">Project building is the best way to test the skills we’ve learned so far.</p>
            </div>
            <div className="project-cards">
                <Card 
                    Proj_Title="Project LrNiz"
                    Proj_Paragraph="Created fully functional website for LrNiz Ltd. using vanilla HTML, CSS & JavaScript. Build a Registration Page using Google Sheets API."
                    Proj_Link="https://lrniz.netlify.app/"
                    GitLink="https://github.com/ArinBagul/Project_LrNiz"
                    RepoDate="19 May, 2022"
                />
                <Card
                    Proj_Title="Movie Share App"
                    Proj_Paragraph="Share and suggest movies name with your friends using Movie Share Web App. The web app is build using HTML, CSS & JS and uses Firebase as backend."
                    Proj_Link="https://movieshare-arin.netlify.app/"
                    GitLink="https://github.com/ArinBagul/MovieShare_mobile_app"
                    RepoDate="Aug 20, 2023"
                />
            </div>
            <div className="project-bg">
                <img src={projectBg} alt="" />
            </div>
        </section>
    )
}