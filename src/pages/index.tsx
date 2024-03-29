import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Page from './page'
import Header from '@/components/header'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import MainLayout from '@/components/MainLayout'
import { ItemLink, ExtPost, Tag, PostList } from '@/interfaces'
import List from '@/components/List'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import React, { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
const inter = Inter({ subsets: ['latin'] })
import HlCode from '@/components/Code'
import LeftPanel from '@/components/Left'
import RightPanel from '@/components/Right'


type IndexProps = {
  all: PostList,
  tags: Tag[]
}


const IndexPage = ({ all, tags }: IndexProps) => (
  <Layout title="Machine Learning Practices">
    {/* <h1>My Post</h1>
    <HlCode content={`
        def fib(n):
  a, b = 0, 1
    while a < n:
      print(a, end=' ')
      a, b = b, a+b
      print()
  fib(1000)`} />
    <pre
      style={{
        marginTop: "10px"
      }}
    ><code className="python">{`
        def fib(n):
  a, b = 0, 1
    while a < n:
      print(a, end=' ')
      a, b = b, a+b
      print()
  fib(1000)`}</code>
    </pre>
    <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax> */}

    {/* <MainLayout middleChild={<List items={all} />} leftChild={<LeftSide items={relative} />} rightChild={<RightSide items={relevent} />} /> */}
    <MainLayout middleChild={<List items={all} tags={tags} />} leftChild={<LeftPanel slug={''} path={'post/'}/>} rightChild={<RightPanel slug={''} path={'post/'}/>} />

  </Layout>
)

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://blog.centralglobalbackend.de/blog/list/all/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  const all = data['post']
  const tags = data['tags']
  console.log(all)
  // Pass data to the page via props
  return { props: { all, tags } }
}

// export async function getServerSideProps() {
//   const [r1, r2, r3] = await Promise.all([
//     fetch(`https://blog.centralglobalbackend.de/blog/list/all/`), 
//     fetch(`https://blog.centralglobalbackend.de/blog/list/relative/`),
//     fetch(`https://blog.centralglobalbackend.de/blog/list/relevent/`),
//   ]);
//   const [t1, t2, t3] = await Promise.all([
//     r1.json(), 
//     r2,
//     r3
//   ]);

//   const all = t1['post']
//   const relative = t2
//   const relevent = t3

//   return { props: { all, relative,  relevent} };
// }

export default IndexPage
// type Post = {
//   title: string
// }

// function Home({posts}: Post) {
//   return (
//     <>
//       <Head>
//         <title>ML Pracetices</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <div className={styles.description}>
//           <Header />
//           <Page />
//           {posts.map((post) => (
//             <p>{post.title}</p>
//           ))}
//           {/* <p>
//             Get started by editing&nbsp;
//             <code className={styles.code}>src/pages/index.tsx</code>
//           </p>
//           <div>
//             <a
//               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               By{' '}
//               <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 className={styles.vercelLogo}
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div>

//         <div className={styles.center}>
//           <Image
//             className={styles.logo}
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//           <div className={styles.thirteen}>
//             <Image
//               src="/thirteen.svg"
//               alt="13"
//               width={40}
//               height={31}
//               priority
//             />
//           </div>
//         </div>

//         <div className={styles.grid}>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Docs <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Find in-depth information about Next.js features and&nbsp;API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Learn <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Templates <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Discover and deploy boilerplate example Next.js&nbsp;projects.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className={inter.className}>
//               Deploy <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Instantly deploy your Next.js site to a shareable URL
//               with&nbsp;Vercel.
//             </p>
//           </a>*/}
//         </div>
//       </main>
//     </>
//   )
// }

// export async function getServerSideProps() {

//   const response = await fetch(
//     `https://blog.centralglobalbackend.de/blog/list/all/`
//   );
//   const posts = await response.json();

//   return {
//     props: {posts}, // will be passed to the page component as props
//   }
// }

// export default Home