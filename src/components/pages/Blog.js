import React from "react"; 
import Articles from "../articles/Articles";

function Blog() {
	return (
		<div className="blog">
			<div className="blog__wrapper">
				<h2>Featured Blogs</h2>
				<p>All Articles</p>
				<Articles className="blog__articles"></Articles>
			</div>
		</div>
		
	);
}

export default Blog;