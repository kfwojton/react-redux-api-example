import React from 'react'

const Search = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder="Enter Launch Name..."
    autoFocus
  />
)

export default Search
