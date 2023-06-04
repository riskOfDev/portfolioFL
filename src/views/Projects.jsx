import React from "react";
import ProjectReadmos from "../components/Projects/ProjectReadmos";
import Project from "../components/Projects/Project";

const Projects = () => {
  const projects = [
    {
      type: "APP MOBILE DESIGN",
      name: "Sannabis",
      thumbnail: "sannabis.png",
      links: {
        github: "https://www.google.com",
        demo: "https://www.google.com",
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
    {
      type: "WEB DESIGN",
      name: "riskOfDev",
      thumbnail: "sannabis.png",
      links: {
        github: "https://www.google.com",
        demo: "https://www.google.com",
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
    {
      type: "APP MOBILE DESIGN",
      name: "Ta-Da",
      thumbnail: "ta-da.png",
      links: {
        github: "https://www.google.com",
        demo: "https://www.google.com",
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
  ];

  return (
    <>
      <h1>MY PROJECTS</h1>
      <h2>CHECK OUT MY WORK</h2>
      {projects.map((project, index) => (
        // <ProjectReadmos
        //   key={index}
        //   name={project.name}
        //   description={project.description}
        //   link={project.link}
        // />
        <Project
          key={index}
          type={project.type}
          name={project.name}
          thumbnail={project.thumbnail}
          links={project.links}
        />
      ))}
    </>
  );
};

export default Projects;
