import React from "react";
import ProjectReadmos from "../components/Projects/ProjectReadmos";
import Project from "../components/Projects/Project";
import styles from "../styles/ProjectsDef.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      type: "WEB DESIGN - Desktop & Mobile",
      name: '"PACKAPP"',
      thumbnail: "packapp.png",
      generalLink:
        "https://www.figma.com/file/KPZ2FHiWSbbh4YD6zAvS0l/PackApp?type=design&node-id=0%3A1&mode=design&t=UIaTJojDQ0e8sufg-1",
      links: {
        figma:
          "https://www.figma.com/file/KPZ2FHiWSbbh4YD6zAvS0l/PackApp?type=design&node-id=0%3A1&mode=design&t=UIaTJojDQ0e8sufg-1",
      },
    },
    {
      type: "WEB DESIGN",
      name: '"Gitano Tattoo Studio"',
      thumbnail: "gitano.png",
      generalLink:
        "https://www.figma.com/file/kBhHuVVpxNvRL68cRfLSC5/Gitano-club-tattoo%2FWeb-Design-FL?type=design&node-id=0%3A1&mode=design&t=EZhBTcoEDbgnFK0U-1 ",
      links: {
        figma:
          "https://www.figma.com/file/kBhHuVVpxNvRL68cRfLSC5/Gitano-club-tattoo%2FWeb-Design-FL?type=design&node-id=0%3A1&mode=design&t=EZhBTcoEDbgnFK0U-1 ",
      },
    },
    {
      type: "WEB DESIGN",
      name: "Andrea Finten - Landing Page",
      thumbnail: "andrea.png",
      generalLink:
        "https://www.figma.com/file/D3dxy5wCVJjPJd7u3VdaoQ/WEB-DESIGN%2FAndrea-Finten?type=design&node-id=0%3A1&mode=design&t=W3ZwQngN4AeAD6Pg-1",
      links: {
        figma:
          "https://www.figma.com/file/D3dxy5wCVJjPJd7u3VdaoQ/WEB-DESIGN%2FAndrea-Finten?type=design&node-id=0%3A1&mode=design&t=W3ZwQngN4AeAD6Pg-1",
      },
    },
    {
      type: "WEB DESIGN",
      name: "Portfolio FL",
      thumbnail: "portfoliofl.png",
      generalLink:
        "https://www.figma.com/file/2UfMk8uEUHJ11zWJAF3Mtx/Portfolio-FL|Web-Design?type=design&node-id=0%3A1&mode=design&t=RqovQxXFMRLi4KEj-1",
      links: {
        figma:
          "https://www.figma.com/file/2UfMk8uEUHJ11zWJAF3Mtx/Portfolio-FL|Web-Design?type=design&node-id=0%3A1&mode=design&t=RqovQxXFMRLi4KEj-1",
      },
    },
    {
      type: "WEB DESIGN",
      name: '"IPHONESHOP"',
      thumbnail: "iphone.png",
      generalLink:
        "https://www.figma.com/file/v9PO9HeB6eD8jJR4stFTlZ/IS-REDESIGN-2023?type=design&node-id=0-1&mode=design&t=Ri3w7Yc1nADmUZGd-0",
      links: {
        figma:
          "https://www.figma.com/file/v9PO9HeB6eD8jJR4stFTlZ/IS-REDESIGN-2023?type=design&node-id=0-1&mode=design&t=Ri3w7Yc1nADmUZGd-0",
      },
    },
    {
      type: "WEB RE-DESIGN",
      name: '"4CHAN"',
      thumbnail: "4chan.jpg",
      generalLink:
        "https://www.figma.com/proto/NXeJFcwO4JbLBZgOyitkCP/4CHAN-Redise%C3%B1o-web?page-id=105%3A3117&type=design&node-id=105-3198&viewport=-199%2C-174%2C0.13&t=PPU4r4zjaBXklwwg-1&scaling=scale-down&starting-point-node-id=105%3A3198&mode=design",
      links: {
        behance:
          "https://www.behance.net/gallery/175102161/Rediseno-Web-4chan-CASE-STUDY-UXUI/modules/988870445",
        figma:
          "https://www.figma.com/proto/NXeJFcwO4JbLBZgOyitkCP/4CHAN-Redise%C3%B1o-web?page-id=105%3A3117&type=design&node-id=105-3198&viewport=-199%2C-174%2C0.13&t=PPU4r4zjaBXklwwg-1&scaling=scale-down&starting-point-node-id=105%3A3198&mode=design",
      },
    },
    {
      type: "APP MOBILE DESIGN",
      name: '"Sannabis"',
      thumbnail: "sannabis.png",
      generalLink:
        "https://www.behance.net/gallery/158590459/Sannabis-UXUI-CODERHOUSE-2022/modules/894808519",
      links: {
        behance:
          "https://www.behance.net/gallery/158590459/Sannabis-UXUI-CODERHOUSE-2022/modules/894808519",
      },
    },
    {
      type: "WEB DESIGN",
      name: '"riskOfDev"',
      thumbnail: "riskofdev.png",
      generalLink:
        "https://www.figma.com/proto/7hePuj6Z27vbwQleybwv5C/riskofdev-redesign?type=design&node-id=676-179&t=Rx7djCqXTfixCR0e-0&scaling=scale-down-width&page-id=502%3A2&starting-point-node-id=676%3A179",
      links: {
        figma:
          "https://www.figma.com/proto/7hePuj6Z27vbwQleybwv5C/riskofdev-redesign?type=design&node-id=676-179&t=Rx7djCqXTfixCR0e-0&scaling=scale-down-width&page-id=502%3A2&starting-point-node-id=676%3A179",
      },
    },
    {
      type: "APP MOBILE DESIGN",
      name: '"Ta-Da"',
      thumbnail: "ta-da2.png",
      generalLink:
        "https://www.behance.net/gallery/175260267/TA-DA-Rediseno-de-App/modules/989781487",
      links: {
        behance:
          "https://www.behance.net/gallery/175260267/TA-DA-Rediseno-de-App/modules/989781487",
      },
    },
    {
      type: "GRAPHIC DESIGN - BRAND IDENTITY",
      name: "Domus",
      thumbnail: "domus.png",
      generalLink:
        "https://drive.google.com/drive/folders/1cy7WUJh5ocK969ZOGvT470T6srrnM5pO?usp=sharing",
      links: {
        behance:
          "https://drive.google.com/drive/folders/1cy7WUJh5ocK969ZOGvT470T6srrnM5pO?usp=sharing",
      },
    },
    {
      type: "LOGO",
      name: "Lautaro Caniza DJ",
      thumbnail: "lautaro.png",
    },
    {
      type: "LOGO",
      name: "Space DJ",
      thumbnail: "space.png",
    },
    {
      type: "LOGO",
      name: "Destap! Web Service",
      thumbnail: "destap.png",
    },
    {
      type: "FLYER PRESS KIT",
      name: "Lucio Andrés DJ Press Kit",
      thumbnail: "lucio.png",
    },
    {
      type: "FLYER",
      name: "Techno Sessions",
      thumbnail: "technosessions.png",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div
        ref={ref}
        className={styles.titles}
        style={{
          textAlign: "center",
          fontSize: "36px",
          paddingBottom: "60px",
        }}
        id="projects"
      >
        <motion.h1
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          MY PROJECTS
        </motion.h1>
        <motion.h2
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          CHECK OUT MY WORK
        </motion.h2>
      </div>
      {projects.map((project, index) => (
        <Project
          key={index}
          number={index + 1}
          type={project.type}
          name={project.name}
          thumbnail={project.thumbnail}
          links={project.links}
          generalLink={project.generalLink}
        />
      ))}
    </>
  );
};

export default Projects;
