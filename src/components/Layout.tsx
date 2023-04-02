import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navstyles from '@/styles/Nav.module.css'
import Navbar from './Nav/Navbar'
import UseModal from './useModal'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Machine Learning Pracices' }: Props) => (
  <>
    <div className='header-container container' style={{paddingLeft:"5%", paddingRight:"5%"}}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />

      </Head>
      <header>
        <div className='header-top'>
          <div style={{ width: "100%" }}>
            <a style={{ textDecoration: "unset" }} href='/'>
              <h2 className='NamePage'>Machine Learning Practices</h2>
            </a>
            <p>Practical Knownledge in Machine Learning</p>
          </div>
          <UseModal />
        </div>
        <Navbar />
      </header></div>
    <div className="container" style={{paddingLeft:"5%", paddingRight:"5%"}}>
      {children}
      <footer style={{ backgroundColor: "#f5f5f7", paddingLeft:"10%", paddingRight:"10%" }}>
        <div
          className="container"
          style={{
            bottom: "0",
            height: "fit-content",
            width: "100%",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            paddingTop:"0.8rem"
          }}
        >
          Email: htanloc994@gmail.com
        </div>
        <div
          className="container-footer"
          style={{
            bottom: "0",
            height: "fit-content",
            width: "100%",
            alignItems: "center",
          }}
        >
          <a className="footer-section" href="/privacy">LinkedIn | </a>
          <a className="footer-section" href="/disclaimer">Twitter | </a>
          <a className="footer-section" href="/terms">Facebook | </a>
          <a className="footer-section" href="/terms">Newsletter | </a>
          <a className="footer-section" href="/terms">RSS</a>
        </div>
        <ul
          className="container-footer"
          style={{
            bottom: "0",
            height: "fit-content",
            width: "100%",
            alignItems: "center",
          }}>
          <li className='ac-gf-sosumi-li'> This website was found with purpose sharing knowledge about machine learning field from clearly explanation to practical real world application.
          </li>
          <li className='ac-gf-sosumi-li'>
            I hope if my works and research can deliver usefulness for Developer or Machine learning participant.</li>
          <li className='ac-gf-sosumi-li'>Any feedback or comment is label for my future direction.
            Please enjoy this site, I am happy to get your contribution and support from you</li></ul>
        <hr />
        <div
          className="container"
          style={{
            bottom: "0",
            height: "fit-content",
            width: "100%",
            alignItems: "center",
            alignContent: "stretch",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "14px",
            margin: "5px"
          }}
        >
          <div style={{ fontWeight: "bold", color: "black" }}>Copyright © 2023 Machine Learning Practices</div>
          <a className="footer-section" href="/privacy">Privacy | </a>
          <a className="footer-section" href="/disclaimer">Disclaimer | </a>
          <a className="footer-section" href="/terms">Terms | </a>
          <a className="footer-section" href="/service">Contact </a>
        </div>

      </footer>
    </div> </>
)

export default Layout
