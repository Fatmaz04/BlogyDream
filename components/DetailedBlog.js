import styles from "../styles/DetailedBlog.module.css";

export default function DetailedBlog({ Blog }) {
  return (
    <div className={styles.container}>
      <div className={styles.blog}>
        <h1 className={styles.header}>{Blog.header}</h1>
        <h3 className={styles.info}>Author: {Blog.blogger}</h3>
        <h3 className={styles.info}>Date Posted: {Blog.date}</h3>
        <p className={styles.body}>{Blog.body}</p>
      </div>
    </div>
  );
}
