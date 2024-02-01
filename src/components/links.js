import React from "react"
import Link from "@mui/material/Link"
import ContactPageIcon from "@mui/icons-material/ContactPage"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import BottomArrowTooltip from "./bottom-arrow-tooltip"
import IconButton from "@mui/material/IconButton"
import "./main-content.css"
import { withPrefix } from "gatsby"

const Links = ({ handleEmailAlert }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "4rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <BottomArrowTooltip title="Resume" offset={-11}>
        <Link
          href={withPrefix("/resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactPageIcon style={{ color: "black", fontSize: "1.8rem" }} />
        </Link>
      </BottomArrowTooltip>

      <BottomArrowTooltip title="GitHub" offset={-11}>
        <Link
          href="https://github.com/aidanclarkescott"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon style={{ color: "black", fontSize: "1.8rem" }} />
        </Link>
      </BottomArrowTooltip>

      <BottomArrowTooltip title="Linkedin" offset={-13}>
        <Link
          href="https://www.linkedin.com/in/aidan-clarke-scott/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon style={{ color: "black", fontSize: "1.8rem" }} />
        </Link>
      </BottomArrowTooltip>

      <BottomArrowTooltip title="Copy Email to Clipboard" offset={-14}>
        <IconButton
          onClick={handleEmailAlert}
          className="icon-button-invis-background email-copy-icon-button"
          disableRipple={true}
        >
          <EmailIcon style={{ color: "black", fontSize: "1.8rem" }} />
        </IconButton>
      </BottomArrowTooltip>
    </div>
  )
}

export default Links
