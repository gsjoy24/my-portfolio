import Lottie from 'lottie-react';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import man from '../../assets/lottie/man.json';

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 border-t'>
			<div>
				<Lottie className='w-56' animationData={man} />
				<p className='font-bold'>
					<span className='text-xl'>Gour Chandra Saha</span>
					<br />
					Junior Front-End Developer
				</p>
				<p>Copyright © 2023 - All right reserved</p>
			</div>
			<div>
				<div className='mb-4 space-x-3'>
					{/* facebook */}
					<button data-aos='zoom-in' data-aos-anchor-placement='bottom-bottom' data-aos-delay='400'>
						<a target='_blank' rel='noreferrer' href='https://web.facebook.com/goursahajoy'>
							<FaFacebook
								size={30}
								className='rounded-full active:scale-90 ease-in-out duration-200 text-blue-500 dark:text-white'
							/>
						</a>
					</button>
					{/* linkedin */}
					<button data-aos='zoom-in' data-aos-delay='500' data-aos-anchor-placement='bottom-bottom'>
						<a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/goursahajoy/'>
							<FaLinkedin
								size={30}
								className='active:scale-90 ease-in-out duration-200 text-[#0072b1] dark:text-white'
							/>
						</a>
					</button>
					{/* gmail */}
					<button data-aos='zoom-in' data-aos-delay='600' data-aos-anchor-placement='bottom-bottom'>
						<a target='_blank' rel='noreferrer' href='mailto:gour.joy24@gmail.com'>
							<SiGmail size={30} className='active:scale-90 ease-in-out duration-200 text-[#BD150F] dark:text-white' />
						</a>
					</button>
					{/* github */}
					<button data-aos='zoom-in' data-aos-delay='700' data-aos-anchor-placement='bottom-bottom'>
						<a target='_blank' rel='noreferrer' href='https://github.com/gsjoy24/'>
							<FaGithub size={30} className='active:scale-90 ease-in-out duration-200 text-[#171515] dark:text-white' />
						</a>
					</button>
					{/* youtube */}
					<button data-aos='zoom-in' data-aos-delay='800' data-aos-anchor-placement='bottom-bottom'>
						<a target='_blank' rel='noreferrer' href='https://youtube.com/@goursahajoy'>
							<FaYoutube size={30} className='active:scale-90 ease-in-out duration-200 text-[#f00] dark:text-white' />
						</a>
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
