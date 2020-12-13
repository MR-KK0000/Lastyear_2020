import React from 'react'
import styled from 'styled-components'

//css
const Hbox = styled.div`
    display: flex;
    justify-content: space-between;
	align-items: center;
    background-color: #3ff7b0;
    color: white;
    padding: 5px;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    & p {
        font-size: 20px;
    }
`

const Navbar = () =>{
    return (
        <Hbox className="Navbar">
            <p>Novel-list</p>
            <input type="text"/>
        </Hbox>
    )
}

export default Navbar