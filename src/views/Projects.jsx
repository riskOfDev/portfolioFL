import React from "react";
import ProjectReadmos from "../components/Projects/ProjectReadmos";
import Project from "../components/Projects/Project";

const Projects = () => {
  const projects = [
    {
      type: "APP MOBILE DESIGN",
      name: '"Sannabis"',
      thumbnail: "sannabis.png",
      links: {
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
    {
      type: "WEB DESIGN",
      name: '"riskOfDev"',
      thumbnail: "riskofdev.png",
      links: {
        github: "https://www.google.com",
        demo: "https://www.google.com",
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
    {
      type: "APP MOBILE DESIGN",
      name: '"Ta-Da"',
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
        <Project
          key={index}
          number={index + 1}
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
