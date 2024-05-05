import metro1 from '../../assets/metro1.jpg'
import metro2 from '../../assets/metro2.jpg'
import metro3 from '../../assets/metro3.jpg'
import metro4 from '../../assets/metro4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Banner = () => {
    return (
        <div className='mt-10'>
                <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
      <SwiperSlide>
        <img className='w-[1600px] h-[700px] rounded-xl' src={metro4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
         <img className='  w-[1600px] h-[700px] rounded-xl'  src={metro2} alt=""  />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-[1600px] h-[700px] rounded-xl' src={metro3} alt="" />
        </SwiperSlide>
      <SwiperSlide>
        <img className='w-[1600px] h-[700px] rounded-xl' src={metro1} alt="" />
        </SwiperSlide>
      
    </Swiper>
        </div>
    );
};

export default Banner;