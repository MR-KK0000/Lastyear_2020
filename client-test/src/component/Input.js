import React, { useState } from 'react';

const Input = ({addData}) =>{
    const [input,setInput] = useState('')

    const handleChange = (e) =>{
        setInput(e.target.value)
    }

    const handleKeyDown = (e) =>{
        const title = e.target.value
        if (e.key === 'Enter' && title){
            addData(title)
            setInput('')
        }
    }

    return (
        <div className="Input">
            <div className="input_haeder">Create Post</div>
            <input 
            className="input_filed" 
            type="text" 
            value={input} 
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default Input