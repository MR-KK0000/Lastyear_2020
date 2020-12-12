/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import './App.css';

import Navbar from './component/Navbar'
import Input from './component/Input'
import View from './component/Viewpost'

let id = 1

function App() {
  const [data, setData] = useState([])

  function adddata(title){
    const newpost = {id, title}
    setData([newpost,...data])
    id += 1
  }
  return (
    <div className="App">
      <Navbar/>
      <Input addData={adddata}/>
      {
        data.map((r,index) =>(
          <View key={index} post={r.title}/>
        ))
      }
    </div>
  );
}

export default App;
