import { Table, TableBody, TableCell, TableHead, TableRow, styled, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { listEmployeeAPI, deleteEmployeeAPI } from "../service/api";
import { Link, NavLink } from "react-router-dom";


const TableDesign = styled(Table)`
width: 50%;
margin: 2% auto 0 auto;
`
const Thead = styled(TableRow)`
background: #000;
& > th {
  color: #fff;
  font-size: 18px;
}
`
const Tbody = styled(TableRow)`
& > td {
  font-size: 15px;
}
`
const ListEmployee = () => {

  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    let response = await listEmployeeAPI();
    setEmployee(response.data);
  }

  const deleteEmployee = async (id) => {
    await deleteEmployeeAPI(id);
    getEmployees();
  }

  return (
    <><Typography variant="h4" className="text-center mt-3">Employee List</Typography>
      <Button variant="contained" component={Link} to='/add' style={{ left: '65%' }}>New Employee</Button>
      <TableDesign>
        <TableHead>
          <Thead>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Action</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {
            employees.map(emp => (
              <Tbody>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.company}</TableCell>
                <TableCell>{emp.city}</TableCell>
                <TableCell>
                  <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${emp.id}`} >Edit</Button>
                  <Button variant="contained" style={{ backgroundColor: 'red' }} onClick={() => deleteEmployee(emp.id)}>Delete</Button>
                </TableCell>
              </Tbody>
            ))
          }
        </TableBody>
      </TableDesign></>
  )
}

export default ListEmployee;