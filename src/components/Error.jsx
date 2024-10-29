import { Link, useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops! No Route Available.</h2>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/'><button>Go to Home</button></Link>
        </div>
    )
}
