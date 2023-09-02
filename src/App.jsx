import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import NavBar from "./NavBar";

function App() {
  const [comments, setComments] = useState([]);
  const [postIdFilter, setPostIdFilter] = useState("");

  const filteredComments = comments.filter((comment) =>
    comment.postId.toString().includes(postIdFilter)
  );

  const API = `https://jsonplaceholder.typicode.com/comments`;
  const getComments = async () => {
    const response = await fetch(API);
    const comments = await response.json();
    setComments(comments.slice(0, 100));
  };

  const handleSelect =(postId)=>{
    setComments(comments.filter((comment) => comment.postId === postId))
  }
  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
    <NavBar/>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container  py-5">
          <div className="row">
            <div className="col-md-3"  style={{ overflowY: 'scroll', height: '80vh' }}>
              <h2>Filtered Comments</h2>
              <input
                type="text"
                placeholder="Enter Post ID to Filter"
                value={postIdFilter}
                onChange={(e) => setPostIdFilter(e.target.value)}
              />
              <ol>
                {filteredComments.map((comment) => (
                  <li
                    key={comment.id}
                    onClick={() => handleSelect(comment.postId)}
                    style={{
                      cursor: "pointer",
                      // backgroundColor:
                      //   selectedPost && selectedPost.id === comment.id
                      //     ? "lightgray"
                      //     : "white",
                    }}
                  >
                    {comment.name}
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-md-9"  style={{ overflowY: 'scroll', height: '80vh' }}>
              <h2>First Comment for Each Post</h2>
              <ul>
                {comments
                  .reduce((uniqueComments, comment) => {
                    if (
                      !uniqueComments.some(
                        (uniqueComment) =>
                          uniqueComment.postId === comment.postId
                      )
                    ) {
                      uniqueComments.push(comment);
                    }
                    return uniqueComments;
                  }, [])
                  .map((comment, index) => (
                    <Card key= {index} comment={comment} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
