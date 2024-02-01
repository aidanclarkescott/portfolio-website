import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./main-content.css"
import Accordion from "./accordion"

const projects = {
  project1: {
    title: "Personal Finance Application",
    infoItems: [
      "Using Java, built budget application to track expenses & manage a stock portfolio with real-time data.",
      "Implemented a GUI using the Swing Library, a thorough JUnit test suite, and key design patterns.",
    ],
  },
  project2: {
    title: "The Odin Project",
    infoItems: [
      "Contributed to the Odin Project's GitHub repository, learned various languages/frameworks, Git workflow and best coding practices to construct public-facing web applications.",
    ],
  },
  project3: {
    title: "Insight UBC",
    infoItems: [
      "Made a full stack web app that allows users to intuitively query data about UBC courses and rooms.",
      "Built a custom query language parser that executed queries on parsed JSON and HTML files, and a backend in TypeScript with Express to serve data to a user-friendly frontend built with React.",
    ],
  },
  project4: {
    title: "Full Stack Open",
    infoItems: [
      "Learned Full Stack web development and built a full stack blog list application using the MERN stack.",
      "Employed Node, Express and MongoDB to build a REST backend that supported necessary endpoints.",
      "Created an attractive SPA frontend for the blog list app using React, Redux, Axios, and MaterialUI.",
      "Learned GraphQL, TypeScript, and React Native, built projects with each of the technologies.",
    ],
    links: [{ name: "Full Stack Open", url: "https://fullstackopen.com/en/" }],
  },
  hsbc: {
    title: "HSBC Virtual Office Project",
    infoItems: [
      "Collectively developed a virtual office platform for HSBC, utilizing TypeScript and React for the frontend, and serverless AWS Lambda and DynamoDB for the backend.",
      "Managed the project, coordinating front/backend teams, ensuring alignment with client specifications.",
      "Authored the user guide, planning and use case documentation, presented the final project to HSBC.",
    ],
    links: [
      {
        name: "Git Repo",
        url: "https://github.com/aidanclarkescott/HSBC-Team-Vision-Root",
      },
      {
        name: "User Guide",
        url: "https://drive.google.com/file/d/1GZ_drhTiLNzTUNII5x6GLjRA-G3bU4BA/view?usp=sharing",
      },
    ],
  },
}

const Projects = ({ expanded, handleChange }) => {
  return (
    <>
      <h1>Projects</h1>

      <Accordion
        info={projects.hsbc}
        expanded={expanded}
        handleChange={handleChange}
        icon={
          <StaticImage
            src={"../images/icons/hsbc-icon.png"}
            alt="hsbc-icon"
            placeholder="blurred"
            height={24}
            width={24}
          />
        }
      >
        <StaticImage
          src={"../images/hsbc/hsbc-office.png"}
          alt="hsbc-office"
          placeholder="blurred"
          className="image"
        />
        <StaticImage
          src={"../images/hsbc/hsbc-groups.png"}
          alt="hsbc-groups"
          placeholder="blurred"
          className="image"
        />
        <StaticImage
          src={"../images/hsbc/hsbc-favourites.png"}
          alt="hsbc-favourites"
          placeholder="blurred"
          className="image"
        />
        <StaticImage
          src={"../images/hsbc/hsbc-calendar.png"}
          alt="hsbc-calendar"
          placeholder="blurred"
          className="image"
        />
      </Accordion>

      <Accordion
        info={projects.project4}
        expanded={expanded}
        handleChange={handleChange}
        icon={
          <StaticImage
            src={"../images/icons/full-stack-open-icon.jpeg"}
            alt="full-stack-open-icon"
            placeholder="blurred"
            height={24}
            width={24}
          />
        }
      />

      <Accordion
        info={projects.project3}
        expanded={expanded}
        handleChange={handleChange}
        icon={
          <StaticImage
            src={"../images/icons/ubc-icon.png"}
            alt="ubc-icon"
            placeholder="blurred"
            height={23}
          />
        }
      />

      <Accordion
        info={projects.project2}
        expanded={expanded}
        handleChange={handleChange}
        icon={
          <StaticImage
            src={"../images/icons/odin-project-icon.png"}
            alt="odin-project-icon"
            placeholder="blurred"
            height={26}
          />
        }
      />

      <Accordion
        info={projects.project1}
        expanded={expanded}
        handleChange={handleChange}
        icon={
          <StaticImage
            src={"../images/icons/ubc-icon.png"}
            alt="ubc-icon"
            placeholder="blurred"
            height={23}
          />
        }
      />
    </>
  )
}

export default Projects
