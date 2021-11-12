import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";


const Main = props => {
  
  const [bookmarks, setBookmarks] = useState(null);

  const URL = "https://bookmarkd-app-backend.herokuapp.com/bookmark";

  const getBookmarks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("IN MAIN.JSX", data)
    setBookmarks(data);
  }

  const createBookmark = async bookmark => {
    // make post request to create a bookmarks
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookmark),
    });
    getBookmarks();
  };

  useEffect(() => getBookmarks(), []);


  return (
    <main className="Main">
      <Routes>
        <Route path="/" element={<Index bookmarks={bookmarks} createBookmark={createBookmark} />} />
      </Routes>
    </main>
  )

};


export default Main;
