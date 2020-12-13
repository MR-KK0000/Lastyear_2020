import React from 'react'

const Signin = () =>{
    return (
        <div className="signin">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block" >sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Signin