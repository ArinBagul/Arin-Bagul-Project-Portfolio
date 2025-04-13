import React , { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech_section"
import Projects from "./components/Projects"
import Divider from "./components/Divider"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

import "./app.css"
import "./style/responsive/phone.css"

export default function App() {

  const [showContact, setShowContact] = useState(false);

  // console.log(showContact)

  const handleContactClick = () => {
    setShowContact(!showContact);
  }

  return(
    <>
      <Navbar onClickContact={handleContactClick} />
      {showContact && <Contact />}
      <Hero />
      <Tech />
      <Projects />
      <Blog />

      <Footer />
    </>
  )
}