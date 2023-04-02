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
import LeftPanel from '@/components/Left'
import RightPanel from '@/components/Right'
import SideStyles from '../styles/Side.module.css'
import MainLayout from '@/components/MainLayout'


type Props = {
  items: Post[]
}

function Searchpage() {
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
         // Get data from the form.
    const senddata = {
      key: key,
    }
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(senddata)
    // API endpoint where we send form data.
    const endpoint = severUrl + "blog/search"
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
    // Send the form data to our forms API on Vercel and get a response.
    fetch(endpoint, options).then((res) => res.json())
    .then((data) => {
      console.log(data)
      setPost(data.post)
      setTag(data.tags)
      setLoading(false)
    })
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!posts) return <p>No profile data</p>

  return (<>
  <Layout title="Users List | Next.js + TypeScript Example">
    {/* <h1>{keysearch}</h1> */}
    {/* <LeftPanel  slug={''} path={""}/>
    <List items={posts} tags={tags} />
    <RightPanel slug={''} path={""} /> */}


    <MainLayout middleChild={<List  keyword={keysearch} items={posts} tags={tags} />} leftChild={<LeftPanel slug={''} path={'post/'}/>} rightChild={<RightPanel slug={''} path={'post/'}/>} />

  </Layout></>)
}

export default withRouter(Searchpage)