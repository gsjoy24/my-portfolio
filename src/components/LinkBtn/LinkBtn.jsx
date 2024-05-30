import { FaGithub } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
import './LinkBtn.css';

const LinkBtn = ({ path, pathName }) => {
	return (
		<a href={path} target='_blank' rel='noreferrer'>
			<button className='linkBtn'>
				<span className='flex justify-center gap-2 items-center'>
					{pathName}
					{pathName === 'LIVE' ? (
						<LuExternalLink className='hidden sm:block relative bottom-[2px]' size={12} />
					) : (
						<FaGithub className='hidden sm:block relative bottom-[2px]' size={12} />
					)}
				</span>
			</button>
		</a>
	);
};

export default LinkBtn;
