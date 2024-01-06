// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import janecooper from "../../../../assests/janecooper.png";
import devonlane from "../../../../assests/devonlane.png";
import robertfox from "../../../../assests/robertfox.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from '../../../../component/Cards/Cards';
import ImgMediaCard from '../../../../component/Cards/Cards';
import { Customheader } from '../../../../component/CustomHeader/Customheader';
import styles from "./HSection4.module.css";

export default () => {

  const card1={image:{janecooper}, alt:"gift", title:"Jane Cooper", para:`Amet minim mollit non deserunt ullamco est
  sit aliqua dolor do amet sint. Velit officia
  consequatduis enim velit mollit Exer. sit
  aliqua dolor do amet sint. Velit officia`, subtitle:`Ceo of hunts`, fromClients:true};

  const card2={image:{devonlane}, alt:"gift", title:"Devon lane", para:`Amet minim mollit non deserunt ullamco est
  sit aliqua dolor do amet sint. Velit officia
  consequatduis enim velit mollit Exer. sit
  aliqua dolor do amet sint. Velit officia`, subtitle:`Ceo of hunts`, fromClients:true};

  const card3={image:{robertfox}, alt:"gift", title:"Robert Fox", para:`Amet minim mollit non deserunt ullamco est
  sit aliqua dolor do amet sint. Velit officia
  consequatduis enim velit mollit Exer. sit
  aliqua dolor do amet sint. Velit officia`, subtitle:`Ceo of hunts`, fromClients:true};

    return (

    <div className={styles.container}>
      <div>
      <div className={styles.header}><Customheader data={`What says our
happy Clients`}></Customheader></div>
        <div>
          
        </div>
      </div>
      
    <div>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><ImgMediaCard data={card1}/> </SwiperSlide>
        <SwiperSlide><ImgMediaCard data={card2}/></SwiperSlide>
        <SwiperSlide><ImgMediaCard data={card3}/></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};