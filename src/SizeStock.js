import logo from './logo.svg';
import './App.css';

function SizeStock({handleSizechange,handleQtychange,colorindex,stockindex}) {
  return (
    <div className="App">
    
     <input type="text" onChange={(e) => { handleSizechange(e,colorindex,stockindex) }}  placeholder="size"/>
     <input type="text" onChange={(e) => { handleQtychange(e,colorindex,stockindex) }}  placeholder="qty"/><br/>
  
    </div>
  );
}

export default SizeStock;