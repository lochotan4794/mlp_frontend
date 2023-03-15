import * as React from 'react'
import ListItem from './ListItem'
import { Post } from '../interfaces'
import { GetServerSideProps } from 'next'

type Props = {
  items: Post[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.title}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List