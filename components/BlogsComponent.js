import BlogComponent from "./BlogComponent"
import React, { useContext } from 'react';
import { AppContext } from "./context";
import styles from "../styles/Home.module.css";


export default function BlogsComponent() {
  const { Blogs } = useContext(AppContext);
	return (
		<div className={styles.container}>
			{Blogs.map(Blog => <BlogComponent key={Blog.id} Blog={Blog} />)}
		</div>
	);
  }