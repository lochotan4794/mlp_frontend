import { GetStaticProps, GetStaticPaths } from 'next'

import { User, Post } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import SideStyles from '../../styles/Side.module.css'
import LeftPanel from '@/components/Left'
import RightPanel from '@/components/Right'

type Props = {
  item: Post
  comments?: any[]
  appendix?: any[]
  citation?: any[]
  text?: any[]
  errors?: string
}

const StaticPropsDetail = ({ item, comments, appendix, citation, text, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.slug : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
        <div className={SideStyles.main}>
          <LeftPanel  slug={item?.slug} path={"post/"}/>
          <div style={{
            gridArea: "middleChild",
            gridColumn: "7/29",
          }}>{<ListDetail post={item} comments={comments} text={text} citation={citation} appendix={appendix} />}
          </div>
          <RightPanel slug={''} path={"post/"} />
        </div>
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const res = await fetch(`https://blog.centralglobalbackend.de/blog/list/all/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  const all = data['post']

  const paths = all.map((post: Post) => ({
    params: { id: post.slug.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    // const id = params?.id
    // const item = sampleUserData.find((data) => data.id === String('The-following-i-example-of-the'))
    // // By returning { props: item }, the StaticPropsDetail component
    // // will receive `item` as a prop at build time
    // console.log("vao day")
    const slug = params?.id
    console.log(`https://blog.centralglobalbackend.de/blog/${slug}/`)
    const res = await fetch(`https://blog.centralglobalbackend.de/blog/${slug}/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // console.log(res)
    // const item = sampleUserData.find((data) => data.id === Number(id))
    console.log(res)
    const data = await res.json()
    const item = data['post']
    const appendix = data['appendix']
    const citation = data['citation']
    const text = data['text']

    const res1 = await fetch('https://blog.centralglobalbackend.de/' + "blog/" + slug + "/comments/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const comments = await res1.json()
    console.log(comments)

    return { props: { item, comments, appendix, citation, text} }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
