import React, { useEffect } from 'react';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
hljs.registerLanguage('python', python)

type contentProp = {
    content: string
}

const HlCode = ({ content }: contentProp) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      /> */}
    </div>
  );
};

export default HlCode