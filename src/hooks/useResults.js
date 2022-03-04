import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default ()=>{
    const [results, setResults]=useState([]);
    const [errMsg, setErrorMessage]=useState('')
    const searchApi=async (searchTerm)=>{
        try{
            const response=await yelp.get('/search',{
                params:{
                    limit: 50,
                    term:searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
            setErrorMessage("")
        }catch(e){
            setErrorMessage("Something went wrong")
            console.log(e)
        }
       
    }

    useEffect(()=>{
        searchApi('pasta')
    },[])

    return [searchApi, results, errMsg]
}