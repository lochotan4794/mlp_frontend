import * as React from 'react'
import ListItem from './ListItem'
import { Post } from '../interfaces'
import { GetServerSideProps } from 'next'

type Props = {
  items: Post[]
}

const LeftSide = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.title}>
        {item.title}
      </li>
    ))}
  </ul>
)

export default LeftSide