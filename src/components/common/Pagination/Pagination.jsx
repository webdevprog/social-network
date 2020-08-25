import React from 'react';
import cls from './pagination.module.scss'
import { useState } from 'react';

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(0);

    let pageCount = Math.ceil(props.totalPages / props.pageSize);
    let start = props.pageSize * currentPage;
    let endNum = (pageCount + start + props.pageSize - pageCount);
    let endPoint = endNum >= pageCount ? pageCount : endNum;
    let pages = [];

    for (let page = start; page <= endPoint - 1; page++) {
        pages.push(page + 1);
    }

    return (
        <div className={cls.pagination}>
            {start > 1 ?
                <button
                    onClick={() => {
                        const currentPageNew = start < pageCount && currentPage > 0 ? currentPage - 1 : 0;
                        setCurrentPage(currentPageNew)
                    }}
                >Prev</button>
                : ''
            }

            {
                pages.map(page => {
                    return (
                        isNaN(page) ?
                            <span key={pageCount + 1}>
                                {page}
                            </span>
                            :
                            <span
                                key={page} onClick={() => { props.onChangePage(page) }} className={props.pageCurrent === page ? cls.selectedPage : ''}>

                                {page}

                            </span>
                    )
                })
            }
            {endPoint !== pageCount ?
                <button onClick={() => {
                    const currentPageNew = start < pageCount ? currentPage + 1 : 0;
                    setCurrentPage(currentPageNew)
                }}>Next</button> : ''
            }

        </div>
    )
}

export default Pagination;