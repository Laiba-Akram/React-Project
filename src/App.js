import React, { useEffect } from 'react';
import { Blog, Features, Footer, Header, Possibilty, Whatproject } from './Containers';
import { Navbar, Brand ,CTA } from './Components';
import './App.css';
import './index.css';
const App = () => {
  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "Laiba Akram Project"
  }, [])
  return (
    <div className="App">
  <div className='gradient__bg'>
    <Navbar/>
    <Header/>
  </div>
   <Brand/>
   <Whatproject/>
   <Features/>
   <Possibilty/>
   <CTA/>
   <Blog/>
   <Footer/>
    </div>
  );
}

export default App;
