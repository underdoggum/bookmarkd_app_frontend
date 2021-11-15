import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const Show = props => {
  const navigate = useNavigate()
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

    const handleChange = (event) => {
      const newState = {...editForm}
      newState[event.target.name] = event.target.value
      setEditForm(newState)
  }

  // handleSubmit for form
  const handleSubmit = (event) => {
      event.preventDefault()
      props.updateBookmark(editForm, bookmark._id)
      navigate("/")
  }

  // delete a person
  const removeBookmark = () => {
      props.deleteBookmark(bookmark._id)
      navigate("/")
  }

  const form = (
    <form onSubmit={handleSubmit}>
        <input className="input-editform-bookmark-title"
        type="text"
        value={editForm.title}
        name="title"
        placeholder="bookmark title"
        onChange={handleChange}
      />
      <input className="input-editform-bookmark-url"
        type="text"
        value={editForm.url}
        name="url"
        placeholder="bookmark url"
        onChange={handleChange}
      />
      <input type="submit" value="Update Bookmark" className="update-button" />
    </form>
  );

    return (
      <div className="div-bookmark">
        <h1 className="h1-show-bookmark-title">{bookmark.title}</h1>
        <h2 className="h2-bookmark-url">{bookmark.url}</h2>
        {form}
        <button className="delete-button" onClick={removeBookmark}>DELETE BOOKMARK</button>
      </div>
    )
  } else {
    return <h1>No bookmarks...</h1>
  }
};


export default Show;
