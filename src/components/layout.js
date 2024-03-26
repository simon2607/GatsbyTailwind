import React from "react";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <div>
          <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>                
                </li>
                <li>
                      <Link to="/contact">Contact</Link>
                </li>
            </ul>
          </nav>
         <Header/>
         {children}
         <Footer/>
        </div>
    )
}

export default Layout