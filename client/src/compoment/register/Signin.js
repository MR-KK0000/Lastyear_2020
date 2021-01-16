import React, {useState } from 'react'
import { useHistory }  from 'react-router-dom'

import API from '../../service/api'



const Signin = () =>{
    const history = useHistory()

    const [ user,setUser ] = useState('')
    const [ password,setPassword ] = useState('')

    const handleChangeUser = (e) =>{
        setUser(e.target.value)
    }
    const handleChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleSignIn = async() =>{
        try {
            console.log(user)
            let result = await API.post('/api/user/login',{
                username: user,
                password: password
            })

            if (result.data.status === 1){
                history.push('/home')
            }
        } catch (error) {
            console.log(error)
            setUser('')
            setPassword('')
        }
    }

    return (
        <div className="signin">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" autoComplete="off" value={user} onChange={handleChangeUser}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" autoComplete="off" value={password} onChange={handleChangePassword}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={handleSignIn} >sign in</button>
            </div>
        </div>
    )
}

export default Signin