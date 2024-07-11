import React, { useEffect, useState } from 'react'

const Cleanup = () => {
    const [product, setProduct] = useState("");

    useEffect(() =>{
            
        let id = setTimeout(()=>{
            console.log("Running useEffect");
            console.log("Searching for product", product);
        },1000)

        return()=>{
            clearInterval(id);
        }

    },[product]);

    const inputChangeHandler = (ev)=>{
        // console.log(ev.target.value);
        setProduct(ev.target.value);
    //     console.log("calling API");
    }

  return (
    <div>
         <h1>Learning about Clean Ups!</h1>
         <input type='text' placeholder='Search Products' onChange={inputChangeHandler} />
         <button>Search</button>
    </div>
  )
}

export default Cleanup