import * as React from 'react'

import { User, Post } from '../interfaces'
import styles from '../styles/List.module.css'


type ListDetailProps = {
  item: Post
}

const ListDetail = ({ item: post }: ListDetailProps) => (
  <div className={styles.item}>
    <h1>{post.title}</h1>
    <p>{post.abstract}</p>
  </div>
)

export default ListDetail