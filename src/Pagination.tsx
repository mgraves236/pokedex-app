import React from 'react';

export default function Pagination(props:any) {
    let goToNext = props.goToNextPage;
    let goToPrev = props.goToPreviousPage;
    return (
        <nav>
            <div className="buttons">
            <div className="button" onClick={goToPrev}>Previous</div>
            <div className="button" onClick={goToNext}>Next</div>
            </div>
        </nav>
    );
}