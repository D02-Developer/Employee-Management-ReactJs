import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { saveEmployeeAPI } from "../service/api";
import { useNavigate } from "react-router-dom";

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

const AddEmployee = () => {

  const [employee, setEmployee] = useState(initialValues);
  const onValueChange = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
    console.log(employee);
  }

  const saveEmployee = async () => {
    await saveEmployeeAPI(employee);
    navigate('/');
  }

  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" className="text-center">Add Employee</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(event) => onValueChange(event)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(event) => onValueChange(event)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Input onChange={(event) => onValueChange(event)} name="company" />
      </FormControl>
      <FormControl>
        <InputLabel>City</InputLabel>
        <Input onChange={(event) => onValueChange(event)} name="city" />
      </FormControl>
      <FormControl>
        <Button onClick={() => saveEmployee()} variant="contained">SAVE</Button>
      </FormControl>
    </Container>
  )
}

export default AddEmployee;