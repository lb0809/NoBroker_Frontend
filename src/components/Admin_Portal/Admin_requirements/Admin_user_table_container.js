import "../Admin_CSS/Admin_home.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const AdminUserTableContainer = () => {
    const [userdata, userdatachange] = useState(null);

    // const fetchdata = async () => {
    //     const url = `${process.env.REACT_APP_BACKEND_URL}/fetchall`;

    //     let resp = await fetch(url);
    //     let r = await resp.json()
    //     console.log('its me');
    //     console.log(r);
    // }

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/fetchall").then((res) => {
            console.log(res);
            return res.json();
        }).then((resp) => {
            userdatachange(resp);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    // fetchdata();
    return (
        <>
            {userdata &&
                userdata.map(item => (
                    <div className="AdminUserTableContainer" key={item.id}>

                        < div className="row user_table_row" >

                            <div className="col-2">
                                <p className="p_class" >{item.id}</p>
                            </div>
                            <div className="col-2">
                                <p className="p_class" >{item.username}</p>
                            </div>
                            <div className="col-4">
                                <p className="p_class" >{item.email}</p>
                            </div>
                            <div className="col-2">
                                <p className="p_class" >{item.Phoneno}</p>
                            </div>
                            <div className="col-2">
                                <p className="p_class trash_button" ><Link href=""><i class="fa fa-trash trash_css"></i></Link></p>
                            </div>
                        </div>

                    </div>))}
        </>
    );
}

export default AdminUserTableContainer; 