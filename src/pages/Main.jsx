import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";


const Main = props => {
  
  const [bookmarks, setBookmarks] = useState(null);

  const URL = "https://bookmarkd-app-backend.herokuapp.com/";

  const getBookmarks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmarks(data);
  }

  const createBookmark = async bookmarks => {
    // make post request to create a bookmarks
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookmarks),
    });
    // update the list of bookmarks
    getBookmarks();
  };

  useEffect(() => getBookmarks(), []);


    return (
      <main className="Main">
        <Routes>
          <Route exact path="/bookmark" element={<Index bookmarks={bookmarks} createBookmark={createBookmark} />} />
        </Routes>
      </main>
    )

};


export default Main;
