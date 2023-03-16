import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function MathCode() {
  const config = {
    loader: { load: ["input/asciimath"] }
  };

  return (
    <MathJaxContext config={config}>
      <p>\t</p>
      <h2>Basic MathJax example with AsciiMath</h2>
      <MathJax>{"`\frac{10}{4x} approx 2^(12)`"}</MathJax>
      <p></p>
    </MathJaxContext>
  );
}
