import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import 'bootstrap/dist/css/bootstrap.css';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
hljs.registerLanguage('python', python)

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hljs.registerLanguage('python', python)
    hljs.highlightAll();
  }, []);
  return (
    <MathJaxContext>
      <Component {...pageProps} />
    </MathJaxContext>)
}
