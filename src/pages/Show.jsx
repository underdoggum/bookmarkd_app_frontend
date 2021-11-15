import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";


const Show = props => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const bookmarks = props.bookmarks;
  // const bookmark = bookmarks.find((b) => b._id === id);

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

  // ADD IN FORM W/ HANDLE SUBMIT + HANDLECHANGE

  const form = (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.title}
        name="title"
        placeholder="bookmark title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.url}
        name="url"
        placeholder="bookmark url"
        onChange={handleChange}
      />
      <input type="submit" value="Update Bookmark" />
    </form>
  );

    return (
      <div className="bookmark">
        <h1>{bookmark.title}</h1>
        <h2>{bookmark.url}</h2>
        {form}
        <button onClick={removeBookmark}>DELETE BOOKMARK</button>
      </div>
    )
  } else {
    return <h1>No bookmarks...</h1>
  }
};


export default Show;