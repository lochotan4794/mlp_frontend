import React from 'react'
import Link from 'next/link'
import { Post } from '../interfaces'


type Props = {
  data: Post
}

const ListItem = ({ data }: Props) => (
  
  <Link href="/posts/[id]" as={`/posts/${data.slug}`}>
    <>
      <div style={{display: "flex", flexDirection: "row", width:"100%", height:"fit-content"}}>
        <img src={data.ava} style={{maxWidth: "40%", margin:"3rem", width:"fit-content"}}/>
        <div style={{maxWidth: "60%"}}>
          <h4>{data.title}</h4>
          <p>{data.abstract.substring(0,200) + "..."}</p></div></div>
    </>
  </Link>
)

export default ListItem