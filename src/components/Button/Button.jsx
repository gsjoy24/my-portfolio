import './Button.css';
import resume from '../../../public/Resume-of-Gour-Chandra-Saha.pdf'
import { BiCloudDownload } from 'react-icons/bi'

const Button = () => {
   return (
      <a href={resume} download><button className="button">
         <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text flex gap-2 items-center">
               <BiCloudDownload size={25} /> Resume
            </span>
         </span>
      </button>
      </a>
   );
};

export default Button;