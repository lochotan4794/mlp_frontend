import React, { ReactNode } from 'react'
import Head from 'next/head'
import SideStyles from '../styles/Side.module.css'

type MainProp = {
  leftChild?: ReactNode
  middleChild?: ReactNode
  rightChild?: ReactNode
}

const MainLayout = ({ leftChild, middleChild, rightChild }: MainProp) => (
  <div>   
  {/* <div style={{display:"grid", gridAutoFlow:"column", gridTemplateAreas: "leftChild middleChild rightChild", gridGap: "10px"}}> */}
  <div className={SideStyles.main}>
  <div style={{
          gridArea: "leftChild",
          gridColumn: "1/7",}}>{leftChild}</div>
  <div style={{
          gridArea: "middleChild",
          gridColumn: "7/29",}}>{middleChild}</div>
  <div style={{
          gridArea: "rightChild",
          gridColumn: "29/36",}}>{rightChild}</div>
  </div>
  </div>
)

export default MainLayout