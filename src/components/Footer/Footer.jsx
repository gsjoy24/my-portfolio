
import Lottie from "lottie-react";
import man from '../../assets/lottie/man.json'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
   return (
      <footer className="footer footer-center p-10 border-t">
         <div>
         <Lottie className="w-56" animationData={man}/>
            <p className="font-bold">
               <span className="text-xl">Gour Chandra Saha</span><br />Junior Front-End Developer
            </p>
            <p>Copyright © 2023 - All right reserved</p>
         </div>
         <div>
            <div className='mb-4 space-x-3'>
               {/* facebook */}
               <button data-aos="zoom-in" data-aos-delay="400">
                  <a target='_blank' rel='noreferrer' href="https://web.facebook.com/GSJoy.24"
                  ><FaFacebook size={30} className='border-black dark:border-white rounded-full active:scale-90 ease-in-out duration-200 text-blue-500 dark:text-white' /></a>
               </button>
               {/* linkedin */}
               <button data-aos="zoom-in" data-aos-delay="500">
                  <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/gsjoy24/"
                  ><FaLinkedin size={30} className='border-black dark:border-white active:scale-90 ease-in-out duration-200 text-[#0072b1] dark:text-white' /></a>
               </button>
               {/* gmail */}
               <button data-aos="zoom-in" data-aos-delay="600">
                  <a target='_blank' rel='noreferrer' href='mailto:gour.joy24@gmail.com'
                  ><SiGmail size={30} className=' border-black dark:border-white  active:scale-90 ease-in-out duration-200 text-[#BD150F] dark:text-white' /></a>
               </button>
               {/* github */}
               <button data-aos="zoom-in" data-aos-delay="700">
                  <a target='_blank' rel='noreferrer' href="https://github.com/gsjoy24/"
                  ><FaGithub size={30} className='border-black dark:border-white active:scale-90 ease-in-out duration-200 text-[#171515] dark:text-white' /></a>
               </button>
            </div>
         </div>
      </footer>
   );
};

export default Footer;