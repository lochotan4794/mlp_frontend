import React from "react";
import severUrl  from "@/utils/api";
import { useRef } from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { adminDeletePost }   from "@/utils/api";
import axios from "axios";


// class SearchPost extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         post: [],
//       };
//     }

//     componentDidMount() {
//       fetch(severUrl + `blog/list/all/`, {
//         method: "GET",
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           this.setState({ post: data });
//           // console.log(data)
//         });
//       // localStorage.setItem("admin", true)
//     }
//     componentWillUnmount() {
//       localStorage.setItem("admin", false)
//     }

//     logout = () => {
//       localStorage.setItem("admin", false)
//       window.location.reload()
//     }

//     edit = (e) => {
//       console.log(e)
//     }

//     render() {
//       return (
//         <>
//           <h2>Search</h2>
//           <input type="text" />
//           <button onClick={() => this.logout} type="submit" >Logout</button>
//           {Array.from(this.state.post).map(
//             (po) => (
//               <button onClick={this.props.onChoice(po.slug)}>
//                 {po.title}
//               </button>
//             ))} </>)
//     }
//   }
const SearchPost = ({
  choice,
  createNewPost
}) => {
  const [post, setPost] = useState([])
  const [tags, setTags] = useState([])
  const [key, setKey] = useState([])
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("admin", false)
  }
  
  useEffect(() => {
    fetch(severUrl + `blog/list/all/`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data.post)
        setTags(data.tags)
        console.log(data)
        console.log("here")
      });
    // localStorage.setItem("admin", true)
  }, [])

  const deletePost = (slug) => {
    // window.alert("Delete this post ?");
    // if (window.confirm("Delete")) {
      adminDeletePost(slug).then((resp) => {
      // console.log(resp)
      const newData = post.filter((newData) => newData.slug !== slug)
      console.log(newData)
      setPost(newData)
    });
  }

  const handleOnChange = (e) => {
    setKey(e.target.value)
  }

  const searchPost = (slug) => {
    var bodyFormData = new FormData();
    bodyFormData.append("key", key);
    axios.post(
      severUrl + "blog/admin/searchpost/",
      bodyFormData,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
        }
      }
    ).then((response) => response.data)
    .then((data) => {
      setPost(data.post)
      setTags(data.tags)
      console.log(data)
      console.log("here")
    });

  }

  return (
    <><div style={{display:"flex", flexDirection:"column", width:"100%", alignItems:"center"}}>
      <h2>Search</h2>
      <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">Home</a>
      <input type="text" onChange={(e) => handleOnChange(e)}/>
      <button onClick={()=> searchPost(key)}>Enter</button>
      <button onClick={() => logout} type="submit" >Logout</button>
      <button onClick={() => createNewPost()}>New</button></div>
      <div style={{display:"flex", flexDirection:"column", width:"100%", alignItems:"center"}}>
      {Array.from(post).map(
        (po) => (<div style={{borderTop:"5px", borderBottom:"5px"}}>
          <button onClick={() => choice(po.slug)}>
            {po.title}
          </button>
          <button onClick={() => deletePost(po.slug)}>Delete</button></div>
        ))} </div></>)
}

export default SearchPost;
