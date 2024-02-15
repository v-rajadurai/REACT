import { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableRow, TableContainer, TableHead } from '@mui/material';
export default function Fetch()
{
    const[data,setdata]=useState([]);
    const[error,seterror]=useState(null);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setdata(response.data);
        })
        .catch((error)=>{
        seterror("error")  
        })
    },[]);
    return(
        <TableContainer>
            <h1>MUI TABLE</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item)=>
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}