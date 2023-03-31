import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./Table.styles.css";
import { gql, useQuery } from "@apollo/client";

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

// const rows = [
//     createData(data.getProperties[0].owner_email, 18908424, "2 March 2022", "Approved"),
//     createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
//     createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
//     createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
// ];


const makeStyle = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    let { loading, error, data } = useQuery(GET_PROPERTIES)
    let rows=[]
    if (data) {
        console.log(data);
        
        rows = [
            createData(data.getProperties[0].owner_email, data.getProperties[0].category, data.getProperties[0].price.value, data.getProperties[0].address.city, data.getProperties[0].address.city),
            createData(data.getProperties[1].owner_email, data.getProperties[1].category, data.getProperties[1].price.value, data.getProperties[1].address.city, data.getProperties[0].address.city),
            createData(data.getProperties[2].owner_email, data.getProperties[2].category, data.getProperties[2].price.value, data.getProperties[2].address.city, data.getProperties[0].address.city),
            createData(data.getProperties[3].owner_email, data.getProperties[3].category, data.getProperties[3].price.value, data.getProperties[3].address.city, data.getProperties[0].address.city),
        ];
        
    }
    return (
        <div className="Table">
            <h3>Recent Properties</h3>
            <hr />
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Owoner's Email</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Price(₹)</TableCell>
                            <TableCell align="left">City</TableCell>
                            <TableCell align="left"> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                                </TableCell>
                                <TableCell align="left" className="Detailsss"> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


const GET_PROPERTIES = gql`
query GetProperties {
    getProperties {
        id
        title
        owner_name
        owner_email
      address {
            apartment_society
            locality
            city
            houseno
            floorno
            sublocality
        }
      dimensions {
        area {
                value
                unit
            }
            bedrooms
            bathrooms
            balconies
        }
      location {
            longitude
            latitude
        }
        category
        age
        purpose
        description
      price {
            value
            currency
        }
        imgname
        createdAt
    }
}
`