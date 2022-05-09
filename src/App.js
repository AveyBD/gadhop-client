import { Route, Routes } from "react-router-dom";
import AddItems from "./Components/AddItems/AddItems";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Manage from "./Components/Manage/Manage";
import MyItems from "./Components/MyItems/MyItems";
import UpdateProduct from "./Components/Products/UpdateProduct";
import ViewProduct from "./Components/Products/ViewProduct";
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
        <Route path="/myproduct" element={<RequiredAuth><MyItems></MyItems></RequiredAuth>}></Route>
        <Route path="/add" element={<RequiredAuth><AddItems></AddItems></RequiredAuth>}></Route>
        <Route path="/update/:id" element={<RequiredAuth><UpdateProduct></UpdateProduct></RequiredAuth>}></Route>
        <Route path="/view/:id" element={<ViewProduct></ViewProduct>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
