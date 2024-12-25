
import { useEffect, useState } from "react"
import { Addstd } from "./components/Addstd"
import{StdTable} from "./components/stdTable"
import { student } from "./utils/data"
import { FetchStudents } from "./api/students"



function App() {
  
  const  [students,setStudents] = useState<student[]>([])


  useEffect(()=>{
    FetchStudents().then ((data) => setStudents(data)).catch((err)=>{alert(err)})
  },[])

  return (
    <>
      <StdTable students={students} />
      <Addstd students={students} setStudents={setStudents}/>
    </>
  )
}

export default App
