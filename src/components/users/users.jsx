import { gql, useQuery } from "@apollo/client"
import "./users.css"




const Users = (props) => {
    let { loading, error, data } = useQuery(GET_USERS)
    console.log(data);
    if (data) {
        data = data.getusers
        console.log(data);
    }
    return (
        <>
        <div className="userlist-container">
            <div className="userlist-attributes" style={{ display: 'flex', flexDirection: "row", margin: "20px" }}>
                <h3>ID</h3>
                <h3>Email</h3>
                <h3>Username</h3>

            </div>
            <hr/>
            <div className="userlist-details">
                {data&&
                    data.map((item, index) => {
                        return (
                            <div style={{ display: "flex", flexDirection: "row", }} key={index}>
                                <h6 style={{marginLeft:"6rem", marginRight:"12rem"}}>{item.id}</h6>
                                <h6>{item.email}</h6>
                                <h6 style={{marginLeft:"18rem", textAlign:"left"}}>{item.username}</h6>
                            </div>
                            

                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Users

const GET_USERS = gql`
query Getusers {
  getusers {
    id
    email
    username
    createdAt
  }
}
`