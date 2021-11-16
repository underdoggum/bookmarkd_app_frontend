// credit for some of the search box logic goes to user Adebola from
// https://dev.to/debosthefirst/how-to-build-a-search-box-in-react-with-objects-29ca

const Searchbox = props => {

  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search Bookmarks"
        value={props.value}
        onChange={props.handleChangeSearch}
      />
    </div>
  )
}


export default Searchbox;