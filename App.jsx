import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center" }}>
      <h1>📸 Basantigram</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{post.user}</h3>
          <img src={post.image} alt="post" style={{ maxWidth: "100%" }} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default App;