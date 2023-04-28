import { gql, useMutation } from '@apollo/client';

import axios from 'axios'

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./postprop.css";
import Progressbar from '../Progress_bar';
import AreaDetail from './Postpropform_comp/AreaDetail';
import BasicDetails from './Postpropform_comp/BasicDetails';
import LocationDetails from './Postpropform_comp/LocationDetails';
import PostPhoto from './Postpropform_comp/PostPhoto';
import RoomDetails from './Postpropform_comp/RoomDetails';
import TellAboutProp from './Postpropform_comp/TellAboutProp';
import Markonmap from './Postpropform_comp/Markonmap';
import propertyContext from '../../context/property/propertyContext';
import Navigation from '../../routes/navigation/navigation.component';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../state/actioncreators'
const PostPropertyForm = () => {
    // const users=useSelector(state=>state.user_func)
    // const [userstate, setuserstate] = useState(users)
    // const login_id=useSelector(state=>state.login_id)
    const dispatch = useDispatch()
    const { postprop } = bindActionCreators(actioncreators, dispatch)
    //navigation
    const navigate = useNavigate()
    //

    //progress
    const [progress, setProgress] = useState(0)
    //
    //useContext
    const context = useContext(propertyContext)
    const { prop, setProp } = context
    //
    // const backend_clear=async()=>{
    //     const resp = await fetch(process.env.REACT_APP_BACKEND_URL+'/clear', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     });
    // }
    // const backend_fun=async()=>{


    //   const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/adduser', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(users)
    //   });

    // }



    // useEffect(() => {
    //     backend_clear()
    //     backend_fun()
    // // eslint-disable-next-line

    // }, [users])

    //formdata
    let fdata2 = {
        city: "",
        Apartment_society: '',
        Locality: '',
        sublocality: '',
        houseno: '',
        property_title: '',
        abt_property: '',
        property_age: '',
        price: '',
        owner_name: '',
        phoneno: '',
        area: '',
        bedrooms: '',
        Bathrooms: '',
        Balconies: '',
        floorno: '',
        purpose: '',
        prop_cat: '',
        Area_Unit: '',
        image_file: {},
        image: {},
        imgname: '',
        isimg: 0,
        lat: 28.5,
        lng: 76.9,
    }
    //
    const [page, setpage] = useState(1)
    const [fields, setfields] = useState(fdata2)

    const [addProperty, { loading }] = useMutation(ADD_PROPERTY, {
        update(_, result) {
            console.log("res")
            console.log(result)
            navigate('/search')
        },
        onError(err) {
            console.log(err)
            console.log(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: {
            propInput: {
                title: fields.property_title,
                category: fields.prop_cat,
                age: Number(fields.property_age),
                purpose: fields.purpose,
                description: fields.abt_property
            },
            addressInput: {
                apartment_society: fields.Apartment_society,
                locality: fields.Locality,
                city: fields.city,
                houseno: fields.houseno,
                floorno: fields.floorno,
                sublocality: fields.sublocality
            },
            locationInput: {
                longitude: Number(fields.lng),
                latitude: Number(fields.lat)
            },
            dimensionInput: {
            },
            dimensionsInput: {
                bedrooms: Number(fields.bedrooms),
                bathrooms: Number(fields.Bathrooms),
                balconies: Number(fields.Balconies)
            },
            areaInput: {
                value: Number(fields.area),
                unit: fields.Area_Unit
            },
            priceInput: {
                value: Number(fields.price),
                currency: 'Ruppee'
            },
            imgname: fields.imgname
        }
    })

    const handleNext = (e) => {
        setTimeout(() => {
            setpage(page + 1);
        }, 100);


        setProgress(progress + 15)


        e.preventDefault();
        console.log(fields)

    }
    const handlePrev = (e) => {
        setProgress(progress - 18)
        e.preventDefault();
        setpage(page - 1);
    }


    const handleSubmit = async (e) => {

        // localStorage.setItem('body',data)
        e.preventDefault();
        console.log(" here")
        console.log(fields)
        addProperty()



        // console.log(login_id)
        // backend_clear()
        // backend_fun()
        // setuserstate({...userstate[login_id],posted_property:userstate[login_id].posted_property.concat(fields)})
        // backend_fun({...userstate[login_id],posted_property:userstate[login_id].posted_property.concat(fields)})
        // postprop(fields,login_id)
        // setProp(prop.concat(fields))
        // console.log(prop)

    }
    const handleChange = (e) => {
        const name = e.target.name
        const val = e.target.value
        setfields({ ...fields, [name]: val })
    }
    const handleChange_file = async (e) => {
        const name = e.target.name
        const val = e.target.files[0]
        let formData = new FormData()
        formData.append('file', val)
        const res = await (await fetch(`${process.env.REACT_APP_BACKEND_URL}/uploadImage`, {
            method: 'POST',
            body: formData,
        })).json()
        console.log(res)
        if (res) {
            console.log(`{process.env.REACT_APP_BACKEND_URL}/`+res.filename)
            console.log(`{process.env.REACT_APP_BACKEND_URL}/` + res.filename)
            setfields({ ...fields, imgname: res.filename, isimg: 1, image: URL.createObjectURL(e.target.files[0]) })
        }
    }

    const pageChanger = () => {
        if (page === 1) {
            return <BasicDetails fdata={fields} handleChange={handleChange} />
        }
        if (page === 2) {
            return <LocationDetails fdata={fields} handleChange={handleChange} />
        }
        if (page === 4) {
            return <RoomDetails fdata={fields} handleChange={handleChange} />
        }
        if (page === 5) {
            return <AreaDetail fdata={fields} handleChange={handleChange} />
        }
        if (page === 6) {
            return <TellAboutProp fdata={fields} setfdata={setfields} handleChange={handleChange} />
        }
        if (page === 7) {
            return <PostPhoto fdata={fields} handleChange={handleChange} handleChange_file={handleChange_file} />
        }
        if (page === 3) {
            return <Markonmap fdata={fields} setfdata={setfields} />
        }

    }


    return (
        <>
            <div className="postform_container">
                <Navigation></Navigation>


                <form action="/post" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-body">



                        <div className="initial-container">


                            <div className="postprop_header" >
                                <p className="italic_font" style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}>Begin posting your
                                    property</p>
                            </div>

                            <div style={{ "margin": "3px", "height": "3px" }}>
                                <Progressbar bgcolor="black" progress={progress} height={3} />
                            </div>
                            {pageChanger()}



                            <div className='row justify-content-between' style={{ "textAlign": "center", "margin": "0px", }}>
                                <div className="col-4">

                                    <button onClick={handlePrev} className="btn btn-outline-dark"
                                        style={{ "padding": "5px 4vw", "border": "3px solid #886ce4", "backgroundColor": "#886ce4", "color": "#000000", "fontFamily": "monospace", "fontSize": "18px", "fontWeight": "bold" }} disabled={page === 1 ? 1 : 0}>Previous</button>
                                </div>
                                <div className="col-4">

                                    {page !== 7 && <button onClick={handleNext} className="btn btn-outline-dark"
                                        style={{ "padding": "5px 4vw", "border": "3px solid #886ce4", "backgroundColor": "#886ce4", "color": "#000000", "fontFamily": "monospace", "fontSize": "18px", "fontWeight": "bold" }}>Next</button>}
                                    {page === 7 && <button type="submit" className="btn btn-outline-dark"
                                        style={{ "padding": "5px 4vw", "border": "3px solid #886ce4", "backgroundColor": "#886ce4", "color": "#000000", "fontFamily": "monospace", "fontSize": "18px", "fontWeight": "bold" }}>Submit</button>}
                                </div>

                            </div>


                        </div>
                    </div>


                </form>
            </div>

        </>

    )

}
const ADD_PROPERTY = gql`
    mutation Addproperty($propInput: propInput, $addressInput: addressInput, $locationInput: LocationInput, $dimensionsInput: DimensionsInput, $areaInput: AreaInput, $priceInput: PriceInput,$imgname: String) {
        addproperty(propInput: $propInput, addressInput: $addressInput, locationInput: $locationInput, dimensionsInput: $dimensionsInput, areaInput: $areaInput, priceInput: $priceInput,imgname: $imgname) {
            id
            title
            owner_name
            owner_email
            address {
                apartment_society
                city
                floorno
                houseno
                locality
                sublocality
            }
            dimensions {
                area {
                    unit
                    value
                }
                balconies
                bathrooms
                bedrooms
            }
            location {
                latitude
                longitude
            }
            category
            age
            purpose
            description
            price {
                value
                currency
            }
            imgname
            createdAt
        }
}

`
export default PostPropertyForm