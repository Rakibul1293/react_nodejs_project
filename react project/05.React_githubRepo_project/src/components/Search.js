import React from 'react'

const Search = props => {
    return (
        <input
            type="text"
            className="form-control"
            placeholder="Enter a User Name"
            value={props.searchTrem}
            onChange={(e) => props.change(e.target.value)}
        />
    )
}

export default Search