
import Link from 'next/link'
import styles from "./page.module.css"

function Home() {
  return (
       <div className={styles.container}>
      <h1 className={styles.title}>This is an Example of SSG Pagination in Next js</h1>
      <p className={styles.description}>This is the home page.</p>
        <Link href="/Pagination">
        <div className={styles.link}>Pagination</div>
        </Link>
        <br/>
        <Link href="/Scroll">
          <div className={styles.link}>Scroll</div>
        </Link>
      </div>
  )
}

export default Home



