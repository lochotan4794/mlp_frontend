import * as React from 'react'
import ListItem from './ListItem'
import { Post } from '../interfaces'
import { GetServerSideProps } from 'next'
import SideStyles from '../styles/Side.module.css'
import { useState, useEffect } from "react";

type Props = {
  items: Post[]
}

const LeftSide = ({ items }: Props) => (
  <ul className={SideStyles.side} >
    {items.map((item) => (
      // <div className={SideStyles.itemLink} >
      <a href={'posts/' + item.slug} style={{
        color: "#337ab7",
        textDecoration: "none", fontWeight: "400"
      }}>
        {item.title}
      </a>
      // </div>
    ))}
  </ul>
)

export default LeftSide