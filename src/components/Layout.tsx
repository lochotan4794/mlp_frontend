import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      {/* <h1>Machine Learning Practices</h1>
      <div><p>Practical Knownledge in Machine Learning</p><button>Login</button></div> */}
      <nav style={{backgroundColor:"#384b37"}}>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/users">Users List</Link> |{' '}
        <Link href="/posts">Posts List</Link> |{' '}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <div
        className="container"
        style={{
          color: "white",
          bottom: "0",
          height: "fit-content",
          width: "100%",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "14px",
          backgroundColor: "#384b37",
        }}
      >
        Email: htanloc994@gmail.com
      </div>
      <div
        className="container"
        style={{
          color: "white",
          bottom: "0",
          height: "fit-content",
          backgroundColor: "#384b37",
          width: "100%",
          alignItems: "center",
        }}
      >
        <a className="footer-section" href="/privacy">LinkedIn | </a>
        <a className="footer-section" href="/disclaimer">Twitter | </a>
        <a className="footer-section" href="/terms">Facebook | </a>
        <a className="footer-section" href="/terms">Newsletter | </a>
        <a className="footer-section" href="/terms">RSS | </a>
      </div>
      <div style={{
        color: "white", fontWeight: "bold", backgroundColor: "#384b37",
      }}>Copyright © 2023 Machine Learning Practices</div>
    </footer>
  </div>
)

export default Layout
