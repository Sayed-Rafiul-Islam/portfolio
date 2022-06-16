import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import AboutMe from './Components/AboutMe/AboutMe';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import MyCard from './Components/MyCard/MyCard';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='my-3'>
      <div className='flex lg:flex-row flex-col'>
        <div className='flex lg:fixed'>
          <Header></Header>
          <MyCard></MyCard>
        </div>
        <div className='w-full flex justify-end'>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='aboutMe' element={<AboutMe></AboutMe>}></Route>
            <Route path='resume' element={<Resume></Resume>}></Route>
            <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
            <Route path='blogs' element={<Blogs></Blogs>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
      <ToastContainer
        theme="dark"
        position='top-center'
      />
    </div>
  );
}

export default App;
