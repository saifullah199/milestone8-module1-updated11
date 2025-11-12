import { useState } from "react";
import Link from "./Link";
import { Menu, X } from 'lucide-react';

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
 
];

const Navbar = () => {

const [open,setOpen] = useState(false)
const links = navigationData.map((nav )=> <Link key={nav.id} nav={nav}></Link>)


    return (
        // own designed navbar
       <nav className="flex justify-between mx-10 " >
        <span className="flex" onClick={() => setOpen(!open)}>
            {open? 
            <X className="md:hidden"></X>:
            <Menu className="md:hidden" />
            }

            <ul className={`md:hidden absolute  bg-amber-200 duration-1000
                ${open ? 'top-8':'-top-40'} rounded-b-md
                `}>
                {
                    links
                }
            </ul>
            <h3 className="ml-4"> Navbar</h3>
        </span>
       <ul className="md:flex hidden">
         {
         links
        }
       </ul>
       <button>Sign In</button>
       </nav>
    );
};

export default Navbar;