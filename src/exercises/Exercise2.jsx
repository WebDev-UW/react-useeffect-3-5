import React, { useState, useEffect } from "react";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  // API URL (open in your browser to see what the data looks like): https://jsonplaceholder.typicode.com/posts

  /* Fetch Usage (for JSON data):
		fetch("url").then(res => res.json()).then(res => {
			// do something with res
		})
	*/

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        // TODO: Render each post as a div with an <h3 /> for the post title and a <p /> for the post body
        <>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserPosts;
