import React from "react"
import LinkIcon from "@mui/icons-material/Link"

const AccordionLinks = ({ links }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {links.map(link => (
        <div
          key={link.name}
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "0.5rem",
          }}
        >
          <LinkIcon />
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ paddingLeft: "0.5rem" }}
          >
            {link.name}
          </a>
        </div>
      ))}
    </div>
  )
}

export default AccordionLinks
