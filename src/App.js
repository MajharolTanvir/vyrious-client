import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import Home from "./Components/Home/Home";
import NavbarMenu from "./Components/Navbar/NavbarMenu";

function App() {
  return (
    <div className="App">
      <NavbarMenu></NavbarMenu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/addTask" element={<AddTask></AddTask>}></Route>
      </Routes>
    </div>
  );
}

export default App;
