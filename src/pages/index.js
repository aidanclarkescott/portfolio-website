import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Links from "../components/links"
import WorkExperience from "../components/experience"
import Projects from "../components/projects"
import {
  center,
  subHeading,
  emailCopyAlert,
  errorEmailCopyAlert,
  emailCopyAlertMobile,
} from "./index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Alert from "@mui/material/Alert"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"

const EMAIL = "clarkescotta@gmail.com"

const IndexPage = () => {
  const [expanded, setExpanded] = useState(false)
  const [showEmailCopiedAlert, setShowEmailCopiedAlert] = useState(false)
  const [showEmailCopyError, setShowEmailCopyError] = useState(false)

  const handleChange = panel => {
    setExpanded(panel !== expanded ? panel : false)
  }

  const handleEmailAlert = () => {
    console.log(process.env.NODE_ENV)
    if (showEmailCopiedAlert || showEmailCopyError) return

    copyToClipboard(EMAIL)
  }

  const copyToClipboard = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowEmailCopiedAlert(true)
        setTimeout(() => setShowEmailCopiedAlert(false), 5000)
      })
      .catch(err => {
        setShowEmailCopyError(true)
        setTimeout(() => setShowEmailCopyError(false), 5000)
      })
  }

  return (
    <Layout>
      <header className={center}>
        <StaticImage
          src={"../images/jade-forest.jpg"}
          alt="forest"
          placeholder="blurred"
          height={300}
          style={{ borderRadius: "10px" }}
        />
        <h1 style={{ paddingTop: "1.5rem" }}>Hi, I'm Aidan.</h1>
        <p style={{ textAlign: "center" }}>
          A software developer passionate about front-end technologies.
        </p>
        {/* <p className={subHeading}>No, I don't like CSS. Why do you ask?</p> */}
        <p className={subHeading}>UBC Computer Science graduate.</p>

        <Links handleEmailAlert={handleEmailAlert} />
      </header>

      <main style={{ maxWidth: "54rem", margin: "0 auto" }}>
        <div className={center}>
          <WorkExperience expanded={expanded} handleChange={handleChange} />
        </div>

        <div className={center}>
          <Projects expanded={expanded} handleChange={handleChange} />
        </div>
      </main>

      {showEmailCopiedAlert && (
        <Alert
          icon={<ContentPasteIcon fontSize="inherit" />}
          severity="success"
          className={`${emailCopyAlert} ${emailCopyAlertMobile}`}
        >
          Email copied to clipboard.
        </Alert>
      )}

      {showEmailCopyError && (
        <Alert
          severity="error"
          className={`${errorEmailCopyAlert} ${emailCopyAlertMobile}`}
        >
          Unable to copy email to clipboard.
        </Alert>
      )}
    </Layout>
  )
}

export const Head = () => <Seo title="Aidan Clarke Scott" />

export default IndexPage

// DONE - 1. Work on accordionActionsClasses, try moving arrow to left side and add icon
// DONE - 1.5. Fix yaltysoft icon (bigger), and sort out extra top padding on bullet points
// DONE - 2. Add additional information (projects)
// DONE - 3. Host PDF and get email copy working
// 4. Edit/add info to accordions (pictures to yaltysoft, detail to later, pictures to personal finance, odin, and maybe FSO)
// DONE - 5. settle on picture
// 6. Try to get domain name and ssl
// DONE - 7. Add date ranges for work experience
// DONE - 8. Maybe add tooltip for other links
// 9. Figure out why resume pdf isn't working
// 10. Fix outer body element
