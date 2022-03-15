import React from 'react';

export default function Pagination(props:any) {
    let goToNext = props.goToNextPage;
    let goToPrev = props.goToPreviousPage;
    let getPaginationGroup = props.getPaginationGroup;
    let changePage = props.changePage;
    let currentPageNumber = props.currentPageNumber;
    let pagesNumber = props.pagesNumber;
    return (
        <div>
            <button
                onClick={goToPrev}
                className={`prev ${currentPageNumber === 1 ? 'disabled' : ''}`}
            >Previous</button>
            <button
                onClick={goToNext}
                className={`next ${currentPageNumber === pagesNumber ? 'disabled' : ''}`}
            >
            >Next</button>
            {getPaginationGroup().map((item:any, index:any) => (
                <button
                    key={index}
                    onClick={changePage}
                    className={`paginationItem ${currentPageNumber === item ? 'active' : null}`}
                >
                    <span>{item}</span>
                </button>
            ))}
        </div>
    );
}