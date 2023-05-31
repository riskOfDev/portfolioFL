import React from "react";
import Project from "../components/Projects/Project";

const Projects = () => {
  // list of projects ( refactor to integration with readmos )
  const projects = [
    {
      name: "Project 1",
      description: "This is a project",
      link: "https://www.google.com",
    },
    {
      name: "Project 2",
      description: "This is a project",
      link: "https://www.google.com",
    },
    {
      name: "Project 3",
      description: "This is a project",
      link: "https://www.google.com",
    },
  ];

  return (
    <>
      <div>Projects</div>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </>
  );
};

export default Projects;
