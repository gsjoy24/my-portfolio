

const SkillImg = ({ path, name, pars }) => {
   console.log(name);
   return (
      <div className="relative group">
         <img data-aos="zoom-in" data-aos-delay="800" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" className={`w-24 h-full object-cover p-4 bg-slate-100 dark:bg-slate-800 rounded-lg}`} src={path} alt={name} />
         <div className="absolute top-0 bg-slate-100 dark:bg-slate-800 w-full h-full flex flex-col gap-2 justify-center items-center uppercase font-bold rounded-lg opacity-0 duration-200 group-hover:opacity-100 scale-0 group-hover:scale-100 z-40 p-2">
            {name}
            <progress className="progress progress-success bg-slate-100 w-full" value={pars} max="100"></progress>
         </div>
      </div>
   );
};

export default SkillImg;