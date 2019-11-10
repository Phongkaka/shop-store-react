import React, { Component } from "react";
import Pagination from "react-js-pagination";

export default class PaginationComponent extends Component {

  render() {
    const {handlePageChange, activePage} = this.props;

    return (
      <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={3}
          totalItemsCount={6}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    );
  }
}
