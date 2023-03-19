import React from "react"
import { useState } from "react"
import axios from "axios"
import severUrl  from "@/utils/api";

const SearchSlug = () => {
  const [post, setPost] = useState([])
  const [key, setKey] = useState([])

  const handleOnChange = (e) => {
    setKey(e.target.value)
  }

  const searchPost = () => {
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
        console.log(data)
        setPost(data.post)
      });

  }

  return (
    <>
      <input type="text" onChange={(e) => handleOnChange(e)} />
      <button onClick={()=> searchPost(key)}>Enter</button>
      {Array.from(post).map(
        (po) => (<button style={{ borderTop: "5px", borderBottom: "5px" }}  onClick={() =>  navigator.clipboard.writeText(po.slug)}
        >
          {po.slug}
        </button>
        ))}
    </>)
}

export default SearchSlug;
