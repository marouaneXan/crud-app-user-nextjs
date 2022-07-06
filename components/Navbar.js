import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>MyApp</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/">Ninja Listing</Link>
    </nav>  
  );
};

export default Navbar;
