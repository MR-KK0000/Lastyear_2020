/* eslint-disable react-hooks/rules-of-hooks */
import React,{ useState } from 'react'
import styled from 'styled-components'
import Signin from '../compoment/register/Signin'
import Signup from '../compoment/register/Signup'

// import Singin from '../compoment/register/Signin'


const Rbox = styled.div`
    display: flex;
    background-color: #999A9E;
    color: #ffffff;
    flex-direction: ${props => props.f_dir || 'row'};

    ${props => props.main && `
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-image: url("bg-book.jpg");
        /* Full height */
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `};

    ${props => props.section && `
        background-color: #999A9E40;
        backdrop-filter: blur(4px);
        border-radius: 10px;
        width: 350px;
        padding: 15px;
        `};

    & > h1 {
        text-align: center;
        color: #F6E056;
        padding-bottom: 20px;
    }

    & > div >span{
        text-decoration: underline;
    }

    .lasttxt{
        display: inline;
        text-align: center;
    }

    .linktxt:hover {
        text-decoration: underline;
        cursor: pointer;
        color: red;
    }

    .test {
        background-color: #58c4a8;
    }
`

//.test is sample style css of className inside Rbox
//function

const register = () =>{
    // const [test, setTest] = useState('')

    // const handeleTesttxt = (e) =>{
    //     setTest(e.target.value)
    // }
    const [signState, setSignState] = useState({text: 'Sing up',state: true})

    const handeleChangeState = () =>{
        if(signState.state){
            setSignState({text: 'Sing in',state: false})
        }else{
            setSignState({text: 'Sing up',state: true})
        }
    }

    return (
        <div className="register" >
            <Rbox main>
                <Rbox section f_dir="column">
                    <h1>MYHOMEPAGE</h1>
                    {
                        signState.state ?<Signin/>:<Signup/>
                    }
                    <div className="lasttxt">
                        {signState.state ? `Don't have an account? `:'Have an account ' } 
                        <span className="linktxt" onClick={handeleChangeState}>{signState.text}</span>
                    </div>
                </Rbox>
            </Rbox>
            
        </div>
    )
} 

export default register