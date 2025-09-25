import React from 'react'
import queryclient from './main'
import {useState} from 'react'
import { useMutation,useQueryClient, UseMutationResult } from '@tanstack/react-query'
type user={
    name:string
}
const adduser=async(newuser:user):Promise<user>=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(newuser)
    });
    return data.json()
}

const FOrm2 = () => {
    const queryclient=useQueryClient()
    const[name,setName]=useState("")
    const mutation=useMutation({
        mutationFn:adduser,
        onSuccess:()=>{
            queryclient.invalidateQueries({
                queryKey:["usernewdata"]
                
            })
            setName("");
        }
    })

    const handlesubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        mutation.mutate({name})

    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" value={name}
            placeholder="enter user name"
           
           onChange={(e)=>setName(e.target.value)}></input>
        <button type="submit">{mutation.status=="pending"?"adding":"add user"}</button>
        </form>
        
        {mutation.isSuccess&&"user added sucesfull"}
        {mutation.isError&&"error occured"}
    </div>
  )
}

export default FOrm2
