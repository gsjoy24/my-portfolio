import { useState } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
import Banner from './components/Banner/Banner'
import { RxCrossCircled } from "react-icons/rx"
import About from './components/About/About'
import Skills from './components/Skills/Skills'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navItems = <>
    <li><a onClick={() => setIsNavOpen(false)} href="#home">Home</a></li>
    <li><a onClick={() => setIsNavOpen(false)} href="#about">About</a></li>
    <li><a onClick={() => setIsNavOpen(false)} href="#skills">Skills</a></li>
    <li><a onClick={() => setIsNavOpen(false)} href="#projects">Projects</a></li>
    <li><a onClick={() => setIsNavOpen(false)} href="#contact">Contact</a></li>
    <li><ThemeSwitcher /></li>
  </>
  return (
    <div className="drawer drawer-end">
      <input checked={isNavOpen} id="my-drawer-3" type="checkbox" className="drawer-toggle" readOnly />
      <div className="drawer-content flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="navbar bg-white dark:bg-[#001E3E] h-16 sticky-top top-0 z-50 md:px-12 shadow-sm">
          <div className="flex-1 px-2 mx-2 font-bold text-3xl">Gour</div>
          <div className="flex-none lg:hidden">
            {isNavOpen ?
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost" onClick={() => setIsNavOpen(false)} >
                <RxCrossCircled size={30} />
              </label>
              :
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost" onClick={() => setIsNavOpen(true)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>}
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal font-semibold items-center p-0" >
              {/* Navbar menu content here */}
              {navItems}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className='max-w-5xl mx-auto px-5'>
          <Banner />
          <About />
          <Skills/>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 font-semibold items-center dark:bg-[#001E3E] mt-16">
          {/* Sidebar content here */}
          {navItems}
        </ul>
      </div>
    </div>
  )
}
export default App
