import React, { useState } from 'react';
import Filter from './search_components/Filter/Filter';
import Map from './search_components/Map/Map';
import Results from './search_components/Results/Results';
import './Search.css';
import Navigation from '../../routes/navigation/navigation.component';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actioncreators} from '../../state/actioncreators'
const Search = () => {
  // const users=useSelector(state=>state.user_func)
  // console.log(users)
  const [res, setres] = useState([])
  const [curdata, setcurdata] = useState(null)
  const [coords, setcoords] = useState(['54','36'])
  return (
    <>
    <Navigation bgcolor="black"/>
    <div className="mt-4" >
    <div className="row mainn">
    <div className="col-3" style={{"height":"100%"}}>
      <Filter res={res} setres={setres}/>
    </div>
    <div className="col-4 " style={{"overflow-y":"auto","maxHeight":"100vh","scrollbarWidth":"none"}}>
    <Results res={res} setres={setres} coords={coords} setcoords={setcoords} data={curdata} setdata={setcurdata}/>
    </div>
    <div className="col-5">
      <Map lat={coords[0]} lng={coords[1]} data={curdata}/>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Search