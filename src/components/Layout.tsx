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

export const navItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'web design',
        url: 'web-design',
      },
      {
        title: 'web development',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node',
              },
              {
                title: 'PHP',
                url: 'php',
              },
            ],
          },
        ],
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are',
      },
      {
        title: 'Our values',
        url: 'our-values',
      },
    ],
  },
];


const Layout = ({ children, title = 'Machine Learning Pracices' }: Props) => (
  <div className="container">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script
        id="MathJax-script"
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_HTML"
      ></script>
      <script type="text/javascript" src="dist/purify.min.js"></script>
      <script
        type="text/x-mathjax-config"
        dangerouslySetInnerHTML={{ __html: mathConfig }}
      />
      <link rel="stylesheet" type="text/css" href="/static/css/paraiso-light.css" media="screen" />
      <link rel="stylesheet" type="text/css" href="/static/css/katex.min.css" media="screen" />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=default'></script> */}
      <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
    </Head>
    <header>
      <div style={{ display: "flex", flexDirection: "row" }}><div style={{ width: "90%" }}><a style={{ textDecoration: "unset" }} href='/'><h1>Machine Learning Practices</h1></a>
        <p>Practical Knownledge in Machine Learning</p></div><div style={{ alignItems: "end", textAlign: "end", alignContent: "flex-end", width: "10%", height: "100%" }}><UseModal /></div></div>
 
      {/* <nav className="navbar navbar-light" style={{ backgroundColor: "#384b37" }}>
        <Link className="navbar-brand" href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link className="navbar-brand" href="/users">Users List</Link> |{' '}
        <Link className="navbar-brand" href="/posts">Posts List</Link> |{' '}
        <a href="/api/users">Users API</a>
        <a className="navbar-brand" href="#">Fixed top</a>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav> */}

      {/* <nav className={Navstyles.nav}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/about">About</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className={Navstyles.nav__link} href="/research">Research <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className={Navstyles.nav__link} href="/fun">Fun</a>
            </li>
            <li className="nav-item">
              <a className={Navstyles.nav__link} href="/story">Stories</a>
            </li>
            <li className="nav-item">
              <a className={Navstyles.nav__link} href="/hire">Hire me</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      {/* </form>
        </div>
      </nav> */}
      <Navbar />
    </header>
    
    {children}
    <footer style={{ backgroundColor: "#f5f5f7" }}>
      <div
        className="container"
        style={{
          bottom: "0",
          height: "fit-content",
          width: "100%",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Email: htanloc994@gmail.com
      </div>
      <div
        className="container"
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
      <div
        className="container"
        style={{
          bottom: "0",
          height: "fit-content",
          width: "100%",
          alignItems: "center",
        }}>
        <p> This website was found with purpose sharing knowledge about machine learning field from clearly explanation to practical real world application.
        </p>
        <p>
          I hope if my works and research can deliver usefulness for Developer or Machine learning participant.</p>
        <p>Any feedback or comment is label for my future direction.
          Please enjoy this site, I am happy to get your contribution and support from you</p></div>
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
  </div>
)

export default Layout
