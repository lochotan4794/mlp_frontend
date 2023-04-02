import styles from "../styles/Home.module.css";
import { ExtPost } from "@/interfaces";

type PagingProp = {
  items: ExtPost[],
  pageSize: number,
  currentPage: number,
  onPageChange: any
}

const Pagination = ({ items, pageSize, currentPage, onPageChange }: PagingProp) => {
  const pagesCount = Math.ceil(items.length / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
      <ul style={{width:"100%", textAlign:"center", padding:0}} >
        {pages.map((page) => (
          <button
            onClick={() => onPageChange(page)}
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <a className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </button>
        ))}
      </ul>
  );
};

export default Pagination;



// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// type Props = {
//   onChangePage: any,
//   totalPages: number,
//   currentPage: number,
//   showPages: number,
//   className?: string,
// }

// type State = {

// }
// // Used to cancel events.
// var preventDefault = (e: any) => e.preventDefault();

// export default class Pagination extends Component<Props, State> {
//   static defaultProps = {
//     showPages: 5,
//   };

//   static propTypes = {
//     onChangePage: PropTypes.func.isRequired,
//     totalPages: PropTypes.number.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     showPages: PropTypes.number,
//   };

//   shouldComponentUpdate(nextProps: Props) {
//     var props = this.props;

//     return (
//       props.totalPages !== nextProps.totalPages ||
//       props.currentPage !== nextProps.currentPage ||
//       props.showPages !== nextProps.showPages
//     );
//   }

//   onChangePage({pageNumber, event}:any) {
//     event.preventDefault();
//     this.props.onChangePage(pageNumber);
//   }

//   render() {
//     var { totalPages, showPages, currentPage } = this.props;

//     if (totalPages === 0) {
//       return null;
//     }

//     var diff = Math.floor(showPages / 2),
//       start = Math.max(currentPage - diff, 0),
//       end = Math.min(start + showPages, totalPages);

//     if (totalPages >= showPages && end >= totalPages) {
//       start = totalPages - showPages;
//     }

//     var buttons = [],
//       btnEvent,
//       isCurrent;
//     for (var i = start; i < end; i++) {
//       isCurrent = currentPage === i;
//       // If the button is for the current page then disable the event.
//       if (isCurrent) {
//         btnEvent = preventDefault;
//       } else {
//         btnEvent = this.onChangePage.bind(this, i);
//       }
//       buttons.push(
//         <li key={i} className={isCurrent ? 'active' : "none"}>
//           <a role="button" href="#" onClick={btnEvent} tabIndex={0}>
//             <span>
//               {i + 1}
//             </span>
//             {isCurrent ? <span className="sr-only">(current)</span> : null}
//           </a>
//         </li>,
//       );
//     }

//     // First and Prev button handlers and class.
//     var firstHandler = preventDefault;
//     var prevHandler = preventDefault;
//     var isNotFirst = currentPage > 0;
//     if (isNotFirst) {
//       firstHandler = this.onChangePage.bind(this, 0);
//       prevHandler = this.onChangePage.bind(this, currentPage - 1);
//     }

//     // Next and Last button handlers and class.
//     var nextHandler = preventDefault;
//     var lastHandler = preventDefault;
//     var isNotLast = currentPage < totalPages - 1;
//     if (isNotLast) {
//       nextHandler = this.onChangePage.bind(this, currentPage + 1);
//       lastHandler = this.onChangePage.bind(this, totalPages - 1);
//     }

//     buttons = [
//       <li key="first" className={!isNotFirst ? 'disabled' : "none"}>
//         <a
//           role="button"
//           href="#"
//           tabIndex={0}
//           onClick={firstHandler}
//           aria-disabled={!isNotFirst}
//           aria-label="First"
//         >
//           <span className="fa fa-angle-double-left" aria-hidden="true" />
//         </a>
//       </li>,
//       <li key="prev" className={!isNotFirst ? 'disabled' : "none"}>
//         <a
//           role="button"
//           href="#"
//           tabIndex={0}
//           onClick={prevHandler}
//           aria-disabled={!isNotFirst}
//           aria-label="Previous"
//         >
//           <span className="fa fa-angle-left" aria-hidden="true" />
//         </a>
//       </li>,
//     ].concat(buttons);

//     buttons = buttons.concat([
//       <li key="next" className={!isNotLast ? 'disabled' : "none"}>
//         <a
//           role="button"
//           href="#"
//           tabIndex={0}
//           onClick={nextHandler}
//           aria-disabled={!isNotLast}
//           aria-label="Next"
//         >
//           <span className="fa fa-angle-right" aria-hidden="true" />
//         </a>
//       </li>,
//       <li key="last" className={!isNotLast ? 'disabled' : "none"}>
//         <a
//           role="button"
//           href="#"
//           tabIndex={0}
//           onClick={lastHandler}
//           aria-disabled={!isNotLast}
//           aria-label="Last"
//         >
//           <span className="fa fa-angle-double-right" aria-hidden="true" />
//         </a>
//       </li>,
//     ]);

//     return (
//       <ul className={this.props.className} aria-label="Pagination">
//         {buttons}
//       </ul>
//     );
//   }
// }
