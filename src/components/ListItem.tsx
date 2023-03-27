import React from 'react'
import Link from 'next/link'
import { Post, ExtPost, Rel, Tag, PostList } from '../interfaces'
import SideStyles from '../styles/Side.module.css'
import ListStyles from '../styles/List.module.css'
import axios from 'axios'
import severUrl from '@/utils/api'

type Props = {
  data: ExtPost
  tags: Tag[]
}

export default function ListItem({ data, tags }: Props) {

  const handleOnclick = (e: any, key: string) => {
    e.preventDefault();
    localStorage.setItem('keysearch', key);
    window.location.href = '/tag'
  };


  return (
    // <Link className={SideStyles.itemDescription} href="/post/[id]" as={`/post/${data.slug}`}>
    //   <>
    //     <div className={ListStyles.item}>
    //       <img className={ListStyles.itemImg} src={data.ava} />
    //       <div className={ListStyles.itemCnt}>
    //         <div style={{ display: "flex", flexDirection: "row" }}>
    //           <h4>{data.title}</h4><p>{data.created_on}</p></div>
    //         <p >{data.abstract.substring(0, 200) + "..."}</p>
    //         {tags.map((t) => (
    //           data.id == t.id ? <button onClick={(e) =>handleOnclick(e, t.title)}>{t.title}</button> : <></>
    //         ))}
    //       </div>
    //     </div>
    //   </>
    // </Link>

    <Link className={SideStyles.itemDescription} href="/post/[id]" as={`/post/${data.slug}`}>
      <>
        <div className={ListStyles.item}>
          <img className={ListStyles.itemImg} src={data.ava} />
          <div className={ListStyles.itemCnt}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h4>{data.title}</h4><p>{data.created_on}</p></div>
            <p >{data.abstract.substring(0, 200) + "..."}</p>
            {data.relationship?.map((item, index) => (

              tags.filter((tag) => tag.id === item.tag).map((t) => (
                <button onClick={(e) =>handleOnclick(e, t.title)}>{t.title}</button>
              ))))}
          </div>
        </div>
      </>
    </Link>
  )
}

// const ListItem = ({ data, tags }: Props) => (

//   <Link className={SideStyles.itemDescription} href="/post/[id]" as={`/post/${data.slug}`}>
//     <>
//       <div className={ListStyles.item}>
//         <img className={ListStyles.itemImg} src={data.ava} />
//         <div className={ListStyles.itemCnt}>
//           <div style={{ display: "flex", flexDirection: "row" }}>
//             <h4>{data.title}</h4><p>{data.created_on}</p></div>
//           <p >{data.abstract.substring(0, 200) + "..."}</p>
//           {data.relationship?.map((item, index) => (

//             tags.filter((tag) => tag.id === item.tag).map((t) => (
//               <p>{t.title}</p>
//             )
//             )

//           )
//           )
//           }
//         </div>
//       </div>
//     </>
//   </Link>
// )

// export default ListItem


// class ListItem extends React.Component<Props> {

//   constructor(props: Props) {
//     super(props);
//   }

//   // mapTag = (rel: any) => {
//   //   const ts = []
//   //   for (let i = 0; i < rel.length; i++) {
//   //     console.log(i)
//   //     for (let j = 0; j < this.props.tags.length; j++) {
//   //       console.log(rel[i].id)
//   //       if (this.props.tags[j].id == rel[i].tag) {
//   //         ts.push(this.props.tags[j].title);
//   //       }
//   //     }
//   //   }
//   //   return ts;
//   // }
//   mapTag = (rel: any) => {
//     const ts = new Array<String>
//     rel.map((r: Rel) =>{
//       for (let j = 0; j < this.props.tags.length; j++) {
//         if (this.props.tags[j].id == r.tag) {
//           ts.push(this.props.tags[j].title);
//         }
//       }
//     })
//     return ts;
//   }

//   render() {
//     const {
//       data,
//       tags,
//     } = this.props

//     return (
//       <>
//         <Link className={SideStyles.itemDescription} href="/post/[id]" as={`/post/${data.slug}`}>
//           <>
//             <div className={ListStyles.item}>
//               <img className={ListStyles.itemImg} src={data.ava} />
//               <div className={ListStyles.itemCnt}>
//                 <div style={{ display: "flex", flexDirection: "row" }}>
//                   <h4>{data.title}</h4><p>{data.created_on}</p></div>
//                 <p >{data.abstract.substring(0, 200) + "..."}</p>
//                 {this.mapTag(data.relationship).map((t) => (
//                   <button>
//                     {t}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </>
//         </Link>
//       </>
//     );
//   }
// }

// export default ListItem;
