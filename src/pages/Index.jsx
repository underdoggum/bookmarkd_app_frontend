import { useState } from "react";
import { Link } from "react-router-dom";

const Index = props => {
  // state to hold form data
  const [newForm, setNewForm] = useState({
    title: "",
    url: "",
  });
  // handleChange function for the form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };
  // handleSubmit function for the form
  const handleSubmit = event => {
    event.preventDefault();
    props.createBookmark(newForm);
    setNewForm({
      title: "",
      url: "",
    });
  };
  const form = (
    <form onSubmit={handleSubmit}>
        <input className="input-newform-bookmark-title"
          type="text"
          value={newForm.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input className="input-newform-bookmark-url"
          type="text"
          value={newForm.url}
          name="url"
          placeholder="Url"
          onChange={handleChange}
        />
        <input type="submit" value="Create Bookmark" />
      </form>
  )
  if (props.bookmarks) {
    return (
      <section className="Index">
        {form}
        {props.bookmarks.map(bookmark => {
          return (
            <div key={bookmark._id} className="bookmark">
              {/* I've added a button here that points to the show route (which can be like an update route, just kept as Show.jsx to avoid refactoring more) */}
              <a className="a-bookmark-url" href={bookmark.url}><h1 className="h1-index-bookmark-title">{bookmark.title}</h1></a>
              <Link to={`/bookmarks/${bookmark._id}`}>
                <button className="button-modify-or-delete">Modify or Delete</button>
              </Link>
            </div>
          )
        })}
      </section>
    )
  } else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    )
  }
}
export default Index;