import React from 'react';

export default function Pagination(props:any) {
    let goToNext = props.goToNextPage;
    let goToPrev = props.goToPreviousPage;
    return (
        <div>
            <button onClick={goToPrev}>Previous</button>
            <button onClick={goToNext}>Next</button>
        </div>
    );
}