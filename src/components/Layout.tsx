import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}
const mathConfig = `MathJax.Hub.Config({ // or window.MathJax.Hub.Config
  tex2jax: {
    inlineMath: [["\\(","\\)"] ],
    displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
  },
  CommonHTML: { matchFontHeight: false }
  });`;


const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
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
      <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=default'></script>

    </Head>
    <header>
      {/* <h1>Machine Learning Practices</h1>
      <div><p>Practical Knownledge in Machine Learning</p><button>Login</button></div> */}
      <nav style={{ backgroundColor: "#384b37" }}>
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
