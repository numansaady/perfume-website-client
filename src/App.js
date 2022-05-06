import logo from "./logo.svg";
import "./App.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Perfumes from "./Pages/Perfumes/Perfumes";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Login from "./Pages/Auth/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import AddPerfume from "./Pages/AddPerfume/AddPerfume";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import UpdateStock from "./Pages/UpdateStock/UpdateStock";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/perfumes" element={<Perfumes />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/add" element={
          <RequireAuth>
            <AddPerfume/>
          </RequireAuth>
        }></Route>
        <Route path="/perfume/:perfumeId" element={
          <RequireAuth>
            <UpdateStock/>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <Perfumes/>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
