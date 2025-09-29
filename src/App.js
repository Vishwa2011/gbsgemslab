import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css';
import Services from './pages/Services';
import Verify from './pages/Verify';
import Contact from './pages/Contact';
import { FaWhatsapp } from 'react-icons/fa'; 
import Privacypolicy from './pages/Privacypolicy';
import Termsandcondition from './pages/Termsandcondition';
import Blog from './pages/Blog';


function App() {

  useEffect(() => {
   
    const wow = new WOW({
      live: false,  
      mobile: false,
      once: true    
    });
    wow.init();

   
    const scrollUp = document.getElementById('scroll-top');
    const onScroll = () => {
      if (window.scrollY > 0) { 
        scrollUp.classList.add('show', 'show-active');
      } else { 
        scrollUp.classList.remove('show', 'show-active');
      }
    };

    window.addEventListener('scroll', onScroll);

    scrollUp.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };

  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Verify' element={<Verify/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Privacypolicy' element={<Privacypolicy/>}/>
        <Route path='/Termsandcondition' element={<Termsandcondition/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
   <a 
       href="https://wa.me/+91-9157600020"
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
    </a>
       <a href=" " className="scroll-top show" id="scroll-top">
        <i className="arrow-top fas fa-angle-double-up"></i>
        <i className="arrow-bottom fas fa-angle-double-up"></i>
    </a>
    </>
  );
}

export default App;
