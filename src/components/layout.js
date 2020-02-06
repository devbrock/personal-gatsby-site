import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header


    const navbar = (
      <div>
        <div style={{ marginTop: '0', fontFamily: "Montserrat", padding: '1rem 1rem', fontWeight: '500', }}>
          <ul style={{ listStyle: 'none', display: 'flex'}}>
            <li><Link to={`/`} style={{boxShadow: 'none', textDecoration: 'underline',  color: 'inherit'}}>Home</Link></li>
          </ul>
        </div>
      </div>
    )


    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    }
    else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <Wrapper>
        <div> {navbar} </div>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: '900px',
              padding: '1em 1.5em',
              minHeight: '90vh'
            }}
          >
            <header>{header}</header>
            <main style={{ fontFamily: 'Montserrat' }}>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()} Brock Balducci
        </Footer>
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  font-family: 'Montserrat'
`

export default Layout
