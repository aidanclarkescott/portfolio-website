import React from "react"

const AccordionInfo = ({ infoItems }) => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1.25rem",
        paddingLeft: "1.3rem",
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      {infoItems.map(item => {
        return typeof item === "string" || item instanceof String ? (
          <li key={item}>{item}</li>
        ) : (
          <>
            <li key={item.mainPoint}>{item.mainPoint}</li>
            {item.subPoints.map(subPoint => (
              <li key={subPoint} style={{ marginLeft: "40px" }}>
                {subPoint}
              </li>
            ))}
          </>
        )
      })}
    </ul>
  )
}

export default AccordionInfo
