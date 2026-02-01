import React from "react";
import reactIcon from "../../imgs/tech/react.png";
import javascriptIcon from "../../imgs/tech/javascript.png";
import nextjsIcon from "../../imgs/tech/nextjs.png";
import reduxIcon from "../../imgs/tech/redux.png";
import jqueryIcon from "../../imgs/tech/jquery.png";
import bootstrapIcon from "../../imgs/tech/bootstrap.png";
import htmlIcon from "../../imgs/tech/html.png";
import cssIcon from "../../imgs/tech/css.png";
import sassIcon from "../../imgs/tech/sass.png";
import nodejsIcon from "../../imgs/tech/nodejs.png";
import typescriptIcon from "../../imgs/tech/typescript.png";
import expressIcon from "../../imgs/tech/express.png";
import mongoIcon from "../../imgs/tech/mongo.png";
import mysqlIcon from "../../imgs/tech/mysql.png";
import nestIcon from "../../imgs/tech/nest.png";
import socketIcon from "../../imgs/tech/socket.png";
import graphqlIcon from "../../imgs/tech/graphql.png";
import dockerIcon from "../../imgs/tech/docker.png";
import javaIcon from "../../imgs/tech/java.png";
import plsqlIcon from "../../imgs/tech/plsql.png";

export default function Skills() {
  const skillIcons = {
    "react": reactIcon,
    "javascript": javascriptIcon,
    "nextjs": nextjsIcon,
    "redux": reduxIcon,
    "jquery": jqueryIcon,
    "bootstrap": bootstrapIcon,
    "html": htmlIcon,
    "css": cssIcon,
    "sass": sassIcon,
    "nodejs": nodejsIcon,
    "typescript": typescriptIcon,
    "express": expressIcon,
    "mongo": mongoIcon,
    "mysql": mysqlIcon,
    "nest": nestIcon,
    "socket": socketIcon,
    "graphql": graphqlIcon,
    "docker": dockerIcon,
    "java": javaIcon,
    "plsql": plsqlIcon,
  };

  let skills = [
    { skill: "React", icon: "react" },
    { skill: "JavaScript", icon: "javascript" },
    { skill: "Next.js", icon: "nextjs" },
    { skill: "Redux", icon: "redux" },
    { skill: "jQuery", icon: "jquery" },
    { skill: "Bootstrap", icon: "bootstrap" },
    { skill: "HTML", icon: "html" },
    { skill: "CSS", icon: "css" },
    { skill: "Sass", icon: "sass" },
    { skill: "Node.js", icon: "nodejs" },
    { skill: "TypeScript", icon: "typescript" },
    { skill: "Express", icon: "express" },
    { skill: "MongoDB", icon: "mongo" },
    { skill: "MySQL", icon: "mysql" },
    { skill: "NestJS", icon: "nest" },
    { skill: "Socket.IO", icon: "socket" },
    { skill: "GraphQL", icon: "graphql" },
    { skill: "Docker", icon: "docker" },
    { skill: "Java", icon: "java" },
    { skill: "PL/SQL", icon: "plsql" },
  ];
  return (
    <div className="secBg pb-5 py-2 my-5 mt-3">
      <div className="container">
        <div className="sectionTitle text-center primaryText my-4">
          <h2>Technical Skills</h2>
        </div>
        <div className="row gy-3">
          {skills.map((skill, idx) => (
            <div data-aos="flip-left" className="col-4 col-md-3" key={idx}>
              <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
                <img
                  src={skillIcons[skill.icon]}
                  title={skill.skill}
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
                  className="skillIcon rounded-3"
                />
                <h6 className="text-center mt-2">{skill.skill}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
