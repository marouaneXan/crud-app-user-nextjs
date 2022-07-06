export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  const path = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    path,
    fallback:false
  }
}

export const getStaticProps=async (context)=>{
  const id=context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
  const data= await res.json()
  return {
    params:{ninja:data}
  }
}
const Details = (ninja) => {
  return (
    <div>
      <h1>User details</h1>
      <h2>{ninja.name}</h2>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.adress.city}</p>
    </div>
  );
};

export default Details;