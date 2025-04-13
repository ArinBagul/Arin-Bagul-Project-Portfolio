import React from 'react'
import Skills from './Skills'
import "../style/tech-section.css"

export default function Tech() {
    return (
        <section className='tech-section' id='tech'>
            <h2 className='tech-h'>Technologies I <span>Know</span></h2>
            <div className="tech-container">
                <Skills />
                <p className="tech-p">
                    I am a versatile programmer with a passion for learning and adapting to new technologies. I have good knowledge of <b>C++</b> and <b>Java</b>, where I have a solid foundation in <b>Data Structures</b>.
                    <br /><br />
                    As a <b>Full-Stack developer</b>, I have a well-rounded skillset, but my heart truly belongs to front-end development. I am proficient in both classical web development technologies and the cutting-edge <b>MERN Stack</b> technology, enabling me to create dynamic and responsive web applications.
                    <br /><br />
                    Additionally, my knowledge extends to <b>UI design</b>, allowing me to craft engaging and user-friendly interfaces.
                </p>
            </div>
        </section>
    )
}