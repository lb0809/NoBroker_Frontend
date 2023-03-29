import Admin_Navbar from "./Admin_requirements/Admin_Navbar";
import "./Admin_CSS/Admin_user.css"
import "./Admin_CSS/Admin_ContactUs.css"
import { Link } from "react-router-dom";
import AdminContactUsTableContainer from "./Admin_requirements/Admin_contactUs_table_container";



const Admin_ContactUs = () => {
    return (
        <>
            <Admin_Navbar></Admin_Navbar>
            <div className="Admin_ContactUs_table_container">
                <form className="form-inline my-2 my-lg-0">
                    <input className="Search_bar" type="search" placeholder="Search" aria-label="Search" />
                    <button className="Search_button" type="submit">Search</button>
                </form>

                <div className="row user_table_row">
                    <div className="col-2">
                        <p className="p_class main_row_header">name</p>
                    </div>
                    <div className="col-3">
                        <p className="p_class main_row_header">Email</p>
                    </div>
                    <div className="col-2">
                        <p className="p_class main_row_header">Subject</p>
                    </div>
                    <div className="col-5">
                        <p className="p_class main_row_header">Concern</p>
                    </div>
                </div>


                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>
                <AdminContactUsTableContainer></AdminContactUsTableContainer>


                <nav aria-label="...">
                    <ul className="pagination pagination_container">
                        <li className="page-item disabled  ">
                            <span className="page-link pagination_button pagination_button_previous">Previous</span>
                        </li>
                        <li className="page-item "><Link className="page-link pagination_button pagination_button_numeric" href="#">1</Link></li>
                        <li className="page-item ">
                            <span className="page-link pagination_button pagination_button_numeric pagination_button_numeric_active">
                                2
                                {/* <span className="sr-only">(current)</span> */}
                            </span>
                        </li>
                        <li className="page-item "><Link className="page-link pagination_button pagination_button_numeric" href="#">3</Link></li>
                        <li className="page-item ">
                            <Link className="page-link pagination_button pagination_button_next" href="#">Next</Link>
                        </li>
                    </ul>
                </nav>

            </div>



        </>
    );
}

export default Admin_ContactUs;