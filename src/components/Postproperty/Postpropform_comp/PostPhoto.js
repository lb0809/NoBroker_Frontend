import React from 'react'
import "../postprop.css";
const PostPhoto = (props) => {
  const { fdata, handleChange, handleChange_file } = props
  const { price, owner_name, phoneno, isimg, image_file, image } = fdata
  return (
    <>
      <div className="postprop_subheader" >
        <p className="italic_font" style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}>Upload Photo
        </p>
      </div>
      <div className="form_element_box" style={{ "textAlign": "center" }}>
        <img src={!isimg ? `../../../images/user1.svg` : image} alt="not found" style={{ "height": "4rem " }} />
        <br />
        <label htmlFor="image" style={{ "fontSize": "24px" }}>{!isimg ? `Select a file:` : `${image_file.name}`}</label><br />
        <input type="file" style={{ "fontSize": "24px", "marginLeft": "8vw" }} className="file-upload-button" name="image_file" id="image_file" onChange={handleChange_file} />
      </div>
      <div className="postprop_subheader" >
        <p className="italic_font" style={{ "textAlign": "center", "margin": "0px", "fontSize": "30px", "fontFamily": "monospace" }}>Pricing and Ownership</p>
      </div>
      <div className="form_element_box" style={{ "margin": "20px", "padding": "20px" }}>
        <input type="number" className="form-control textbox" style={{ "height": "5vh", "border": "1px solid black", "borderRadius": "0px" }} name="price" id="" placeholder="₹ Expected Price" required onChange={handleChange} value={price} />
        <br />
        <input type="text" className="form-control textbox" style={{ "height": "5vh", "border": "1px solid black", "borderRadius": "0px" }} name="owner_name" id="" placeholder="Owner's Name" onChange={handleChange} value={owner_name} />
        <br />
        <input type="number" className="form-control textbox" style={{ "height": "5vh", "border": "1px solid black", "borderRadius": "0px" }} name="phoneno" id="" placeholder="Phone Number" onChange={handleChange} value={phoneno} />

      </div>
    </>
  )
}

export default PostPhoto