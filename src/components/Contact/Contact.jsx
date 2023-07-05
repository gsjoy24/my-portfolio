import emailjs from '@emailjs/browser'
import SectionTitle from '../SectionTitle/SectionTitle';
import { useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_aoa5f2v', 'template_p38e9cp', form.current, 'jzaZ66tDLzr-oNZTW')
         .then((result) => {
            if (result.status === 200) {
               toast.success('Message sent successfully!')
            } else {
               toast.error('Failed to send! please try again later!')
            }
         }, (error) => {
            console.log(error);
         });
   };
   return (
      <div id="contact" className="py-16 gap-x-5">
         <SectionTitle title="let's talk" />
         <form data-aos="fade-right" ref={form} onSubmit={sendEmail} className='max-w-2xl mx-auto'>
            {/* name */}
            <div data-aos="flip-up" data-aos-delay="200" className="form-control w-full block">
               <label className="label">
                  <span className="label-text">What is your name?</span>
               </label>
               <input type="text" name='name' placeholder="Name" className="input input-bordered w-full dark:bg-slate-800 bg-gray-200" required />
            </div>
            {/* Whatsapp */}
            <div data-aos="flip-down" data-aos-delay="300" className="form-control w-full block">
               <label className="label">
                  <span className="label-text">Your Whatsapp Number (optional)</span>
               </label>
               <input type="tel" name='number' placeholder="Whatsapp" className="input input-bordered w-full dark:bg-slate-800 bg-gray-200" />
            </div>
            {/* email */}
            <div data-aos="flip-up" data-aos-delay="400" className="form-control w-full block">
               <label className="label">
                  <span className="label-text">Your Email</span>
               </label>
               <input type="email" name='email' placeholder="Email" className="input input-bordered w-full dark:bg-slate-800 bg-gray-200" required />
            </div>
            {/* message */}
            <div data-aos="flip-down" data-aos-delay="500" className="form-control w-full block">
               <label className="label">
                  <span className="label-text">Your Message</span>
               </label>
               <textarea name='message' className="textarea w-full dark:bg-slate-800 bg-gray-200" placeholder="Message" required></textarea>
            </div>
            <button data-aos="zoom-in" data-aos-delay="600" type='submit' className="button-send w-full mt-3"> send
            </button>
         </form>
         <Toaster />
      </div>
   );
};

export default Contact;