import React from 'react';
import cls from './pagination.module.scss'

const Pagination = (props) => {
    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];

    for (let page = 1; page <= pageCount; page++) {
        pages.push(page);
    }

    return (
        <div className={cls.pagination}>
            {
                pages.map(page => {
                    return (
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