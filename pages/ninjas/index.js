import Styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a href={`/ninjas/${ninja.id}`} className={Styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
