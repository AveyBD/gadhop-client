import { Route, Routes } from "react-router-dom";
import AddItems from "./Components/AddItems/AddItems";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Manage from "./Components/Manage/Manage";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import Loader from "./Components/Shared/Loader";
import RequiredAuth from "./Components/Shared/RequiredAuth";

function App() {
  return (
    <div className="relative">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/loader" element={<Loader/>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/manage" element={<RequiredAuth><Manage/></RequiredAuth>}></Route>
        <Route path="/add" element={<RequiredAuth><AddItems></AddItems></RequiredAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
