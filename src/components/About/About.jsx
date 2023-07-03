import SectionTitle from "../SectionTitle/SectionTitle";
import person from '../../assets/lottie/person.json'
import Lottie from "lottie-react";
const About = () => {
   return (
      <div id="about" className="flex flex-col lg:flex-row justify-center items-center gap-9">
         <div className="max-w-md min-w-[50px]" data-aos="zoom-in" data-aos-delay="300">
            <Lottie animationData={person} />
         </div>
         <div className="py-8 relative">
            <SectionTitle title='about me' />
            <p className="text-justify" data-aos="zoom-in" data-aos-delay="300">Hello, and welcome to my portfolio website! I'm Gour Chandra Saha, a passionate junior front-end developer dedicated to creating captivating and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I strive to bring creative ideas to life through clean and efficient code. I am constantly expanding my skill set and keeping up with the latest industry trends to deliver modern and responsive websites. I believe in the power of collaboration and enjoy working closely with clients and teams to turn visions into reality. My goal is to contribute to impactful projects that make a positive difference in people's lives. Take a look at my work, and let's embark on this exciting journey together!</p>
         </div>
      </div>
   );
};

export default About;