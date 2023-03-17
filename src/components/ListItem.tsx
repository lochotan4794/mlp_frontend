import React from 'react'
import Link from 'next/link'
import { Post } from '../interfaces'
import SideStyles from '../styles/Side.module.css'
import ListStyles from '../styles/List.module.css'


type Props = {
  data: Post
}

const ListItem = ({ data }: Props) => (

  <Link className={SideStyles.itemDescription} href="/posts/[id]" as={`/posts/${data.slug}`}>
    <>
      <div className={ListStyles.item}>
        <img className={ListStyles.itemImg} src={data.ava} />
        <div className={ListStyles.itemCnt}>
          <h4>{data.title}</h4>
          <p >{data.abstract.substring(0, 200) + "..."}</p></div></div>
    </>
  </Link>
)

export default ListItem