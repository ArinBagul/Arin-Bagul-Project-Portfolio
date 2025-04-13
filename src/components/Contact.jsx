import React, { useRef } from "react"
import "../style/contact.css"


export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d0qm1bq', 'template_884430v', form.current, 'yHIbdpNsJNAknbBoY')
            .then((result) => {
                const contactForm = document.getElementById("contact-form")
                const contactMsg = document.getElementById("contact-thankyou")
                contactForm.style.display = "none"
                contactMsg.style.display = "block"

                alert("Message sent successfully! please RELOAD the page")
                console.log(result.text);
            }, (error) => {
                alert("Failed to send the message! Please try again after sometime.")
                console.log(error.text);
            });
    };


    return (
        <div className="contact-container" id="contact">
            <div className="contact-content">
                <h3 className="contact-t">Contact <span>Me</span></h3>
                <p className="contact-p">Hey! Recruiters and Collaborators, please feel free to reach me out. 😃</p>
            </div>
            <div className="contact-thankyou" id="contact-thankyou">
                <p>Message sent successfully! Please reload the page to continue.</p>
            </div>
            <div className="contact-form" id="contact-form">
                <form name="contact" ref={form} onSubmit={sendEmail}>
                    <input className="input-el" type="text" placeholder="Full Name" name="name" />
                    <input className="input-el" type="email" placeholder="Email Address" name="email" />
                    <textarea className="input-el" name="message" cols="30" rows="5" placeholder="I want to say something..."></textarea>
                    <input className="primary-btn submit-btn" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}