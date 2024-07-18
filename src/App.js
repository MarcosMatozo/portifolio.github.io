import React  from 'react';
import Header from './components/Header/Header';
import CustomCursor from './components/CustomCursor/CustomCursor';
// import FirstSectionHome from './components/Home/Sections/FirstSectionHome';
import './style/reset.sass'
import 'animate.css';
export default function App() {
  return (
    <div>
      
      <CustomCursor></CustomCursor>

      <Header></Header>


    </div>
  );
}


