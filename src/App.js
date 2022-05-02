import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Perfumes from './Pages/Perfumes/Perfumes';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/perfumes' element={<Perfumes/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
