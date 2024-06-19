import React, { useState, useEffect } from 'react';
import { AppContext } from '../components/context';
import '../styles/global.css'
import '../styles/variables.css'
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsfromserver = await fetchBlogs();
      setBlogs(blogsfromserver);
    };
    getBlogs();
  }, []);

  // Fetch Blogs
  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();
    return data;
  };

  // Fetch a Blog
  const fetchBlog = async (id) => {
    const res = await fetch(`http://localhost:5000/blogs/${id}`);
    const data = await res.json();
    console.log("here");
    console.log(data)
    return data;
  };

  // Add a Blog
  const addBlog = async (blog) => {
    const res = await fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    const data = await res.json();
    setBlogs([...Blogs, data]);
  };

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <AppContext.Provider value={{ Blogs, addBlog, fetchBlog }}>
      <AnimatePresence mode='wait'>
      <Layout>
      {loading && <Loading />}
      <Component {...pageProps} />
      </Layout>
      </AnimatePresence>
    </AppContext.Provider>
  );
}

export default MyApp;
