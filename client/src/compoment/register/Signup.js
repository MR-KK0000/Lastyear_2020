import React from 'react'

const Signup = () => {
    return (
        <div className="signup">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" autocomplete="off" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" autocomplete="off"/>
            </div>
            <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="text" id="confirm_password" className="form-control" autocomplete="off"/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block">sign up</button>
            </div>
        </div>
    )
}

export default Signup