import { useEffect, useState } from 'react';
import Pag from 'react-bootstrap/Pagination';

export default function Pagination({
    currentPage,
    setCurrentPage,
    pageSize,
    setQuery,
    totalPages,
}) {
    useEffect(() => {
        const offset = pageSize * (currentPage - 1);

        setQuery(oldState => ({ ...oldState, offset }));
    }, [currentPage]);

    const changePageClickHandler = (e) => {
        setCurrentPage(parseInt(e.target.textContent));
    };

    const items = [];

    for (let index = 1; index <= totalPages; index++) {
        items.push(
            <Pag.Item
                key={index}
                active={index === currentPage}
                onClick={changePageClickHandler}
            >
                {index}
            </Pag.Item>
        );
    }

    const firstPageClickHandler = () => {
        setCurrentPage(1);
    };

    const previousPageClickHandler = () => {
        setCurrentPage(page => Math.max(page - 1, 1));
    };

    const nextPageClickHandler = () => {
        setCurrentPage(page => Math.min(page + 1, totalPages));
    };

    const lastPageClickHandler = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <Pag size="lg">
                <Pag.First onClick={firstPageClickHandler} />
                <Pag.Prev onClick={previousPageClickHandler} />

                {items}

                <Pag.Next onClick={nextPageClickHandler} />
                <Pag.Last onClick={lastPageClickHandler} />
            </Pag>
        </div>
    );
}