import React from 'react'
import './Card.css';
const Card = (props) => {
  const{coords,setcoords,data,curdata,setcurdata}=props
  const{address,age,category,description,dimensions,imgname,location,owner_name,price,purpose,title}=data
  const{apartment_society,city,floorno,houseno,locality,sublocality}=address
  const{area,balconies,bathrooms,bedrooms}=dimensions
  const{latitude,longitude}=location

  // const{property_title,city,Locality,price,area,bedrooms,Bathrooms,image}=data
  const handleClick=()=>{
    setcoords([latitude,longitude])
    setcurdata(data)
  }
  return (
    <>
        <button className="btn" onClick={handleClick}>    
        <div className="card mine mb-3" style={{"width":"18rem","borderRadius":"10px"}}>
            {/* <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">ff</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div> */}
            <div className="" style={{"width":"100%","height":"38vh"}} >
              <img className="" style={{"width":"100%","height":"100%"}} src={`${process.env.REACT_APP_BACKEND_URL}/` +imgname} alt="" />
            </div>
            <div className="property-details row" >
                    <div className='container col-8 pt-2'>
                        <h5 className="property-name pt-2 px-1 ">{title}</h5>
                        <p className="property-info pt-2 mx-1" style={{"paddingLeft":"2px"}} >{`${locality} - ${city}, India`}</p>
                    </div>
                    <div className="price col-4 mt-3"><h3>{`₹${price.value}`}</h3></div>
                    <div><hr style={{"width":"100%"}} /> </div>
            </div>
            <div className="icons row mt-0 pt-0">
                    <div className="col-4">
                    <i className="fa fa-bed" aria-hidden="true" style={{ marginLeft: "0.01vw", marginRight: "0.2vw", color: "black" }}><span style={{ "marginLeft": "0.3vw", "color": "gray","fontSize":"11px" }}>{bedrooms} </span></i>
                    </div>
                    <div className="col-4">
                    <i className="fa fa-bath" aria-hidden="true" style={{ marginLeft: "0.01vw", marginRight: "0.2vw", color:"black"}}><span style={{ marginLeft: "0.3vw", color: "gray","fontSize":"11px" }}>{`${bathrooms} Bath `}</span></i>
                    </div>
                    <div className="col-4">
                    <i className="fa fa-expand" aria-hidden="true" style={{ marginLeft: "0.01vw", marginRight: "0.2vw", color:"black"}}><span style={{ marginLeft: "0.3vw", color: "gray","fontSize":"11px" }}>{`${area.value}${area.unit}`} </span></i>
                    </div>
            </div>
        </div>
        </button>
    </>
  )
}

export default Card