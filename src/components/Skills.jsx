import React from 'react'
import Bullet from './Bullet'
import "../style/skills.css"
import skillsObj from "./skills-obj.json"

export default function Skills() {
    const skillsArray = skillsObj.skills
    // console.log(skillsArray)

    const skillEl = skillsArray.map((skill) => <Bullet skill = {skill} />)

    // console.log(skillEl)
    return(
        <div className="skills-container">
            {skillEl}
        </div>
    )
}

/*
            <Bullet skill="C++" />
            <Bullet skill="Java" />
            <Bullet skill="HTML" />
            <Bullet skill="CSS" />
            <Bullet skill="Vanilla JS" />
            <Bullet skill="MongoDB" />
            <Bullet skill="Express" />
            <Bullet skill="React" />
            <Bullet skill="NodeJS" />
            <Bullet skill="AWS" />
            <Bullet skill="Firebase" />
            <Bullet skill="Figma" />
            <Bullet skill="Blender 3D" />
            <Bullet skill="Photoshop" />
*/