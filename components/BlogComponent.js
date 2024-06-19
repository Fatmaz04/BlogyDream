import Link from 'next/link'
import styles from '../styles/Blog.module.css'

export default function BlogComponent({key,Blog}) {
    return (
      <>
      <div className={styles.container}>
        <h2 className={styles.header}>{Blog.header} <span className={styles.date}>{Blog.date}</span></h2>
        <p className={styles.details}>{Blog.body}</p>
        <Link href={`/Post/${Blog.id}`} className={styles.readmore}>Interested? Read more</Link>
        </div>
      </>
    )
  }