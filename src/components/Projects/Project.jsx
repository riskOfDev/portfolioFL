import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import emojis from "./readmos/emojis";

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
      const regexp = RegExp(":[a-zA-Z1-9_+-]*:", "g");
      let dirtyCopy = dirty;
      let word;
      let ocurrency;

      while ((ocurrency = regexp.exec(dirty)) !== null) {
        word = ocurrency[0].slice(1, -1);

        if (Object.keys(emojisObject).includes(word)) {
          let emojiHTML = `<img class="githubEmoji" src="${emojisObject[word]}"></img>`;
          dirtyCopy = dirtyCopy.replace(/\:[a-zA-Z_]*\:/, emojiHTML);
        }
      }

      return dirtyCopy;
    }
  }, []);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div className="readmosWrapper" id={``}></div>
      <button onClick={handleClick}>Readme</button>
      {/* Result */}

      <div
        dangerouslySetInnerHTML={{
          __html: clean,
        }}
      />
    </div>
  );
};

export default Project;
