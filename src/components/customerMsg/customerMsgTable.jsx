import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./customerMsgTable.css";
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

export default function CustomerMsgTable() {

        // rows = [
        //     createData(data.getProperties[0].owner_email, data.getProperties[0].category, data.getProperties[0].price.value, data.getProperties[0].address.city, data.getProperties[0].address.city),
        //     createData(data.getProperties[1].owner_email, data.getProperties[1].category, data.getProperties[1].price.value, data.getProperties[1].address.city, data.getProperties[0].address.city),
        //     createData(data.getProperties[2].owner_email, data.getProperties[2].category, data.getProperties[2].price.value, data.getProperties[2].address.city, data.getProperties[0].address.city),
        //     createData(data.getProperties[3].owner_email, data.getProperties[3].category, data.getProperties[3].price.value, data.getProperties[3].address.city, data.getProperties[0].address.city),
        // ];
        //     for (let i = 0; i < data.getProperties.length; i++) {
        //         rows.push(createData(data.getProperties[i].owner_email, data.getProperties[i].category, data.getProperties[i].price.value, data.getProperties[i].address.city, data.getProperties[i].address.city))
        //     }

        // }
        let { loading, error, data } = useQuery(GET_QUERIES)
        let rows = []
        console.log(data);
        if (data) {
            data = data.getQueries
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                rows.push(createData(data[i].createdAt, data[i].email, data[i].message, data[i].name))
            }
        }
        return (
            <div className="Table">
                <h3>Recent Orders</h3>
                <hr />
                <TableContainer
                    component={Paper}
                    style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Created at</TableCell>
                                <TableCell align="left">email</TableCell>
                                <TableCell align="left">message</TableCell>
                                <TableCell align="left">name</TableCell>
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



const GET_QUERIES = gql`
query GetQueries {
    getQueries {
      createdAt
      email
      message
      name
    }
  }
`