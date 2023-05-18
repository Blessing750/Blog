import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blessing's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create" style={{
                  color: "black",
                  backgroundColor: 'red',
                  borderRadius: '8px'

             }}
                >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;