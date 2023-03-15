import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Post } from '@/interfaces'
import Layout from '@/components/Layout'
import List from '@/components/List'
import { METHODS } from 'http'
import MainLayout from '@/components/MainLayout'

type Props = {
  items: Post[]
}

const leftChild = () =>{
  <p>left</p>
}

const rightChild = () =>{
  <p>left</p>
}

const middleChild = () =>{
  <p>left</p>
}

const HomePage = ({ items }: Props) => (
  <MainLayout leftChild rightChild middleChild />
)

// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: Post[] = sampleUserData
//   return { props: { items } }
// }

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://blog.centralglobalbackend.de/blog/list/all/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  const items = data['post']
  // Pass data to the page via props
  console.log(data)
  return { props: { items } }
}

export default HomePage