import React,{ useState } from 'react'

import API from '../../service/api'

const Signup = () => {
    const [dataUser,setDataUser] = useState({user: '', pass: '',compass:''})
    const [statusSuccess, setStatusSuccess] = useState(false)
    const [statusError, setStatusError] = useState(false)

    const handleChangeUser = (e) =>{
        setDataUser({...dataUser,user: e.target.value})
        
        // const a = setInterval(()=>{console.log('555')},3000)
        // clearInterval(a)
    }

    const handleChangePass = (e) =>{
        setDataUser({...dataUser,pass: e.target.value})
    }  

    const handleChangeConfirmPass = (e) =>{
        setDataUser({...dataUser,compass: e.target.value})
    }

    const submitSingUp = async() =>{
       try {
           if(dataUser.user === '') throw new Error('a')
           if(dataUser.pass === '') throw new Error('b')
           if(dataUser.compass === '') throw new Error('c')
           if(dataUser.pass !== dataUser.compass) throw new Error('not')

           
            let result = await API.post('/api/user/register',{
                username: dataUser.user,
                password: dataUser.pass
            },
            )
            if(result.data.status === 0 ) throw new Error('user')
                console.log('pass')
               await setDataUser({
                    user: '',
                    pass: '',
                    compass: '',
                })
                await setStatusSuccess(true)
                await setTimeout(() => setStatusSuccess(false), 3000);
            
           console.log(result)
       } catch (error) {
           switch(error.message){
               case 'a':
                   console.log('a')
                   break
                case 'b':
                    console.log('b')
                    break
                case 'c':
                    console.log('c')
                    break
                case 'not':
                    console.log('pass not math')
                    break
                case 'user':
                    console.log('have user in db')
                    break
                default:
                    console.log(error.message)
                    setDataUser({
                        user: '',
                        pass: '',
                        compass: '',
                    })
                    await setStatusError(true)
                    await setTimeout(() => setStatusError(false), 3000);
                    break
           }
       }
    }

 

    return (
        <div className="signup">
            {
                statusSuccess?
                <div className="alert alert-success" role="alert">
                    Successfully saved register acccount
                </div> :
                <></>
            }
            {
                statusError?
                <div className="alert alert-danger" role="alert">
                    Username is already exists!
                </div> :
                <></>
            }
           
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" value={dataUser.user} onChange={handleChangeUser} autoComplete="off" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" value={dataUser.pass} onChange={handleChangePass} autoComplete="off"/>
            </div>
            <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" className="form-control" value={dataUser.compass} onChange={handleChangeConfirmPass} autoComplete="off"/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={submitSingUp}>sign up</button>
            </div>
        </div>
    )
}

export default Signup