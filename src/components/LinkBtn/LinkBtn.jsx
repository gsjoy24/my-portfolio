import './LinkBtn.css'
import { LuExternalLink } from 'react-icons/lu'

const LinkBtn = ({ path, pathName }) => {
   return (
      <a href={path} target='_blank' rel="noreferrer"><button className='linkBtn'>
         <span className='flex gap-2 items-center'>{pathName} <LuExternalLink className='hidden sm:block' size={12}/></span>
      </button></a>
   );
};

export default LinkBtn;