import { useState } from "react";
import { Link } from "react-router-dom";
import Searchbox from "../components/Searchbox";

export const Index = props => {
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

  // below regex and function logic courtesy of Matthew Crumley
  // https://stackoverflow.com/questions/3543187/prepending-http-to-a-url-that-doesnt-already-contain-http
  const prependHttp = (str) => {
    if (!/^https?:\/\//i.test(str)) {
      return "http://" + str;
    } else {
      return str;
    }
  }

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
          value={prependHttp(newForm.url)}
          name="url"
          placeholder="Url"
          onChange={handleChange}
        />
        <input type="submit" value="Create Bookmark" className="input-create-bookmark" />
      </form>
  )
  if (props.bookmarks) {
    return (
      <section className="Index">
        <Searchbox value={props.searchTerm} handleChangeSearch={e => props.handleChangeSearch(e.target.value)} />
        {form}
        {props.bookmarks.map(bookmark => {
          return (
            <div key={bookmark._id} className="bookmark">
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