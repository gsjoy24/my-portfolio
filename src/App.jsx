import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navItems = (
		<>
			<li>
				<a onClick={() => setIsNavOpen(false)} href='#home'>
					Home
				</a>
			</li>
			<li>
				<a onClick={() => setIsNavOpen(false)} href='#about'>
					About
				</a>
			</li>
			<li>
				<a onClick={() => setIsNavOpen(false)} href='#skills'>
					Skills
				</a>
			</li>
			<li>
				<a onClick={() => setIsNavOpen(false)} href='#projects'>
					Projects
				</a>
			</li>
			<li>
				<a onClick={() => setIsNavOpen(false)} href='#contact'>
					Contact
				</a>
			</li>
		</>
	);
	return (
		<div className='drawer drawer-end'>
			<input checked={isNavOpen} id='my-drawer-3' type='checkbox' className='drawer-toggle' readOnly />
			<div className='drawer-content flex flex-col'>
				{/* Navbar */}
				<div className='navbar bg-white dark:bg-[#001E3E] h-16 sticky top-0 z-50 md:px-12 shadow-sm'>
					<div className='flex-1 px-2 mx-2 font-bold text-3xl'>Gour</div>
					<span className='md:hidden'>
						<ThemeSwitcher />
					</span>
					<div className='flex-none md:hidden'>
						{isNavOpen ? (
							<label htmlFor='my-drawer-3' className='btn btn-square btn-ghost' onClick={() => setIsNavOpen(false)}>
								<RxCrossCircled size={30} />
							</label>
						) : (
							<label htmlFor='my-drawer-3' className='btn btn-square btn-ghost' onClick={() => setIsNavOpen(true)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									className='inline-block w-6 h-6 stroke-current'
								>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
								</svg>
							</label>
						)}
					</div>
					<div className='flex-none hidden md:block'>
						<ul className='menu menu-horizontal font-semibold items-center p-0'>
							{/* Navbar menu content here */}
							{navItems}
							<li className='hidden md:block'>
								<ThemeSwitcher />
							</li>
						</ul>
					</div>
				</div>
				{/* Page content here */}
				<div className='max-w-5xl mx-auto px-5 overflow-hidden'>
					<Banner />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</div>
				<Footer />
			</div>
			<div className='drawer-side z-40'>
				<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
				<ul className='menu p-4 w-80 max-h-[93vh]  h-full overflow-hidden font-semibold items-center bg-[#ffffffdc] dark:bg-[#001e3edd] mt-16 text-2xl z-50 flex flex-col gap-12 blur-0'>
					{/* Sidebar content here */}
					{navItems}
				</ul>
			</div>
		</div>
	);
}
export default App;
