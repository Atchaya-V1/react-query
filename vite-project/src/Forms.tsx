import React from 'react'
import {useQuery} from '@tanstack/react-query'
type user={
    name:string;id:number
}
const fetching=async():Promise<user[]>=>{
    const result=await fetch("https://jsonplaceholder.typicode.com/users")
    const res=await result.json();
    return res
}

const Forms = () => {
    const{data,isLoading,isError}=useQuery({
        queryKey:["formdata"],
        queryFn:fetching,
    })
    if(isLoading){
        return <h1>its loading wait</h1>

    }
    if(isError){
        return <h2>error ocured</h2>
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>userid</td>
                    <td>username</td>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            </tr>))}           
            </tbody>
        </table>
      </div>       
  )
}

export default Forms
