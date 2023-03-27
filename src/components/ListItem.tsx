import React from 'react'
import Link from 'next/link'
import { Post, ExtPost, Rel, Tag } from '../interfaces'
import SideStyles from '../styles/Side.module.css'
import ListStyles from '../styles/List.module.css'


type Props = {
  data: ExtPost
  tags: Tag[]
}


const ListItem = ({ data, tags }: Props) => (

  <Link className={SideStyles.itemDescription} href="/post/[id]" as={`/post/${data.slug}`}>
    <>
      <div className={ListStyles.item}>
        <img className={ListStyles.itemImg} src={data.ava} />
        <div className={ListStyles.itemCnt}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h4>{data.title}</h4><p>{data.created_on}</p></div>
          <p >{data.abstract.substring(0, 200) + "..."}</p>
          {data.relationship.map((t: Rel) => (
            tags.map((m: Tag) => (
              (m.id === t.tag)&& <button>{m.title}</button>
            ))
          ))}
        </div>
      </div>
    </>
  </Link>
)

export default ListItem