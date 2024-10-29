import PropTypes from "prop-types"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"

export default function UserDetails() {
    const userDetails = useLoaderData();
    const { name, email, website, phone } = userDetails;
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    return (
        <div style={{ borderRadius: '15px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: '10px', marginTop: '20px' }}>
            <h3>Name: {name}</h3>
            <h4>Email:  {email.toLowerCase()}</h4>
            <h4>Phone:  {phone}</h4>
            <h4>Website:  {website}</h4>
            {/* <Link to='/privacy'><button style={{ border: '2px solid blue' }}>Go Back</button></Link> */}
            <button type="button" onClick={() => navigate(-1)}>Back</button>

        </div>
    )
}


UserDetails.propTypes = {
    userDetails: PropTypes.object
}
