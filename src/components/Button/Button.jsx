import './Button.css';
import resume from '../../../public/Resume-of-Gour-Chandra-Saha.pdf'
import { BiCloudDownload } from 'react-icons/bi'

const Button = () => {
   return (
      <button className="button">
         <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">
               <a className='flex gap-2 items-center' href={resume} download> <BiCloudDownload size={25}/> Resume</a>
            </span>
         </span>
      </button>
   );
};

export default Button;