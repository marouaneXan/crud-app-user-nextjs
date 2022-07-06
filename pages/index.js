import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorum saepe aspernatur repellendus voluptas reprehenderit quam ab autem, aliquid officiis ullam deserunt beatae tempora, expedita perspiciatis, porro vitae obcaecati aut.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo error facilis officiis natus nihil qui, voluptatem consequatur dolor earum asperiores eos dolorem assumenda laborum mollitia fugit sunt nam? Enim!</p>
      <Link href="/ninjas">
        <a  className={styles.btn}>Ninjas Listening</a>
      </Link>
    </div>
  )
}
