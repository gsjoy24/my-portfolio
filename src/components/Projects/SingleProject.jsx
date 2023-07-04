import { FaCheckCircle } from 'react-icons/fa'
import LinkBtn from '../LinkBtn/LinkBtn';
const SingleProject = ({ imgPath, title, desc, liveLink, client, server, feature1, feature2, feature3, tech }) => {
   return (
      <div data-aos="zoom-in" data-aos-delay="300" data-aos-anchor-placement="top-center" className="max-w-[420px] w-full p-2 border rounded-md relative pb-12 group">
         <img className="w-full h-56 object-cover object-top hover:object-bottom duration-[6000ms] ease-linear" src={imgPath} alt={title} />
         <div className="p-3">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className='text-sm'>{desc}</p>
            <h4 className="my-2 font-bold">Special Features</h4>
            <ul className="space-y-1">
               <li className='flex items-center gap-3'> <FaCheckCircle size={15} />{feature1}</li>
               <li className='flex items-center gap-3'> <FaCheckCircle size={15} />{feature2}</li>
               {feature3 && <li className='flex items-center gap-3'> <FaCheckCircle size={15} />{feature3}</li>}
            </ul>
            <h4 className="my-2 font-bold">Technologies</h4>
            <p className="text-sm mb-2">{tech}</p>
            <div className="flex justify-evenly items-center pt-4 border-t absolute bottom-3 left-0 w-full">
               <LinkBtn path={liveLink} pathName='LIVE' />
               <LinkBtn path={client} pathName='CLIENT' />
               {server && <LinkBtn path={server} pathName='SERVER' />}
            </div>
         </div>
         <p className='absolute text-3xl uppercase top-12 right-6 font-bold opacity-30 group-hover:opacity-0 duration-700 animate-pulse group-hover:animate-none'>hover me</p>
      </div>
   );
};

export default SingleProject;