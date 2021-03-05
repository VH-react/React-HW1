import React, {useState} from 'react';
import ReactPaginate from 'react-paginate'
import {List} from "semantic-ui-react";
import '../../containers/pagintion.css'
import GistItem from "./GistItem";

function GistList({ gists }) {
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const currentPageData = gists
        .slice(offset, offset + PER_PAGE)
        .map(gist => <GistItem key={gist.id} gist={gist} />);
    const pageCount = Math.ceil(gists.length / PER_PAGE);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
    return (
        <List>
            {currentPageData}
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                hrefBuilder={() => <a href="/"> </a>}
            />
            {/*{gists.map(gist => <GistItem key={gist.id} gist={gist} />)}*/}
        </List>
    );
}

export default GistList;