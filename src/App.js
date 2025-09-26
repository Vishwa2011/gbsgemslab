import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css';

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
      </Routes>

       <a href=" " class="scroll-top show" id="scroll-top">
        <i class="arrow-top fas fa-angle-double-up"></i>
        <i class="arrow-bottom fas fa-angle-double-up"></i>
    </a>
    </>
  );
}

export default App;
