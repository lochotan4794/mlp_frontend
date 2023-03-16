import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MathJax, MathJaxContext } from "better-react-mathjax";


export default function App({ Component, pageProps }: AppProps) {
  // <MathJaxContext>
    <Component {...pageProps} />
  // </MathJaxContext>
}
