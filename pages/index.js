//Home Page
import React from "react";
import Navbar from "../components/Navbar";
import BlogsComponent from "../components/BlogsComponent";
import styles from "../styles/Home.module.css";
import { AppContext } from "../components/context";

export default function Home() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <>
          <div className={styles.container}>
            <BlogsComponent blogs={context.Blogs} />{" "}
          </div>
        </>
      )}
    </AppContext.Consumer>
  );
}
