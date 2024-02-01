import React from "react"
import Tooltip from "@mui/material/Tooltip"

const BottomArrowTooltip = ({ children, title, offset }) => {
  return (
    <Tooltip
      title={title}
      arrow
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, offset],
              },
            },
          ],
        },
      }}
    >
      {children}
    </Tooltip>
  )
}

export default BottomArrowTooltip
