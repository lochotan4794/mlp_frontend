import React from 'react'
import Link from 'next/link'
import { Post } from '../interfaces'


type Props = {
  data: Post
}

const ListItem = ({ data }: Props) => (
  <Link href="/posts/[id]" as={`/posts/${data.slug}`}>
    <>
      <div style={{display: "flex", flexDirection: "column", width:"100%"}}>
        <img src={data.ava} style={{width: "50%"}}/>
        <div style={{width: "50%"}}>
          <h3>{data.title}</h3>
          <p>{data.abstract}</p></div></div>
    </>
  </Link>
)

export default ListItem