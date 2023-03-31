import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../state/actioncreators'
import { useSelector ,useDispatch} from 'react-redux';
const EditProfile = (props) => {
    const user=useSelector(state=>state.user)
    const dispatch = useDispatch()
    const { login,logout } = bindActionCreators(actioncreators, dispatch)
    const init={
        updated_username:user.user.username,
        updated_email:user.user.email,
        updated_password:user.user.password
    }
    const [updatedFields,setupdatedFields] = useState(init)
    const [updateuser, { loading }] = useMutation(UPDATED_USER, {
        update(_, result) {
            console.log("res")
            console.log(result)
            let a={...result.data.updateuser}
            a.username=updatedFields.updated_username
            a.email=updatedFields.updated_email
            console.log(a)
            login(a)
            props.setuser_n(a)
            setupdatedFields(init)
        },
        onError(err) {
            console.log(err)
            console.log(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: {
            username:updatedFields.updated_username,
            password:updatedFields.updated_password,
            email:updatedFields.updated_email
        }})
    const handleChange = (e) => {
        const name = e.target.name
        const val = e.target.value
        setupdatedFields({ ...updatedFields, [name]: val })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        updateuser()
    }
    return (
        <form action="/post" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className='Editprofile_container'>
            <div>
                <label htmlFor="updated_username" className='editprofile_label'>New Username</label><br />
                <input type="text" value={updatedFields.updated_username} onChange={handleChange} id='updated_username' name='updated_username' className='editprofile_input' />
            </div>
            <div>
                <label htmlFor="updated_email" className='editprofile_label'> New Email</label><br />
                <input type="email" value={updatedFields.updated_email} onChange={handleChange} id='updated_email' name='updated_email' className='editprofile_input' />
            </div>
            <div>
                <label htmlFor="updated_password" className='editprofile_label'>New Password</label><br />
                <input type="password" value={updatedFields.updated_password} onChange={handleChange} id='updated_password' name='updated_password' className='editprofile_input' />
            </div>

            <button type='submit' className='editprofile_submit_button'>Submit</button>
        </div>
        </form>

    );
}

const UPDATED_USER=gql`
    mutation Updateuser($username: String, $password: String, $email: String) {
  updateuser(username: $username, password: $password, email: $email) {
    createdAt
    email
    id
    token
    username
  }
}
`
export default EditProfile;