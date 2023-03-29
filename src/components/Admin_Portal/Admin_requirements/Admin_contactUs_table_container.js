import "../Admin_CSS/Admin_home.css"


const AdminContactUsTableContainer = () => {
    return (
        <>
            <div className="AdminContactUsTableContainer">
                <div className="row user_table_row">
                    <div className="col-2">
                        <p className="p_class">name</p>
                    </div>
                    <div className="col-3">
                        <p className="p_class">Email</p>
                    </div>
                    <div className="col-2">
                        <p className="p_class">Subject</p>
                    </div>
                    <div className="col-5">
                        <p className="p_class">Concern</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AdminContactUsTableContainer; 