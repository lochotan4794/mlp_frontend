// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
    id: number
    name: string
}

export type ItemLink = {
  slug: string
  title: string
}

export type Post = {
  title: string
  abstract: string
  slug: string
  updated_on: string
  created_on: string
  status: number
  thumnail: string
  total_visited: number
  eng_ver: string
  lang: number
  relationship: [number]
  video: string
  pdf: string
  previous_post: [object]
  next_post: [object]
  topic: number
  ava: string
}