import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Show = props => {

  const params = useParams();
  const id = params.id;
  const bookmarks = props.bookmarks;

  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    if (props.bookmarks) {
      const bookmark = bookmarks.find(b => b._id === id);
      setEditForm(bookmark);
    }
  }, [props.bookmarks]);


  if (props.bookmarks) {
    const bookmark = bookmarks.find(b => b._id === id);

    // handleChange and handleSubmit here


    return (
      <div className="bookmark">
        <h1>{bookmark.title}</h1>
      </div>
    )
  } else {
    return <h1>No bookmarks...</h1>
  }
};


export default Show;
