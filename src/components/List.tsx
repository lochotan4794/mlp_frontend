import * as React from 'react'
import ListItem from './ListItem'
import { ExtPost, Tag } from '../interfaces'
import styles from "../styles/Home.module.css";
import Pagination from './Pagination';
import { useState, useEffect } from "react";
import { paginate } from '@/helpers/paginate';

type Props = {
  items: ExtPost[]
  tags: Tag[]
}

// const List = ({ items }: Props) => (
//   <ul>
//     {items.map((item) => (
//       <li key={item.title}>
//         <ListItem data={item} />
//       </li>
//     ))}
//   </ul>
// )

// export default List


export default function List({ items, tags }: Props) {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedPosts = items.length < pageSize ? items : paginate(items, currentPage, pageSize);

  return (
    <>
      <Pagination
        items={items} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
        {paginatedPosts.map((item: ExtPost) => (
          <div key={item.title} style={{}}>
            <ListItem data={item} tags={tags}/>
          </div>
        ))}
    </>
  )
}

