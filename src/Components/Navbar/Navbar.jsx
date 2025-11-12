import Link from "./Link";


const Navbar = () => {

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
 
];


    return (
       <nav className="flex text-center text-2xl">
       {
        navigationData.map((nav )=> <Link key={nav.id} nav={nav}></Link>)
    }
       </nav>
    );
};

export default Navbar;