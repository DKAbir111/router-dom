import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav >

                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                <Link to="/blog" style={{ marginRight: '10px' }}>Blog</Link>
                <Link to="/users" style={{ marginRight: '10px' }}>Users</Link>
                <Link to="/about" style={{ marginRight: '10px' }} >About Us</Link>
                <Link to="/privacy" style={{ marginRight: '10px' }}>Privacy</Link>
            </nav>
        </div>
    )
}
