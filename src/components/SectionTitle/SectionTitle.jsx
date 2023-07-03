const SectionTitle = ({title}) => {
   return (
      <>
         <h3 data-aos="fade-right" data-aos-delay="500" className="uppercase text-3xl font-bold mb-8">{title}</h3>
         <h3 data-aos="flip-up" data-aos-delay="700" className="uppercase text-6xl font-bold mb-4 absolute top-6 opacity-10 -left-4">{title}</h3>
      </>
   );
};

export default SectionTitle;