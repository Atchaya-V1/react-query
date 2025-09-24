import React from 'react'
import {useQueries } from '@tanstack/react-query'

const Test1 = () => {
         const Apicall=async()=>{
            const first=await fetch("https://api.github.com/repos/antonfrancisjeejo/flipkart-clone")
            const res=await first.json()
            return res
        }
        const secondfn= async()=>{
            const second=await fetch("https://api.github.com/repos/antonfrancisjeejo/flipkart-clone")
            const result=await second.json()
            return result
        }
        const final=useQueries({queries:[
           { queryKey:["githubdata"],
            queryFn:Apicall,
            staleTime:Infinity
        },
    {
        queryKey:["gitdata"],
        queryFn:secondfn,
        staleTime:Infinity
    }
    ]
    })
    
        if(final.some(r=>r.isLoading)){
            return<h1>loading...</h1>
        }
        if(final.some(q=>q.isError)){
            return <div>
                <h1>errro ocuured..</h1>
            </div>
        }
        return(
            <div>
                <h1>name is here:{final[0].data?.name||"no name found"}</h1>
                <h1>node id is here: {final[1].data?.node_id||"none found"}</h1>
            </div>
        )
}
export default Test1
