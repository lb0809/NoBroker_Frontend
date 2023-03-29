import "../Admin_CSS/Admin_home.css"


const AdminPropertyTableContainer = () => {
    return (
        <>
            <div className="AdminPropertyTableContainer">
                <div className="row user_table_row">


                    <div className="col-1">
                        <p className="p_class" >Id</p>
                    </div>
                    <div className="col-4">
                        <p className="p_class" >Email</p>
                    </div>
                    <div className="col-2">
                        <p className="p_class" >Category</p>
                    </div>
                    <div className="col-2">
                        <p className="p_class" >Price</p>
                    </div>
                    <div className="col-1">
                        <p className="p_class" >Area</p>
                    </div>
                    <div className="col-2">
                        <p className="p_class" >City</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AdminPropertyTableContainer;