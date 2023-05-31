import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import emojis from "./readmos/emojis";

import ProjectsStyle from "../../styles/Projects.module.css";

const Project = ({ username, repoName, name, description, link }) => {
  const [clean, setClean] = useState("");

  useEffect(() => {
    const emojisObject = emojis;

    const username2 = "axelromero99";
    const userURL = `https://api.github.com/users/${username2}/repos`;

    getRepos(userURL);

    async function getRepos(userURL) {
      const response = await fetch(userURL);
      const result = await response.json();

      console.log(result);

      let rawURL = result[0].html_url + "/master/README.md";
      rawURL = [rawURL.slice(0, 8), "raw.", rawURL.slice(8)].join("");
      rawURL = rawURL.replace("github", "githubusercontent");

      console.log(rawURL);

      fetchReadme(rawURL);
    }

    async function fetchReadme(url) {
      const response = await fetch(url);
      const text = await response.text();

      let dirty = marked.parse(text);
      dirty = replaceIcons(dirty);
      let clean = DOMPurify.sanitize(dirty);

      setClean(clean);
    }

    function replaceIcons(dirty) {
      const regexp = RegExp(":([a-zA-Z1-9_+-]*):", "g");
      let dirtyCopy = dirty;
      let matches;

      while ((matches = regexp.exec(dirtyCopy)) !== null) {
        const shortcode = matches[0];
        const word = matches[1];

        if (Object.keys(emojisObject).includes(word)) {
          const emojiUnicode = emojisObject[word];
          dirtyCopy = dirtyCopy.replace(shortcode, emojiUnicode);
        }
      }

      return dirtyCopy;
    }
  }, []);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className={ProjectsStyle.markdownbody}>
      <button onClick={handleClick}>Readme</button>
      {/* Result */}

      <div
        dangerouslySetInnerHTML={{
          __html: clean,
        }}
        className="markdownbody"
      />
    </div>
  );
};

export default Project;
