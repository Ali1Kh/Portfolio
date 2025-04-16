import React from "react";
import "./overview.css";
import { Helmet } from "react-helmet";
import Info from "../Info/Info";
import Services from "../Services/Services";
import CertificatedIn from "../certificatedIn/CertificatedIn";
import LatestProjects from "../LatestProjects/LatestProjects";
import About from "../About/About";
import ContactOverView from "../contact/ContactOverView";
import ResumeTimeLine from "../ResumeTimeLine/ResumeTimeLine";
import Skills from "../Skills/Skills";
import Analytics from "../Analytics/Analytics";

export default function Overview() {
  return (
    <>
      <Helmet>
        <title>Ali Elsaadany</title>
        <meta
          name="description"
          content="Overview of Ali K. Elsaadany : Full Stack Web Developer building seamless web experiences with proficiency in the MERN stack. Proficient in front-end technologies like HTML, CSS, JavaScript, React.js, and back-end development with Node.js, Express.js and MongoDB. Passionate about creating user friendly and visually appealing and functional web applications."
        />
        <meta property="og:title" content="Ali K. Elsaadany Portfolio" />
        <meta
          property="og:description"
          content="A Full Stack Web Developer building seamless web experiences with proficiency in the MERN stack. Proficient in front-end technologies like HTML, CSS, JavaScript, React.js, and back-end development with Node.js, Express.js and MongoDB. Passionate about creating user friendly and visually appealing and functional web applications."
        />
      </Helmet>
      <About />
      <ResumeTimeLine />
      <Skills />
      <LatestProjects />
      <Info />
      <Services />
      <Analytics />
      <CertificatedIn />
      <ContactOverView />
    </>
  );
}
