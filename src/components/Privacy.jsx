import { useLoaderData } from "react-router-dom"
import Card from "./Card"

export default function Privacy() {
    const users = useLoaderData()
    return (
        <div>
            <div style={{ borderRadius: '15px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: '10px', marginBottom: '20px' }}>
                <h2>This is Privacy Page{users.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel quisquam voluptas in alias consectetur! Earum perferendis accusamus necessitatibus quos aperiam! Rem consequatur corrupti optio!</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
                {
                    users.map(user => <Card key={user.id} user={user} />)
                }
            </div>

        </div>
    )
}
