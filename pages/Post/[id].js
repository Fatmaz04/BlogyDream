import { useRouter } from 'next/router';
import { AppContext } from '../../components/context';
import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import DetailedBlog from '../../components/DetailedBlog';
import styles from  '../../styles/DetailedBlog.module.css'

export default function Post() {
  const router = useRouter();
  const { fetchBlog } = useContext(AppContext);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const getBlogPost = async () => {
      const postId = router.query.id;
      const fetchedBlog = await fetchBlog(postId);
      setBlog(fetchedBlog);
    };

    if (router.query.id) {
      getBlogPost();
    }
  }, [fetchBlog, router.query.id]);

  return (
    <>
    <div className={styles.container}>
    <DetailedBlog Blog={blog}/>
    </div></>
  ); 
}
