import { useState } from "react";
// import { Link } from "react";



// initial logic for forms is similar to our cheese app/people app frontend
// https://git.generalassemb.ly/SEIR-927/Unit_3_React_Express/blob/main/Day_08/lecture.md
// need to create buttons that can make make edit/delete requests




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

  // logic for determining if the API data has loaded or not
  // here might be a good place where we can put the delete/update buttons that point to update/delete routes for each bookmark
  const loaded = () => {
    return (
      props.bookmarks.map((bookmark, index) => {
        return (
          <div key={bookmark._id} className="bookmark">
            <a href={bookmark.url}>
              <h1>{bookmark.title}</h1>
            </a>
            {/* route the update button to a new form page? */}
            <a href="#"><button>Update</button></a>
            <a href="#"><button>Delete</button></a>
            </div>
        )
      })
    )
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };


  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.url}
          name="url"
          placeholder="Url"
          onChange={handleChange}
        />
        <input type="submit" value="Create Bookmark" />
      </form>
      {console.log("checking if bookmarks are loaded: ", props.bookmarks)}
      {props.bookmarks ? loaded() : loading()}
    </section>
  )
}


export default Index;
