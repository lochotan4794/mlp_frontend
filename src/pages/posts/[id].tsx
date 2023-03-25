import { GetStaticProps, GetStaticPaths } from 'next'
import { Post, Text, Citation, Appendix } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import severUrl from '@/utils/api'
import MainLayout from '@/components/MainLayout'
import SideStyles from '../../styles/Side.module.css'
import LeftPanel from '@/components/Left'
import RightPanel from '@/components/Right'
import { useRouter } from 'next/router'


type Props = {
  item: Post
  comments?: any[]
  text: Text[]
  citation: Citation[]
  appendix: Appendix[]
  all: Post[]
  errors?: string
}

const StaticPropsDetail = ({ item, comments, text, citation, appendix, all, errors }: Props) => {

  const router = useRouter()

  if (router.isFallback) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

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
      title={`${item ? item.title : 'User Detail \(\frac{1}{n}\)'
        } | Next.js + TypeScript Example`}
    >
      {/* {item && <ListDetail post={item} comments={comments} text={text} citation={citation} appendix={appendix} />} */}
      <>
        <div className={SideStyles.main}>
          {/* <div className={SideStyles.leftSide} style={{
          gridArea: "leftChild",
          gridColumn: "1/7",}}>{all.map((a) => (
            <div className={SideStyles.itemLink} ><a href={"/posts/" + a.slug}>{a.title}</a></div>
          ))}</div> */}
          <LeftPanel  slug={item.slug} path={"/posts/"}/>
          <div style={{
            gridArea: "middleChild",
            gridColumn: "7/29",
          }}>{<ListDetail post={item} comments={comments} text={text} citation={citation} appendix={appendix} />}</div>
          {/* <div style={{
          gridArea: "rightChild",
          gridColumn: "29/36",}} className={SideStyles.rightSide}>{all.map((a) => (
            <div className={SideStyles.itemLink}><a href={"/posts/" + a.slug}>{a.title}</a></div>
          ))}</div> */}
          <RightPanel slug={''} path={'posts/'} />
        </div>
        </>
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  // const paths = sampleUserData.map((user) => ({
  //   params: { id: user.id.toString() },
  // }))

  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

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
    console.log("vao day")
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
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    const res1 = await fetch(severUrl + "blog/" + slug + "/comments/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const comments = await res1.json()
    console.log(comments)

    const res2 = await fetch(`https://blog.centralglobalbackend.de/blog/list/all/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data1 = await res2.json()
    const all = data1['post']

    return { props: { item, comments, text, citation, appendix, all }, revalidate: 10 }

  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}

// export async function getServerSideProps = async ({params}) => {
//   // Fetch data from external API
//   const id = params?.id
//   const res = await fetch(`https://blog.centralglobalbackend.de/blog/${id}/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const data = await res.json()
//   const all = data['post']
//   const relative = all
//   const relevent = all
//   // Pass data to the page via props
//   return { props: { all, relative, relevent } }
// }
