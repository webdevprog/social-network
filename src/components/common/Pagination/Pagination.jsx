import React from 'react';
import cls from './pagination.module.scss'

const Pagination = (props) => {
    let pageCount = Math.ceil(props.totalPages / props.pageSize);
    let from = props.pageCurrent <= 6 ? 1 : props.pageCurrent - props.pageSize;
    let pages = [];

    for (let page = from; page <= pageCount; page++) {
        if ((props.pageCurrent + props.pageSize) > page) {
            pages.push(page);
        } else if (page > (pageCount - 2)) {
            pages.push(page);
        }
    }

    if (props.pageCurrent < (pageCount - 2)) {
        pages[pages.length - 3] = '...';
    }
    
    return (
        <div className={cls.pagination}>
            {
                pages.map(page => {
                    return (
                        isNaN(page) ? 
                        <span key={pageCount + 1}>
                            {page}
                        </span>
                        : 
                        <span key={page} onClick={() => { props.onChangePage(page) }} className={props.pageCurrent === page ? cls.selectedPage : ''}>
                            {page}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Pagination;