import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../Card/Card';
import './Results.css';
const Results = (props) => {
  const{res,setres,coords,setcoords,data,setdata}=props
  const [curres, setcurres] = useState(res)
  const [search, setsearch] = useState('')
  const filterop=()=>{
    let r=res.filter(e=>{
      return(e.title===search || search==='')
    })
    setcurres(r)
  }
  useEffect(() => {
    filterop()
    // eslint-disable-next-line 
  }, [res])
  
  const handleClick=(e)=>{
    e.preventDefault()
    filterop();
  }
  const handleChange=(e)=>{
    setsearch(e.target.value)
  }
  return (
    <>
      <div className="container">    
     <form action="/post">
          <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <input type="text" onChange={handleChange} value={search} name='search' id='search' placeholder="Search by Property..." aria-describedby="button-addon1" className="form-control border-0 bg-light"/>
              <div className="input-group-append">
                <button id="button-addon1" onClick={handleClick}  className="btn btn-link text-dark"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
          
      </form>
      </div> 
       
      {curres.length===0?<div className="container px-3" >Sorry, No Matches avilable</div>:curres.map((e)=>{return(<div className="container" style={{"backgroundColor":"white"}}>
        <Card data={e} coords={coords} setcoords={setcoords} curdata={data} setcurdata={setdata}/>
      </div>)})} 
      {/* <div className="container">
        <Card/>
      </div> 
      <div className="container">
        <Card/>
      </div> 
      <div className="container">
        <Card/>
      </div> 
      <div className="container">
        <Card/>
      </div>  */}
    </>
  )
}

export default Results