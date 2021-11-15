// credit for some of the search box logic goes to user Adebola from
// https://dev.to/debosthefirst/how-to-build-a-search-box-in-react-with-objects-29ca

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = props => {
  const [bookmarks, setBookmarks] = useState(null);
  const URL = "https://bookmarkd-app-backend.herokuapp.com/bookmark/";
  // get request (default for fetch function)
  const getBookmarks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmarks(data);
  }

  // Search box
  // state to hold search terms and state to hold a filtered list of bookmarks
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDisplay, setFilteredDisplay] = useState([]);

  const handleChangeSearch = value => {
    console.log("value:", value)
    console.log("search term:", searchTerm)
    
    // check if there's anything in the search box
    if (value !== "") {
      let newList = [];
      newList = bookmarks.filter(bookmark => {
        // if there is, create a new list and pass it into filteredDisplay state and used as props in Index.jsx and Show.jsx
        console.log(bookmark.title.toLowerCase().includes(value.toLowerCase()))
        return bookmark.title.toLowerCase().includes(value.toLowerCase())
      })
      console.table(newList)
      setFilteredDisplay(newList);
    } else {
      setFilteredDisplay(bookmarks);
    }
    setSearchTerm(value);
  }

  // for create route
  const createBookmark = async bookmark => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    });
    getBookmarks();
  };
  // for update route
  const updateBookmark = async (bookmark, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    })
    getBookmarks();
  };
  // for destroy route
  const deleteBookmark = async id => {
    await fetch(URL + id, {
      method: "delete",
    });
    getBookmarks();
  };
  // for getting bookmarks first when a page loads
  // added conditional props to determine to show the whole list or just the searchbox-filtered list
  useEffect(() => getBookmarks(), []);
  return (
    <main className="Main">
      <Routes>
        <Route path="/" element={
          <Index
            bookmarks={searchTerm < 1 ? bookmarks : filteredDisplay}
            createBookmark={createBookmark}
            searchTerm={searchTerm}
            handleChangeSearch={handleChangeSearch}
          />}
        />
        <Route path="/bookmarks/:id" element={
          <Show
            bookmarks={bookmarks}
            updateBookmark={updateBookmark}
            deleteBookmark={deleteBookmark}
          />}
        />
      </Routes>
    </main>
  )
};
export default Main;