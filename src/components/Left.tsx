import React from "react";
import axios from "axios";
import severUrl from "@/utils/api";
import SideStyles from '../styles/Side.module.css'
import { Post } from "@/interfaces";
import { useState, useEffect } from "react";

// class LeftPanel extends React.Component {


//     constructor(props) {
//         super(props);

//     }

//   state = {
//     recents: [],
//     related: [],
//   };

//   componentDidMount() {
//     // make fetch request
//     fetch(severUrl + `blog/list/recent/`, {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data);
//         this.setState({ recents: data });
//       });

//     // if (this.props.slug) {
//     //   var bodyFormData = new FormData();
//     //   bodyFormData.append("slug", this.props.slug);
//     //   localStorage.setItem("slug", this.props.slug);
//     //   axios
//     //     .post(
//     //       severUrl + "blog/" + this.props.slug + "/list/relative/",
//     //       bodyFormData
//     //     )
//     //     .then((response) => response.data)
//     //     .then((data) => {
//     //       console.log(data)
//     //       this.setState({ related: data });
//     //     });
//     // }
//   }

//   handleOnclick = () => {
//     window.location.href = "/support";
//   };

//   render() {
//     return (
//       <div

//       className={SideStyles.side}
//         // style={{
//         //   gridArea: "LeftPanel",
//         //   gridColumn: "1/7",
//         //   alignContent: "center",
//         //   textAlign: "justify",
//         //   marginRight: "10px",
//         // }}
//       >
//         <button style={{ width: "100%", fontWeight:"550"}} onClick={this.handleOnclick}>
//         Buy me a coffe
//         </button>
//         <span className="brmedium"></span>
//         <h4>
//             Newest
//         </h4>
//         {Array.from(this.state.recents).map((p: Post) => (
//           <>
//             <a href={p.slug}>{p.title}</a>
//             <span className="brmedium"></span>
//           </>
//         ))}
//         {this.props.slug && (
//           <>
//             {this.state.related.length != 0 && (
//               <>
//                 <h4>
//                    Relatives
//                 </h4>
//               </>
//             )}
//             {Array.from(this.state.related).map((p: Post) => (
//               <>
//                 <a href={"/" + p.slug}>{p.title}</a>
//                 <span className="brmedium"></span>
//               </>
//             ))}
//           </>
//         )}
//         {/* <GoogleAd
//           classNames="GoogAd"
//           slot="4978689198"
//           googleAdId="ca-pub-3156532081104759"
//         /> */}
//       </div>
//     );
//   }
// }

// export default LeftPanel;

type Props = {
    slug?: string
    path: string
  }

export default function LeftPanel({ slug, path }: Props) {

    const [recents, setRecent] = useState([])
    const [related, setRelative] = useState([])

    useEffect(() => {
        fetch(severUrl + `blog/list/recent/`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setRecent(data);
            });
    }, [])


    const handleOnclick = () => {
        window.location.href = "/support";
    };

return (
    <div

        // className={SideStyles.side}
    style={{
    //   gridArea: "LeftPanel",
      gridColumn: "1/7",
      alignContent: "center",
      textAlign: "justify",
      marginRight: "10px",
    }}
    >
        <button style={{ width: "100%", fontWeight: "550" }} onClick={handleOnclick}>
            Buy me a coffe
        </button>
        <span className="brmedium"></span>
        <h4>
            Newest
        </h4>
        {Array.from(recents).map((p: Post) => (
            <>
                  <div className={SideStyles.itemLink}>
                <a href={path + p.slug}>{p.title}</a>
                <span className="brmedium"></span></div>
            </>
        ))}
        {slug && (
            <>
                {related.length != 0 && (
                    <>
                        <h4>
                            Relatives
                        </h4>
                    </>
                )}
                {Array.from(related).map((p: Post) => (
                    <>
                        <a href={path + p.slug}>{p.title}</a>
                        <span className="brmedium"></span>
                    </>
                ))}
            </>
        )}
    </div>
);

}

