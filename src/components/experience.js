import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./main-content.css"
import Accordion from "./accordion"

const experiences = {
  experience1: {
    company: "Yalty Software",
    title: "Mobile App Developer",
    dateRange: "Sept 2020 - Apr 2021",
    infoItems: [
      "Learned Unity and C# in 3 weeks and single-handedly maintained and developed the company's flagship mobile children's game, publishing it to the Apple App Store and Testflight.",
      "Developed 40+ new minigames, built 3 new game worlds, and overhauled player movement & UI.",
      "Created interactive user dashboards in Unity with the ability to dynamically view and modify account information by sending and receiving data through custom API endpoints, parsing JSON files.",
      "Wrote a custom Unity learning path and oversaw the onboarding and agendas of two junior developers, planned/coordinated work, and led meetings.",
    ],
    links: [
      { name: "Roam Game Website", url: "https://playroamgame.com/" },
      {
        name: "Roam Game App Store Page",
        url: "https://apps.apple.com/ca/app/roam-game/id1542826083?platform=iphone",
      },
      {
        name: "YaltySoft Vendor Dashboard App Store Page",
        url: "https://apps.apple.com/us/app/yaltysoft-vendor-dashboard/id1549058040?platform=iphone",
      },
    ],
  },
  experience2: {
    company: "Later",
    title: "Junior Front-End Developer",
    dateRange: "May - Dec 2022",
    infoItems: [
      "Contributed to two internal teams focused on Later's primary social media scheduling functionality and the Link-in bio feature.",
      "Expanded frontend framework expertise through internal engineering tasks like updating JavaScript EmberJS components to new Ember Octane Glimmer components in TypeScript.",
      "Implemented new features, such as a 'Recent vs. Top' Instagram hashtag dropdown for the app's collect media functionality, which integrated Instagram's API to fetch real-time hashtag data.",
      "Collaboratively delivered a new account upgrade path from wireframes, impacting the entire Linkin.bio app and reaching a large portion of the user base.",
      {
        mainPoint:
          "Pioneered a Google Calendar integration for the Later Calendar, encompassing authentication, Google API data retrieval, and seamless data integration using EmberJS.",
        subPoints: [
          "Single-handedly researched, documented and developed a fully functional prototype of the integration over 6 months while enhancing functionality and user experience. Outlined future development plan and wrote detailed tech spec and user guide.",
          "Configured Google account auth for SSO, fetching events from the Google Calendar API, parsing JSON data, performing data sanitization, and integrating data with the Later Calendar event Pipeline.",
          "Dealt with dynamic date range event fetching as users navigated through the calendar, cached events and settings to reduce network overhead, transformed and filtered data and finally implemented rough drafts of wireframes and styling to produce finished product.",
        ],
      },
    ],
    links: [{ name: "Later Website", url: "https://later.com/" }],
  },
}

const WorkExperience = ({ expanded, handleChange }) => {
  return (
    <>
      <h1>Experience</h1>

      <Accordion
        info={experiences.experience2}
        expanded={expanded}
        handleChange={handleChange}
        icon={
          <StaticImage
            src={"../images/icons/later-icon.png"}
            alt="later-icon"
            placeholder="blurred"
            height={24}
            width={24}
          />
        }
      />

      <Accordion
        info={experiences.experience1}
        expanded={expanded}
        handleChange={handleChange}
        icon={
          <StaticImage
            src={"../images/icons/yaltysoft-icon.png"}
            alt="yaltysoft-icon"
            placeholder="blurred"
            height={24}
            width={24}
          />
        }
      >
        <StaticImage
          src={"../images/yaltysoft/roam-title.jpg"}
          alt="roam-title"
          placeholder="blurred"
          className="image"
        />
        <StaticImage
          src={"../images/yaltysoft/roam-worlds.jpg"}
          alt="roam-worlds"
          placeholder="blurred"
          className="image"
        />
        <StaticImage
          src={"../images/yaltysoft/vendor-dashboard-login.jpg"}
          alt="vendor-dashboard-login"
          placeholder="blurred"
        />
        <StaticImage
          src={"../images/yaltysoft/vendor-dashboard-main-screen.jpg"}
          alt="vendor-dashboard-main-screen"
          placeholder="blurred"
        />
      </Accordion>
    </>
  )
}

export default WorkExperience
