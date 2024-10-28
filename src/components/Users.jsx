import PropTypes from 'prop-types'
export default function Users() {
    return (
        <div>
            <h2>This is users page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi eligendi deserunt repudiandae quod saepe vel, a soluta illo consequatur!</p>

            <div>
                {/* <p>{name}</p>
                <p>{email}</p> */}
            </div>
        </div>

    )
}
Users.propTypes = {
    user: PropTypes.object,
}
