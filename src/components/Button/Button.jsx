import './Button.css';
import { BiCloudDownload } from 'react-icons/bi'
const Button = () => {
   return (
      <a href={'https://drive.usercontent.google.com/download?id=1UDytH0mWuHJqkf9AvmGxTcWc3yXTQaBF&export=download&authuser=0&confirm=t&uuid=d2cbe889-0468-4265-b14c-3c9c4792db33&at=APZUnTUH_BPpCssilLTf2J7GJiRh:1697193694861'} target='_blank'><button className="button">
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