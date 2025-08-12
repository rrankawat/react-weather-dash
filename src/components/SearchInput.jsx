const SearchInput = ({ search, setSearch }) => {
  return (
    <div className='search'>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder='Search City'
      />
    </div>
  )
}

export default SearchInput
