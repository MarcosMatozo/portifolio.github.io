import React  from 'react';
import { Routes, Route, Outlet, Link, BrowserRouter, HashRouter } from "react-router-dom";
import './Header.sass'
import FirstSectionHome from '../Home/Sections/FirstSectionHome';
import AboutMyself from '../Home/Sections/AboutMyself';
import Abilities from '../Home/Sections/Abilities';

export default function Header(){
    return(
          <HashRouter>
              <Routes>
                  <Route path="*" element={<Layout />} />
                </Routes>
              <Routes>
                  <Route index element={<FirstSectionHome />} />
                  <Route path="sobre-mim" element={<AboutMyself />} />
                  <Route path="habilidades" element={<Abilities />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
            </HashRouter>
    )
}

function Layout() {
    return (
      <div className="header-main">
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav>
          <ul>
            <li className="animate__animated">
              <Link to="/">Início</Link>
            </li>
            <li className="animate__animated">
              <Link to="/sobre-mim">Sobre mim</Link>
            </li>
            <li className="animate__animated">
              <Link to="/habilidades">Habilidades</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
  
  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }