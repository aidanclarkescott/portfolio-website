import React from "react"
import { styled } from "@mui/material/styles"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import AccordionLinks from "./accordion-links"
import AccordionInfo from "./accordion-info"

import "./main-content.css"

const AccordionComponent = styled(props => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  width: "75%",
  "@media (max-width: 768px)": {
    width: "100%",
  },
}))

const AccordionSummary = styled(props => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    // Styling options for alternate expand icon
    //   flexDirection: "row-reverse",
    //   "& .MuiAccordionSummary-expandIconWrapper": {
    //     transform: "rotate(-90deg)",
    //   },
    //   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    //     transform: "rotate(0deg)",
    //   },
    "& .MuiAccordionSummary-content": {
      gap: "16px",
      alignItems: "center",
      // width: "100%",
      // display: "flex",
      // justifyContent: "space-between",
    },
  })
)

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

const Accordion = ({ children, info, expanded, handleChange, icon }) => {
  return (
    <AccordionComponent
      expanded={expanded === info.title}
      onChange={() => handleChange(info.title)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${info.title}-content`}
        id={`${info.title}-header`}
      >
        <div
          style={{
            width: "1.5rem",
            height: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </div>

        {info.company ? (
          <p>
            <strong>{info.company}</strong> - {info.title}
          </p>
        ) : (
          <p>
            <strong>{info.title}</strong>
          </p>
        )}

        {info.dateRange && (
          <span style={{ marginLeft: "auto", paddingRight: "0.5rem" }}>
            {info.dateRange}
          </span>
        )}
      </AccordionSummary>

      <AccordionDetails>
        <div
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          {info.description && (
            <p style={{ paddingBottom: "1rem" }}>{info.description}</p>
          )}

          <AccordionInfo infoItems={info.infoItems} />

          {info.links && <AccordionLinks links={info.links} />}

          {children && <div className="image-grid">{children}</div>}
        </div>
      </AccordionDetails>
    </AccordionComponent>
  )
}

export default Accordion

// style={{
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-between",
// }}
