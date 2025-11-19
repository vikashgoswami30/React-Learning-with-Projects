import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex justify-center px-2 text-white fle-wrap bottom-12">

        <div className="flex-wrap justify-center gap-3 p-3 bg-white shadow-lg rounded-xl">
          <button onClick={()=> setColor("red")} className="px-1 rounded-full outline-none shadow-large"
          style={{backgroundColor: "red"}}>RED</button>
        </div>
        
        <div className="flex-wrap justify-center gap-3 p-3 bg-white shadow-lg rounded-xl">
          <button onClick={()=>setColor("yellow")}
           className="px-1 text-black rounded-full outline-none shadow-large"
          style={{backgroundColor: "yellow"}}>Yellow</button>
        </div>
        
        <div className="flex-wrap justify-center gap-3 p-3 text-white bg-white shadow-lg rounded-xl">
          <button onClick={()=>setColor("black")} className="px-1 rounded-full outline-none shadow-large"
          style={{backgroundColor: "black"}}>Black</button>
        </div>
        
        <div className="flex-wrap justify-center gap-3 p-3 text-white bg-white shadow-lg rounded-xl">
          <button onClick={()=>setColor("green")} className="px-1 rounded-full outline-none shadow-large"
          style={{backgroundColor: "GREEN"}}>GREEN</button>
        </div>
        
        <div className="flex-wrap justify-center gap-3 p-3 text-white bg-white shadow-lg rounded-xl">
          <button onClick={()=>setColor("Blue")} className="px-1 rounded-full outline-none shadow-large"
          style={{backgroundColor: "BLUE"}}>BLUE</button>
        </div>
      
      </div>
    </div>
  );
}

export default App;
