import React from 'react'
import Header  from '../compoment/Header'
import styled from 'styled-components'

// const HTex1 = styled.h1`
//     padding: 30px;
//     margin-top: 30px;
// `
const Hdiv= styled.div`
    ${props => props.con && `
          padding: 40px;
         margin-top: 40px;
    `};
    ${props => props.row &&`
        
    `};
    ${props => props.col &&`
        // background-color: #115050;
        padding: 10px;
    `};
    ${props => props.child &&`
        text-align: center;
        background-color: #CBF3F0;
        height: 100px;
    `};
`

const HButton  = styled.button`
    margin: 10px;
    background-color: #2EC4B6;
`

const home = () =>{
    // const [data, setData] = useState([])
    return (
        <div className="Home">
            <Header/>
            <Hdiv  con className="container">
                <Hdiv row className="row">
                    <Hdiv col className="col-sm-3">
                       <Hdiv child>
                            <p>Book List</p>
                            <HButton className="btn" >view</HButton>
                       </Hdiv>
                    </Hdiv>
                    <Hdiv col className="col-sm-3">
                       <Hdiv child>
                            <p>Novel List</p>
                            <HButton className="btn" >view</HButton>
                            <HButton className="btn" >add</HButton>
                       </Hdiv>
                    </Hdiv>
                    <Hdiv col className="col-sm-3">
                       <Hdiv child>
                            <p>test</p>
                       </Hdiv>
                    </Hdiv>
                    <Hdiv col className="col-sm-3">
                       <Hdiv child>
                            <p>test</p>
                       </Hdiv>
                    </Hdiv>
                    <Hdiv col className="col-sm-3">
                       <Hdiv child>
                            <p>test</p>
                       </Hdiv>
                    </Hdiv>
                    <Hdiv col className="col-sm-3">
                       <Hdiv child>
                            <p>test</p>
                       </Hdiv>
                    </Hdiv>
                </Hdiv>
            </Hdiv>
            {/* <div>
                power by sleepfreetime project 2021 
            </div> */}
        </div>
    )
}

export default home