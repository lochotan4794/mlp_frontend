import React from "react";
import severUrl from "@/utils/api";
import SearchPost from "../../components/Admin/SearchPost";
import EditPost from "../../components/Admin/EditPost";
import SearchSlug from "../../components/Admin/SearchSlug";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Router from 'next/router'

// class Admin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       post: [],
//       slug: ""
//     };
//   }

//   handleSelect = (e) => {
//     console.log(e)
//     this.setState({slug: e})
//     window.location.href = "/edit"
//   }

//   render() {
//     return (
//       <>
//         <><Routes>
//           <Route
//             path="/searchpost"
//             element={<SearchPost onChoice={(e) => this.handleSelect(e)} />}>
//           </Route>
//           <Route
//             path="/edit"
//             element={<EditPost slug={this.state.slug}/>}
//           ></Route>
//         </Routes></>
//       </>)
//   }
// }

// export default Admin;

const Admin = ({ match }) => {

  const [slug, setSlug] = useState("")


  const updateSlug = (new_slug) => {
    setSlug(new_slug)
    // navigate('edit', { state: { slug: new_slug } });
         Router.push({
            pathname: 'edit',
            query: { slug: new_slug }
        })
  };

  const createNewPost = () => {
    console.log("new")
    Router.push({
      pathname: 'edit',
      query: { slug: "Dummy" }
  })
};
    // navigate('edit', { state: { slug: "Dummy" } });


  return (<>
    <Routes>
      <Route
        path="searchpost"
        element={<SearchPost choice={updateSlug} createNewPost={createNewPost}/>}>
      </Route>
      <Route
        path="edit"
        element={<EditPost />}
      ></Route>
      <Route
        path="searchslug"
        element={<SearchSlug />}
      ></Route>
    </Routes>
  </>
  )
}

export default Admin;
