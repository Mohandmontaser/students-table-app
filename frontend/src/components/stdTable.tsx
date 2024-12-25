import { student } from "../utils/data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useMemo } from "react";

interface props {
  students: student[];
}

export const StdTable = ({ students }: props) => {
  const studentScores = useMemo(() => {
    return students.map((s) => {
      const eligible = Math.random() > 0.5;    
      return { ...s, eligible };
    });
  }, [students]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Eligible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentScores.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.class}</TableCell>
              <TableCell>{item.eligible ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
