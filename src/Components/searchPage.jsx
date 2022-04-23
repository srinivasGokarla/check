import React, { useEffect, useState } from "react";
import './Nav.css'
import { Pagination } from "@mui/material";
import  PrimarySearchAppBar from "./Navbar";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  
  console.log(search)
const [arr,setArr] = useState(null)


const getData = () => 
fetch("http://localhost:3000/mens")
.then((res)=> res.json())

useEffect(() => {
  getData().then((arr) => setArr(arr))
  console.log(arr)
}, [])



  
  return <div className="search">
    <PrimarySearchAppBar />
    <h1>Search Mens Fashion</h1>
    <input type="text" onChange={(e)=>setSearch(e.target.value)} />
   { 
     arr && arr.filter((el)=>{
       if(search === ""){
         return el;
       }
       else{
         return el.title.toLowerCase().includes(search.toLowerCase())
       }
     })
     .map((el,i)=>{
       return (
       <div key={i}>
         <p>{el.description}</p>
         <p>{el.title}</p>
         <p>{el.original_price}</p>
         <p>{el.discounted_price}</p>

         <hr/>
         </div>
       )
     })
   }
   <Pagination count={10} />
    
 
 
  </div>;
};

export default SearchPage;