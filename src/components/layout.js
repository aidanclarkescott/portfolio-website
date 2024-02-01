import * as React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <body
      style={{
        margin: `0 auto`,
        // maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
    >
      {children}
    </body>
  )
}

export default Layout
