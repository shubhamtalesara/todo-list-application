
import React, { useState } from "react";
import  "./App.css";
import "./Todos.css"
function App() {
  
  const[listItems, setlistItems]= useState("")
  const[addedItemsToTheList, setaddItemToTheList]= useState([""])
  const handleChange=(e)=>{
    setlistItems(e.target.value)
  }
  const onDelete=(e)=>{
    console.log(e)
  }
  const addItemToTheList=()=>{
    setaddItemToTheList(addedItemsToTheList.concat(<span className="inputItems">
      <h2>{listItems}</h2>
      <button className="deleteButton" onDelete={onDelete(addedItemsToTheList)}>Delete</button>
      </span>))
  }
  return (
    <div className="App">
      <label>
        <input value={listItems} onChange={handleChange} style={{width:"407px", height:"37px", borderRadius:"5px", border: "0px"}}></input>
        <button onClick={addItemToTheList} style={{marginLeft: "2px", height:"40px", borderRadius:"5px",  border: "0px", color: "blueviolet", cursor: "pointer"}}>+ New task</button>
      </label>
      <div className="todoItemDiv" >
      {addedItemsToTheList}
      </div>
    </div>
  );
}

export default App;
