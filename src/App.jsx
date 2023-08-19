import { useState } from "react";
import "./App.css";
import { Users } from "./user";
import Table from "./Table";
function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <input type="text" placeholder="Search..." className="search" onChange={(e)=>setQuery(e.target.value)}/>
      <Table data={Users}/>
    </div>
  );
}

export default App;
