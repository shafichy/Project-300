import anika from '../../assets/Anika.png'
import nayeb from '../../assets/nayeb.jpg'

const About = () => {
    return (
        <div className='container mx-auto mt-20'>
       <div className='flex flex-col gap-8 ml-[200px]'>
       <div className='bg-[#1313130D] p-10 rounded-2xl w-[450px]' data-aos="fade-up"
     data-aos-duration="3000">
                 <img className='w-[400px] rounded-3xl' src={anika} alt="" />
                 <h1 className='mt-4'> <span className='bg-[#3D405B] text-white p-2 rounded-md font-semibold'>Name</span> : <span className='text-[#131313] font-bold'>Nurun Nahar Anika</span> </h1>
                 <p className='mt-5'><span className='bg-[#004346] p-2 text-white font-bold rounded-md '>ID </span>  :  <span className='text-[#131313] font-bold'>221-115-095</span></p>
            </div>
       <div className='bg-[#1313130D] p-10 rounded-2xl w-[450px]' data-aos="fade-down"
     data-aos-duration="3000">
                 <img className='w-[400px] h-[400px] rounded-3xl' src={nayeb} alt="" />
                 <h1 className='mt-4'> <span className='bg-[#3D405B] text-white p-2 rounded-md font-semibold'>Name</span> : <span className='text-[#131313] font-bold'>Nurun Nahar Anika</span> </h1>
                 <p className='mt-5'><span className='bg-[#004346] p-2 text-white font-bold rounded-md '>ID </span>  :  <span className='text-[#131313] font-bold'>221-115-095</span></p>
            </div>

       </div>
        </div>
    );
};

export default About;