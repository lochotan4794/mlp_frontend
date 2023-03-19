/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import severUrl from "@/utils/api";
import SideStyles from '../styles/Side.module.css'

// class RightPanel extends React.Component {
//     state = {
//         post: [],
//     };

//     componentDidMount() {
//         fetch(severUrl + `blog/list/relevent/`, {
//             method: "GET",
//         })
//         .then((response) => response.json())
//         .then((data) => {
//                 this.setState({ post: data });
//         });
//     }
//     render() {
//         return (
//             <>
//                 <div
//                     style={{
//                         // gridArea: "RightPanel",
//                         gridColumn: "29/36",
//                         alignContent: "center",
//                         textAlign: "justify",
//                         marginLeft: "10px",
//                     }}
//                 >
//                     <div
//                         style={{
//                             display: "grid",
//                             gridTemplateRows: "auto auto",
//                             padding: 0,
//                             margin: 0,
//                             textAlign: "center",
//                             width: "100%",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 display: "grid",
//                                 gridTemplateColumns: "auto auto",
//                                 padding: 0,
//                                 margin: 0,
//                                 width: "100%",
//                             }}
//                         >
//                         </div>
//                         <div style={{ fontSize: "14px", width: "100%", textAlign: "justify" }}>
//                             <p>
//                                 Hi, I am LOC. <br />
//                                 I am Research Engineer. I am interested about Embedded/AI sytem. Hope this site is useful for you.
//                             </p>
//                             <a
//                                 style={{ fontSize: "14px", textAlign: "justify" }}
//                                 href="/about-me"
//                             >
//                                 {`More about me >>`}
//                             </a>
//                         </div>
//                     </div>
//                     <h4>
//                         Relevent
//                     </h4>
//                     <span className="brmedium"></span>
//                     {Array.from(this.state.post).map((p) => (
//                         <>
//                               <div className={SideStyles.itemLink}>

//                             <a href={"/" + p.slug}>{p.title}</a>
//                             <span className="brmedium"></span></div>
//                         </>
//                     ))}
//                     {/* <GoogleAd
//             classNames="GoogAd"
//             slot="7756045717"
//             googleAdId="ca-pub-3156532081104759"
//           /> */}
//                 </div>
//             </>
//         );
//     }
// }

// export default RightPanel;

type Props = {
    slug: string
    path: string
}


export default function RightPanel({ slug, path }: Props) {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(severUrl + `blog/list/relevent/`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setPost(data)
            });
    }, [])

    return (
        <>
            <div
                style={{
                    // gridArea: "RightPanel",
                    gridColumn: "29/36",
                    alignContent: "center",
                    textAlign: "justify",
                    marginLeft: "10px",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateRows: "auto auto",
                        padding: 0,
                        margin: 0,
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "auto auto",
                            padding: 0,
                            margin: 0,
                            width: "100%",
                        }}
                    >
                    </div>
                    <div style={{ fontSize: "14px", width: "100%", textAlign: "justify" }}>
                        <p>
                            Hi, I am LOC. <br />
                            I am Research Engineer. I am interested about Embedded/AI sytem. Hope this site is useful for you.
                        </p>
                        <a
                            style={{ fontSize: "14px", textAlign: "justify" }}
                            href="/about-me"
                        >
                            {`More about me >>`}
                        </a>
                    </div>
                </div>
                <h4>
                    Relevent
                </h4>
                <span className="brmedium"></span>
                {Array.from(post).map((p) => (
                    <>
                        <div className={SideStyles.itemLink}>

                            <a href={path + p.slug}>{p.title}</a>
                            <span className="brmedium"></span></div>
                    </>
                ))}
                {/* <GoogleAd
        classNames="GoogAd"
        slot="7756045717"
        googleAdId="ca-pub-3156532081104759"
      /> */}
            </div>
        </>
    );

}
