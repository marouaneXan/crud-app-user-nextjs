import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorum saepe aspernatur repellendus voluptas reprehenderit quam ab autem, aliquid officiis ullam deserunt beatae tempora, expedita perspiciatis, porro vitae obcaecati aut.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo error facilis officiis natus nihil qui, voluptatem consequatur dolor earum asperiores eos dolorem assumenda laborum mollitia fugit sunt nam? Enim!</p>
      <Footer/>
    </div>
  )
}
