import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { student } from "../utils/data";
import { creatStudents } from "../api/students";

interface props {
  students: student[];
  setStudents: Dispatch<SetStateAction<student[]>>;
}

const inst = { id: 77, fullName: "", age: "", email: "", class: "", year: "" };

export const Addstd = ({ setStudents, students }: props) => {
  const [formData, setFormData] = useState(inst);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlesupmitChange = async () => {

      const data = await creatStudents(formData)
      setStudents([...students, data]);
      setFormData(inst); 

  };






  useEffect(() => {
    if (formData.fullName === "Admin") {
      alert("xxxxxxxxxxxxxxxxxxxxxx");
    }
  }, [formData.fullName]);

  return (
    <Paper
      sx={{
        width: 300,
        padding: 5,
        marginTop: 1,
        gap: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        onChange={handleChange}
        value={formData.fullName}
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.age}
        id="outlined-basic"
        label="Age"
        name="age"
        variant="outlined"
        type="number"
      />
      <TextField
        onChange={handleChange}
        value={formData.email}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.class}
        id="outlined-basic"
        label="Class"
        name="class"
        variant="outlined"
      />
      {/* <TextField
        onChange={handleChange}
        value={formData.year}
        id="outlined-basic"
        label="Year"
        name="year"
        variant="outlined"
      /> */}
      <Button onClick={handlesupmitChange} variant="contained">
        Submit
      </Button>
    </Paper>
  );
};
