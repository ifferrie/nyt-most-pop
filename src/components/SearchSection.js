import React from 'react'

const SearchSection = ({
  onSearchWordChange,
  search,
  onSearch,
  period
}) => {
  return (
    <div>
      <div className="input-group mb-3">
        <input type="text"
          className="form-control"
          value={search}
          onChange={onSearchWordChange}
          aria-describedby="button-addon2"
          />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={(e) => onSearch(period, search)}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
