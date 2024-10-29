import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav >

                <NavLink to="/" style={{ marginRight: '10px' }}>Home</NavLink>
                <NavLink to="/blog" style={{ marginRight: '10px' }}>Blog</NavLink>
                <NavLink to="/users" style={{ marginRight: '10px' }}>Users</NavLink>
                <NavLink to="/about" style={{ marginRight: '10px' }} >About Us</NavLink>
                <NavLink to="/privacy" style={{ marginRight: '10px' }}>Privacy</NavLink>

            </nav>
        </div>
    )
}
