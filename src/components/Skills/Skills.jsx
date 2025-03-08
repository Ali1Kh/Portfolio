import React from "react";

export default function Skills() {
  let skills = [
    { skill: "React", icon: "react.png" },
    { skill: "JavaScript", icon: "javascript.png" },
    { skill: "Next.js", icon: "nextjs.png" },
    { skill: "Redux", icon: "redux.png" },
    { skill: "jQuery", icon: "jquery.png" },
    { skill: "Bootstrap", icon: "bootstrap.png" },
    { skill: "HTML", icon: "html.png" },
    { skill: "CSS", icon: "css.png" },
    { skill: "Sass", icon: "sass.png" },
    { skill: "Node.js", icon: "nodejs.png" },
    { skill: "TypeScript", icon: "typescript.png" },
    { skill: "Express", icon: "express.png" },
    { skill: "MongoDB", icon: "mongo.png" },
    { skill: "MySQL", icon: "mysql.png" },
    { skill: "NestJS", icon: "nest.png" },
    { skill: "Socket.IO", icon: "socket.png" },
    { skill: "GraphQL", icon: "graphql.png" },
    { skill: "Docker", icon: "docker.png" },
    { skill: "Java", icon: "java.png" },
    { skill: "PL/SQL", icon: "plsql.png" },
  ];
  return (
    <div className="secBg pb-5 py-2 my-5 mt-3">
      <div className="container">
        <div className="sectionTitle text-center primaryText my-4">
          <h2>Technical Skills</h2>
        </div>
        <div className="row gy-3">
          {skills.map((skill, idx) => (
            <div data-aos="flip-left" className="col-4 col-md-3">
              <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
                <img
                  src={require(`../../imgs/tech/${skill.icon}`)}
                  title={skill.skill}
                  key={idx}
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
