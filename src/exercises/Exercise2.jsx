import React, { useState, useEffect } from 'react';

const UserPosts = () => {
	const [posts, setPosts] = useState([])

	// API URL (open in your browser to see what the data looks like): https://jsonplaceholder.typicode.com/posts

	/* Fetch Usage (for JSON data):
		fetch("url").then(res => res.json()).then(res => {
			// do something with res
		})
	*/

	return (
		<div>
			{
				posts.map(post => (
					// TODO: Render each post as a div with an <h3 /> for the post title and a <p /> for the post body
					<>
					</>
				))
			}
		</div>
	);
};

export default UserPosts;