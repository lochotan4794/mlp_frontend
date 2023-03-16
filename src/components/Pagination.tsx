import styles from "../styles/Home.module.css";
import { Post } from "@/interfaces";

type PagingProp = {
  items: Post[],
  pageSize: number,
  currentPage: number,
  onPageChange: any
}

const Pagination = ({ items, pageSize, currentPage, onPageChange }: PagingProp) => {
  const pagesCount = Math.ceil(items.length / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className={styles.PageContainer}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <a className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;