import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useState, useEffect } from "react";
import { Post } from '../../interfaces'
// import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { METHODS } from 'http'
import severUrl from '@/utils/api';
import axios from 'axios';
import { withRouter } from 'next/router'

type Props = {
  items: Post[]
}

function TagPage() {
  const router = useRouter()
  const [posts, setPost] = useState(null)
  const [tags, setTag] = useState([])

  const [keysearch, setKey] = useState("")
  const [isLoading, setLoading] = useState(false)


   useEffect(() => {
    // axios.get(severUrl + "blog/" + slug + "/comments/").then((response) => {
    //   console.log("list");
    //   console.log(response.data);
    setLoading(true)
    const query = router.query
    const localkey = localStorage.getItem("keysearch")
    var key = null
    if (localkey == null) {
      key = String(query['keyword'])
    } else {
       key = localkey
       localStorage.setItem("keysearch", key)
    }
    setKey(key)
    
     
    fetch(severUrl + "blog/" + key + "/list/tag/").then((res) => res.json())
    .then((response) => {
      console.log(response);
      const p = response['post'];
      setPost(p)
      const t =  response['tags'];
      setTag(t)
      setLoading(false)

    });
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!posts) return <p>No profile data</p>

  return (<>
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>{keysearch}</h1>
    <List items={posts} tags={tags} />
  </Layout></>)
}

export default withRouter(TagPage)