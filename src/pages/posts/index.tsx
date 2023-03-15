import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Post } from '../../interfaces'
// import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { sampleUserData } from '../../../utils/sample-data'
import { METHODS } from 'http'

type Props = {
  items: Post[]
}

const HomePage = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Post List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
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