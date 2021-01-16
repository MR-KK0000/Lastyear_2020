import React from 'react'
import styled from 'styled-components'

//css
const Hbox = styled.nav`
    background-color: #FFBF69;
    color: #FF9F1C;
`

const Navbar = () =>{
    return (
        <div className="header">
            <Hbox className="navbar fixed-top">
                <h1 className="navbar-brand">MYHOMEPAGE NEW VERSION</h1>
            </Hbox>
        </div>
    )
}

export default Navbar