import BlogComponent from "./BlogComponent"
import React, { useContext } from 'react';
import { AppContext } from "./context";

export default function BlogsComponent() {
  const { Blogs } = useContext(AppContext);
	return (
		<div>
			{Blogs.map(Blog => <BlogComponent key={Blog.id} Blog={Blog} />)}
		</div>
	);
  }