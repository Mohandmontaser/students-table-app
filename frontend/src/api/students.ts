import { student } from "../utils/data";



const BASD_URL = "http://localhost:3000/Students";

export const FetchStudents = async ()=>{


        const response = await fetch("http://localhost:3000/Students");

        if(!response.ok){
            throw new Error(`${response.statusText}:${response.status}`)
        }
        return await response.json();


};


export const creatStudents = async (data:student) =>{

        const response = await fetch(BASD_URL , {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "content-type":"application/json"

                
            }
        })
        if(!response.ok){
            throw new Error(`${response.statusText}:${response.status}`)
        }
        return await response.json()





}