import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div style={{
    position: "relative",
    height: '75vh',
  }}>
    <div style={{
      position: "absolute",
      height: '75vh',
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      width: '100vw',
      background: 'blue',
    }}>
    </div>
    <div
      style={{
        position: "absolute",
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
        height: '75vh',
        width: '100vw',
        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
      }}
    >

      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >

            <br />
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  </div>

)

export default Header
