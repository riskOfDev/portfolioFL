import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import emojis from "./readmos/emojis";

import ProjectsStyle from "../../styles/Projects.module.css";
import Image from "next/image";

const Project = ({ type, name, thumbnail, links }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setOpen(!open);
  };

  return (
    <>
      <Image
        width={500}
        height={500}
        alt={name}
        src={`/thumbnails/${thumbnail}`}
      />
      {Object.keys(links).map((link, index) => {
        if (link === "github") {
          return (
            <a
              key={name}
              href={links[link]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={60}
                height={60}
                alt="github"
                src="/icons/github.svg"
              />
            </a>
          );
        }
        if (link === "demo") {
          return (
            <a
              key={name}
              href={links[link]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={60} height={60} alt="demo" src="/icons/web-2.svg" />
            </a>
          );
        }
        if (link === "behance") {
          return (
            <a
              key={name}
              href={links[link]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={60}
                height={60}
                alt="behance"
                src="/icons/behance.svg"
              />
            </a>
          );
        }
        if (link === "figma") {
          return (
            <a
              key={name}
              href={links[link]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={60}
                height={60}
                alt="figma"
                src="/icons/figma.svg"
              />
            </a>
          );
        }
        return null; // Return null for other cases
      })}
      <h1>{type}</h1>
      <h2>{name}</h2>
    </>
  );
};

export default Project;
