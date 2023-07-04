import SectionTitle from "../SectionTitle/SectionTitle";
import speckSmart from '../../assets/projects/speck-smart.png'
import thaizest from '../../assets/projects/thaizest.png'
import carsDoc from '../../assets/projects/cars-doctor.png'
import penguin from '../../assets/projects/penguin-fashion.png'
import convention from '../../assets/projects/convention-center.png'
import hireMe from '../../assets/projects/hire-me.png'
import toyverse from '../../assets/projects/toyverse.png'
import donate from '../../assets/projects/donate-now.png'
import SingleProject from "./SingleProject";

const Projects = () => {
   return (
      <div id="projects" className="pt-32 relative">
         <SectionTitle title='projects' />
         <div className="flex justify-evenly flex-wrap gap-8">
            <SingleProject
               imgPath={speckSmart} title='Speck Smart'
               desc='A summer camp language school website where anybody can buy or sell any language classes.'
               client='https://github.com/gsjoy24/SpeakSmart-client'
               server='https://github.com/gsjoy24/SpeakSmart-server' liveLink='https://speaksmart24.web.app/'
               tech='React, React-router Tailwind CSS, DaisyUl, React-hook-form, React-hot-toast, Sweetalert_2, Stripe-js, Firebase.'
               feature1='Managed different user roles.'
               feature2='Firebase authentication system.'
               feature3='Stripe card payment system.'
            />
            <SingleProject
               imgPath={toyverse} title='Toy Verse'
               desc='A toy shop website with buying and selling system.'
               client='https://github.com/gsjoy24/toy-verse-client'
               server='https://github.com/gsjoy24/toy-verse-server'
               liveLink='https://joytoyverse.web.app/'
               tech='React, React-router Tailwind CSS, DaisyUl, React-icons, Firebase, React-slick, React-tabs, React-rating, Sweetalert_2, AOS(for animation)'
               feature1='Advance real-time searching and Sorting by price'
               feature2='Add, delete and update data.'
               feature3='Google authentication and protected routes.'
            />
            <SingleProject
               imgPath={thaizest} title='ThaiZest'
               desc='A Thai recipe blog website with user authentication.'
               client='https://github.com/gsjoy24/thaizest-client'
               server='https://github.com/gsjoy24/Thaizest-server'
               liveLink='https://thaizest24.web.app/'
               tech='React, React-router Tailwind CSS, DaisyUl, React-icons, React-lazy-load, React-to-pdf, React-toastify, Firebase.'
               feature1='Email and password authentication'
               feature2='Google authentication.'
               feature3='Responsive for all devices.'
            />
            <SingleProject
               imgPath={carsDoc} title="Car's Doctor"
               desc="A website of a car's garage with booking system."
               client='https://github.com/gsjoy24/cars-doctor-client'
               server='https://github.com/gsjoy24/cars-doctor-server' liveLink='https://joys-cars-doctor.web.app/'
               tech='React, React-router Tailwind CSS, DaisyUl, Sweetalert_2, Firebase.'
               feature1='Service booking system.'
               feature2='Firebase authentication system.'
               feature3='Responsive for all devices'
            />
            <SingleProject
               imgPath={penguin} title="Penguin Fashion"
               desc="An ecommerce landing page"
               client='https://github.com/gsjoy24/penguin-fashion'
               liveLink='https://gsjoy24.github.io/penguin-fashion/'
               tech='HTML, CSS, Tailwind CSS'
               feature1='Well designed.'
               feature2='Responsive for all devices'
            />
            <SingleProject
               imgPath={convention} title="Convention Center"
               desc="An convention center landing page"
               client='https://github.com/gsjoy24/joys-convention-center'
               liveLink='https://gsjoy24.github.io/joys-convention-center/'
               tech='HTML, CSS, Bootstrap 5, font-awesome icons'
               feature1='Well designed.'
               feature2='Responsive for all devices'
            />
            <SingleProject
               imgPath={hireMe} title="Hire Me"
               desc="A job portal website."
               client='https://github.com/gsjoy24/hire-me'
               liveLink='https://joys-hire-me.netlify.app/'
               tech='HTML, Tailwind CSS, Recharts, font-awesome icons'
               feature1='Well designed.'
               feature2='Responsive for all devices'
            />
            <SingleProject
               imgPath={donate} title="Donate Now"
               desc="An organization landing page"
               client='https://github.com/gsjoy24/donate-now'
               liveLink='https://gsjoy24.github.io/donate-now/'
               tech='HTML and CSS'
               feature1='Well designed.'
               feature2='Responsive for all devices'
            />
         </div>
      </div>
   );
};

export default Projects;