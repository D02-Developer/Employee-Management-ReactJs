import { useEffect, useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { updateEmployeeAPI, getEmployeeAPI } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
  margin-top: 20px;
}
`
const initialValues = {
  name: '',
  email: '',
  company: '',
  city: ''
}

const EditEmployee = () => {

  const [employee, setEmployee] = useState(initialValues);
  const onValueChange = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
    console.log(employee);
  }

  const updateEmployee = async () => {
    await updateEmployeeAPI(employee, id);
    navigate('/');
  }

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSingleEmployee();
  }, []);

  const getSingleEmployee = async () => {
    let response = await getEmployeeAPI(id);
    setEmployee(response.data);
  }

  return (
    <Container>
      <Typography variant="h4" className="text-center">Edit Employee</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(event) => onValueChange(event)} name="name" value={employee.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(event) => onValueChange(event)} name="email" value={employee.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Input onChange={(event) => onValueChange(event)} name="company" value={employee.company} />
      </FormControl>
      <FormControl>
        <InputLabel>City</InputLabel>
        <Input onChange={(event) => onValueChange(event)} name="city" value={employee.city} />
      </FormControl>
      <FormControl>
        <Button onClick={() => updateEmployee()} variant="contained">UPDATE</Button>
      </FormControl>
    </Container>
  )
}

export default EditEmployee;