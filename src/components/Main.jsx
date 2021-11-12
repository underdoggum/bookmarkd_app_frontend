import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";


const Main = props => {
  
  const [bookmarks, setBookmarks] = useState(null);

  const URL = "https://bookmarkd-app-backend.herokuapp.com/bookmark";

  // get request (default for fetch function)
  const getBookmarks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmarks(data);
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
  useEffect(() => getBookmarks(), []);


  return (
    <main className="Main">
      <Routes>
        <Route path="/" element={<Index bookmarks={bookmarks} createBookmark={createBookmark} />} />
        <Route path="/bookmarks/:id" element={<Show bookmarks={bookmarks} updateBookmark={updateBookmark} deleteBookmark={deleteBookmark} />} />
      </Routes>
    </main>
  )

};


export default Main;
