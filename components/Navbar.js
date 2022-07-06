import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>MyApp</h1>
      </div>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Ninja Listing</Link>
    </nav>  
  );
};

export default Navbar;
