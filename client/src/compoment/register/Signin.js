import React, {useState } from 'react'
import { useHistory }  from 'react-router-dom'


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

    const handleSignIn = () =>{
        if(user === "kk" && password === "1234"){
            history.push('/home')
        }else{
            setUser('')
            setPassword('')
        }
    }

    return (
        <div className="signin">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" autocomplete="off" value={user} onChange={handleChangeUser}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" autocomplete="off" value={password} onChange={handleChangePassword}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={handleSignIn} >sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Signin