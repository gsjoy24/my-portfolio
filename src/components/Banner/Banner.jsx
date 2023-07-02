import myImg from '../../assets/gour.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Button from "../Button/Button";

const Banner = () => {
   return (
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-8">
         <div className="max-w-lg sm:min-w-[360px]">
            <p className='text-xl font-semibold'>Hello there, I am</p>
            <h1 data-aos="fade-right" className="text-5xl font-bold lg:flex gap-3"><span>Gour Chandra </span> <span className='flex'>Saha  <img className='w-12' src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif" alt="✨"></img></span></h1>
            <p data-aos="fade-right" data-aos-delay="300" className="mt-2 mb-6 text-xl">Motivated junior web developer seeking opportunities to grow and learn.</p>
            <div data-aos="flip-up" data-aos-delay="500">
               <Button />
            </div>
         </div>
         <div data-aos="fade-left" data-aos-delay="500" className="max-w-[350px]">
            <img className="w-full p-2 ba rounded-full shadow-xl" src={myImg} alt="Gour Chandra Saha" />
         </div>
      </div>
   );
};

export default Banner;

