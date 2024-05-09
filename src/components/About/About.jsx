


import anika from '../../assets/Anika.png'
import nayeb from '../../assets/nayeb2.jpg'
import shafi from '../../assets/shafi.jpeg'
import Raisa from '../../assets/raisa.png'
import { Typewriter } from 'react-simple-typewriter'


const About = () => {
  

    return (
        <div className='container mx-auto mt-20'>
          <h1 className='text-center text-3xl'>Welcome to   <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Byte Brigade']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
        </span></h1>
        <p className='mt-8 text-center text-lg  font-bold'>Our university project, powered by a dedicated team of four members, aims to revolutionize learning through innovative  technology solutions. With a collaboration, creativity, <br />
        <span style={{ color: 'aquamarine', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' and cutting-edge development, we strive to deliver impactful solutions that enhance the educational experience for students and educators alike']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
        </span></p>
       <div className='flex gap-20 mt-10'>
       <div className='flex flex-col gap-8 '>
       <div className='bg-[#1313130D] p-10 rounded-2xl w-[700px]' data-aos="fade-up"
     data-aos-duration="3000">
                <div className='flex'>
                <img className='w-[300px] rounded-3xl' src={anika} alt="" />
              <div>
              <h1 className='mt-[50px] text-xl'> <span className='bg-[#3D405B] text-white p-2 rounded-md font-semibold ml-[50px]'>Name</span> : <span className=' font-bold '>Nurun Nahar Anika</span> </h1>
              <p className='ml-[50px] mt-[30px] text-xl'><span className='bg-[#7B435B] p-2 rounded-md text-white font-bold'>Batch</span> <span  className=' font-bold '>: 56</span></p>
                 <p className='mt-[30px] text-xl'><span className='bg-[#004346] p-2 text-white font-bold rounded-md ml-[50px] '>ID </span>  :  <span className=' font-bold'>221-115-095</span></p>
                
              </div>
                </div>
            </div>

            <div className='bg-[#1313130D] p-10 rounded-2xl w-[700px]' data-aos="fade-down"
     data-aos-duration="3000">
                <div className='flex'>
                <img className='w-[300px] rounded-3xl' src={nayeb} alt="" />
              <div>
              <h1 className='mt-[50px] text-lg'> <span className='bg-[#3D405B] text-white p-2 rounded-md font-semibold ml-[50px]'>Name</span> : <span className='font-bold'>Nayeb Ahmed Qureshi</span> </h1>
              <p className='ml-[50px] mt-[30px] text-lg'><span className='bg-[#7B435B] p-2 rounded-md text-white font-bold'>Batch</span> <span  className=' font-bold '>: 56</span></p>
                 <p className='mt-[30px]'><span className='bg-[#004346] p-2 text-white font-bold rounded-md ml-[50px] '>ID </span>  :  <span className=' font-bold'>221-115-097</span></p>
              </div>
                </div>
            </div>

       

       </div>
       <div className='flex flex-col gap-8 '>
    
            
            <div className='bg-[#1313130D] p-10 rounded-2xl w-[700px]' data-aos="fade-up"
     data-aos-duration="3000">
                <div className='flex'>
                <img className='w-[230px] rounded-3xl' src={shafi} alt="" />
              <div>
              <h1 className='mt-[50px] text-lg'> <span className='bg-[#3D405B] text-white p-2 rounded-md font-semibold ml-[50px]'>Name</span> : <span className='font-bold'>Shafi Chowdhury</span> </h1>
              <p className='ml-[50px] mt-[30px] text-lg'><span className='bg-[#7B435B] p-2 rounded-md text-white font-bold'>Batch</span> <span  className=' font-bold '>: 56</span></p>
                 <p className='mt-[30px]'><span className='bg-[#004346] p-2 text-white font-bold rounded-md ml-[50px] '>ID </span>  :  <span className=' font-bold'>221-115-118</span></p>
              </div>
                </div>
            </div>
            <div className='bg-[#1313130D] p-10 rounded-2xl w-[700px] data-aos="fade-up"
     data-aos-duration="3000"' data-aos="fade-down"
     data-aos-duration="3000">
                <div className='flex'>
                <img className='w-[230px] rounded-3xl' src={Raisa} alt="" />
              <div>
              <h1 className='mt-[50px] text-lg'> <span className='bg-[#3D405B] text-white p-2 rounded-md font-semibold ml-[50px]'>Name</span> : <span className=' font-bold'>Raisa Ahmed</span> </h1>
              <p className='ml-[50px] mt-[30px] text-lg'><span className='bg-[#7B435B] p-2 rounded-md text-white font-bold'>Batch</span> <span  className=' font-bold '>: 56</span></p>
                 <p className='mt-[30px]'><span className='bg-[#004346] p-2 text-white font-bold rounded-md ml-[50px] '>ID </span>  :  <span className=' font-bold'>221-115-124</span></p>
              </div>
                </div>
            </div>
       </div>
       </div>
        </div>
    );
};

export default About;