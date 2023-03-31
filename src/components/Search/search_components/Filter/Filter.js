import { gql, useQuery } from '@apollo/client';
import React, { useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import propertyContext from '../../../../context/property/propertyContext';
import Navigation from '../../../../routes/navigation/navigation.component';
import "./Filter.css";
const Filter = (props) => {
  const { res, setres } = props
  let { loading, error, data } = useQuery(GET_PROPERTY, {
    skip: false
  })

  if (data) {
    data = data.getProperties
    setres(data)
    console.log(data)
  }
  //
  // let {load, err, dat} = useQuery(GET_USERS)
  // const{response, setresponse} = props
  // if(dat){
  //   dat = dat.getUsers
  //   setresponse(dat)
  //   console.log(dat)
  // }

  const [selected, setselected] = useState({
    location: '0',
    purpose: '0',
    prop_cat: '0',
    min_price: null,
    max_price: null,
    min_area: null,
    max_area: null
  })
  const { location, purpose, prop_cat, min_price, max_price, min_area, max_area } = selected
  //destructuring prop context
  // const context=useContext(propertyContext)
  // const{prop2}=context
  // console.log(prop)
  //
  const filterop = () => {
    // alert("yo")
    if (data) {

      let r = data.filter(e => {
        console.log(e.dimensions.area.value)
        return (e.purpose === purpose || purpose === '0') && (e.address.city === location || location === '0') &&
          (e.category === prop_cat || prop_cat === '0') && (e.price.value >= min_price || min_price === '' || min_price === null) && (e.price.value <= max_price || max_price === '' || max_price === null) &&
          (e.dimensions.area.value >= min_area || min_area === '' || min_area === null) && (e.dimensions.area.value <= max_area || max_area === '' || max_area === null)
      })
      console.log("th")
      console.log(r)
      setres(r)
    }
  }
  useEffect(() => {
    filterop();
    // eslint-disable-next-line
  }, [selected, res])

  const handleChange = (e) => {
    const name = e.target.name

    const val = e.target.value
    console.log(val)
    setselected({ ...selected, [name]: val });
  }
  const handleChange_num = (e) => {
    const name = e.target.name

    const val = e.target.value
    console.log(val)
    setselected({ ...selected, [name]: (val === '' ? null : Number(val)) });
  }
  const handleClear = (e) => {
    e.preventDefault();
    setselected({
      location: '0',
      purpose: '0',
      prop_cat: '0',
      min_price: '',
      max_price: '',
      min_area: '',
      max_area: ''
    })
  }
  const handleSubmit = () => { }
  return (
    <>

      <form action="/post" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="container">
          <div className="container d-flex justify-content-between mb-3 pt-2">
            <div className='pt-2'>
              <h5>Filter</h5>
            </div>
            <div className='align-self-end' style={{ "marginTop": "-7px" }}>
              <button className='btn' onClick={handleClear}>Clear all</button>
            </div>
          </div>
          <div className="container">
            <label htmlFor="location">Location</label>
            <select className='location2' style={{ "width": "100%" }} name="location" id="location" size="1" value={location} onChange={handleChange}>
              <option value='0'>All</option>
              <option value="Delhi">Delhi</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>
          <div className="container mt-2">
            <label
              htmlFor="lookingto"
              className="form-label"
              style={{ margin: "0px", fontSize: "14px" }}

            >
              Looking To:{" "}
            </label>
            <div className="row px-3">
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="0"
                  type="radio"
                  name="purpose"
                  onChange={handleChange}
                  id=""
                  checked={purpose === 0}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  All
                </label>
              </div>
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="sell"
                  onChange={handleChange}
                  type="radio"
                  name="purpose"
                  id=""
                  checked={purpose === "buy"}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  Buy
                </label>
              </div>
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="Rent"
                  type="radio"
                  name="purpose"
                  onChange={handleChange}
                  id=""
                  checked={purpose === "Rent"}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  Rent
                </label>
              </div>
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="PG"
                  type="radio"
                  name="purpose"
                  onChange={handleChange}
                  id=""
                  checked={purpose === "PG"}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  PG
                </label>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <label
              htmlFor="PropertyCategory"
              className="form-label"
              style={{ margin: "0px", "fontSize": "14px" }}
            >
              {" "}
              Type Of Place{" "}
            </label>
            <div className="row px-3">
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="0"
                  type="radio"
                  name="prop_cat"
                  onChange={handleChange}
                  id=""
                  checked={prop_cat === 0}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  All
                </label>
              </div>
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="Residential"
                  type="radio"
                  name="prop_cat"
                  onChange={handleChange}
                  id=""
                  checked={prop_cat === "Residential"}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  Residential
                </label>
              </div>
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="Commercial"
                  type="radio"
                  name="prop_cat"
                  onChange={handleChange}
                  id=""
                  checked={prop_cat === "Commercial"}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  Commercial
                </label>
              </div>
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="Apartment"
                  type="radio"
                  name="prop_cat"
                  onChange={handleChange}
                  id=""
                  checked={prop_cat === "Apartment"}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  Apartment
                </label>
              </div>
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="House"
                  type="radio"
                  name="prop_cat"
                  onChange={handleChange}
                  id=""
                  checked={prop_cat === "House"}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  House
                </label>
              </div>
              <div className="form-check col-6">
                <input
                  className="form-check-input radio_color"
                  value="Land"
                  type="radio"
                  name="prop_cat"
                  onChange={handleChange}
                  id=""
                  checked={prop_cat === "Land"}
                />
                <label className="form-check-label notsosmall_font" htmlFor="">
                  Land
                </label>
              </div>
            </div>
          </div>
          <div className="container mt-2" style={{ "fontSize": "14px" }}>
            Price Range:
            <div className="d-flex">
              <div className="mx-0">
                <input style={{ "width": "100%", "borderRadius": "50" }} type="number" name='min_price' id='min' placeholder='Min' onChange={handleChange_num} value={min_price} />
              </div>
              <div className="mx-3">
                <input style={{ "width": "100%" }} type="number" name='max_price' id='max' placeholder='Max' onChange={handleChange_num} value={max_price} />
              </div>
            </div>
          </div>
          <div className="container mt-2" style={{ "fontSize": "14px" }}>
            Area(sq.ft):
            <div className="d-flex">
              <div className="mx-0">
                <input style={{ "width": "100%" }} type="number" name='min_area' id='min' placeholder='Min' onChange={handleChange_num} value={min_area} />
              </div>
              <div className="mx-3">
                <input style={{ "width": "100%" }} type="number" name='max_area' id='max' placeholder='Max' onChange={handleChange_num} value={max_area} />
              </div>
            </div>
          </div>

        </div>
      </form>
    </>
  )
}

// const GET_USERS=gql`
// query Getusers {
//   getusers {
//     id
//     email
//     username
//     createdAt
//   }
// }
// `

//
const GET_PROPERTY = gql`
  query GetProperties {
    getProperties {
      age
      address {
        apartment_society
        locality
        city
        houseno
        floorno
        sublocality
      }
      category
      createdAt
      description
      dimensions {
        area {
          value
          unit
        }
        bedrooms
        bathrooms
        balconies
      }
      id
      imgname
      location {
        longitude
        latitude
      }
      owner_email
      owner_name
      price {
        value
        currency
      }
      purpose
      title
    }
  }

`

export default Filter