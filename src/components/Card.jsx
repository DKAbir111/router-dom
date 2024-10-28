import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Card({ user }) {
    return (
        <div style={{ borderRadius: '15px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: '10px' }}>
            <h3>Name: {user.name}</h3>
            <h4>Email:  {user.email.toLowerCase()}</h4>
            <h4>Phone:  {user.phone}</h4>
            <Link to={`/users/${user.id}`}><button style={{ border: '2px solid blue' }}>Show More</button></Link>
        </div>
    )
}

Card.propTypes = {
    user: PropTypes.object,
}
