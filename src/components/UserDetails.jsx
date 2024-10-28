import PropTypes from "prop-types"
import { Link, useLoaderData } from "react-router-dom"

export default function UserDetails() {
    const userDetails = useLoaderData();
    const { name, email, website, phone } = userDetails;
    return (
        <div style={{ borderRadius: '15px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: '10px', marginTop: '20px' }}>
            <h3>Name: {name}</h3>
            <h4>Email:  {email.toLowerCase()}</h4>
            <h4>Phone:  {phone}</h4>
            <h4>Website:  {website}</h4>
            <Link to='/privacy'><button style={{ border: '2px solid blue' }}>Go Back</button></Link>
        </div>
    )
}


UserDetails.propTypes = {
    userDetails: PropTypes.object
}
