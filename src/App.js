import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import OrderComponenet from "./OrderComponenet";

function App() {
  const [colordetails, setColordetails] = useState([]);
  const [stockdetails, setStockdetails] = useState([]);
  const handlecolorchange = (e, index) => {
    let newData = [...colordetails];
    colordetails[index].color = e.currentTarget.value;

    setColordetails(newData);
  };

  const handleimagechange = (e, index) => {
    let newData = [...colordetails];
    colordetails[index].image = e.currentTarget.value;

    setColordetails(newData);
  };

  const handleSizechange = (e, colorindex,stockindex) => {
    let newData = [...colordetails];
    colordetails[colorindex].stockdetails[stockindex].size = e.currentTarget.value;

    setColordetails(newData);
  };

  const handleQtychange = (e, colorindex,stockindex) => {
    let newData = [...colordetails];
    colordetails[colorindex].stockdetails[stockindex].qty = e.currentTarget.value;

    setColordetails(newData);
  };

  const handlecoloradd = () => {
    let newcolordetails = [...colordetails]; //copy the object
    let colordetail = { color: "", image: "", stockdetails:[] };
    newcolordetails.push(colordetail);
    setColordetails(newcolordetails);
    setStockdetails([]);
    console.log(colordetails);
  };

  const handlestockadd = (e,index) => {

    let newcstockdetails = [...colordetails[index].stockdetails]; //copy the object

    let stockdetail = { size: "", qty: "" };
    newcstockdetails.push(stockdetail);
    setStockdetails(newcstockdetails);

    let newData = [...colordetails];
    colordetails[index].stockdetails = newcstockdetails;

  };



  return (
    <div className="App">
      {colordetails.map((file, index) => (
        <OrderComponenet
          data={colordetails}
          handlecolorchange={handlecolorchange}
          handleimagechange={handleimagechange}
          index={index}
          stockdetails={stockdetails}
          handlestockadd={handlestockadd}
          handleSizechange={handleSizechange}
          handleQtychange={handleQtychange}

        />
      ))}

      <button name="Add Color" onClick={handlecoloradd} value="Add Color">
        Add Color
      </button>
      {/* <label> name :{colordetails}</label> */}
    </div>
  );
}

export default App;
