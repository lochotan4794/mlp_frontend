import * as React from 'react'
import { Comment, Post, Text, Citation, Appendix } from '../interfaces'
import styles from '../styles/List.module.css'
import Comments from '../components/Comment/Comments.jsx'
import { MathJax, MathJaxContext } from "better-react-mathjax";

type ListDetailProps = {
  post: Post
  comments?: Comment[]
  text: Text[]
  citation: Citation[]
  appendix: Appendix[]
  errors?: string
}

const ListDetail = ({ post, comments, text, citation, appendix }: ListDetailProps) => (
  <>
    <div className={styles.item}>
      <h1>{post.title}</h1>
      <p>{post.abstract}</p>
      {appendix.map((app) => (
        <>
          <p>{app.text}</p>
        </>
      ))}

      {text.map((txt) => (
        <>
          {txt.role === 10 && (<pre
            style={{
              marginTop: "10px"
            }}
          ><code className="python">{txt.content}</code>
          </pre>)}
          {txt.role === 15 && (<MathJax style={{maxWidth:"100%", textAlign:"center"}}>{"\\(" + txt.content + "\\)"}</MathJax>)}
          {txt.role === 7 && (<h3>{txt.content}</h3>)}
          {txt.role === 8 && (<h4>{txt.content}</h4>)}
          {txt.role === 1 && (<div style={{width:"100%", textAlign:"center"}}><img style={{maxWidth:"60%", textAlign:"center", width:"fit-content"}} src={txt.image}></img></div>)}
          {txt.role === 11 && (<li>{txt.content}</li>)}
          {txt.role === 13 && (<span dangerouslySetInnerHTML={{ __html: txt.content }}></span>)}
          {txt.role !== 10 && txt.role !== 15 && txt.role !== 7 && txt.role !== 8 && txt.role !== 1 && txt.role !== 11 && txt.role !== 13 &&(<p>{txt.content}</p>)}
           {/* {<p>{txt.role}</p>}  */}
        </>
      ))}
      <h3>Preferences</h3>
      {citation.map((cit) => (
        <>
          <p>{cit.text}</p>
        </>
      ))}
    </div>
    <Comments
      comments={comments}
      currentUserId={1}
      slug={post.slug}
    />
  </>
)

export default ListDetail