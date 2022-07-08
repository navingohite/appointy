
const Search = ({ query, onQueryChange}) => {
  return (
    <div className="card-header bg-info my-2">
      <form class="form-inline">
          <input type="text" name="query" id="query" value={query}
          onChange={(event) => { onQueryChange(event.target.value) }}
          className="form-control mr-sm-2" placeholder="Search" />
       </form>
    </div>
  )
}

export default Search