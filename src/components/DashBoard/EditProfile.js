import React from 'react';

const EditProfile = () => {
    return (
        <div className='Editprofile_container'>
            <div>
                <label htmlFor="updated_username" className='editprofile_label'>New Username</label><br />
                <input type="text" id='updated_username' name='updated_username' className='editprofile_input' />
            </div>
            <div>
                <label htmlFor="updated_email" className='editprofile_label'> New Email</label><br />
                <input type="text" id='updated_email' name='updated_email' className='editprofile_input' />
            </div>
            <div>
                <label htmlFor="updated_password" className='editprofile_label'>New Password</label><br />
                <input type="text" id='updated_password' name='updated_password' className='editprofile_input' />
            </div>

            <button type='submit' className='editprofile_submit_button'>Submit</button>
        </div>


    );
}

export default EditProfile;