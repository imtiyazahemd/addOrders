
import './App.css';
import React, { useState } from 'react'
import SizeStock from './SizeStock';

function OrderComponenet({data,handlecolorchange,handleimagechange,index,stockdetails,handlestockadd,handleSizechange,handleQtychange}) {
  return (
    <div className="App">
     <input type="text" placeholder="Color Name" onChange={(e) => { handlecolorchange(e, index) }} value={data.color}/><br/>
     <input type="text" placeholder="image"  onChange={(e) => { handleimagechange(e, index) }}  value={data.image}/><br/>

     {data[index].stockdetails.map((file, stockindex) => (
        <SizeStock colorindex={index} stockindex={stockindex}  handleSizechange={handleSizechange}  handleQtychange={handleQtychange}
        />
      ))}
      
      <button name="Add stock" onClick={(e) => { handlestockadd(e, index) }} value="Add stock">
        Add stock {index}
      </button>
     
    </div>
  );
}

export default OrderComponenet;