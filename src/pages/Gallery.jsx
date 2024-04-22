import React from 'react';
import foot from "../assets/1.jpeg";
import hands from "../assets/2.jpeg";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled, { ThemeContext, useTheme } from 'styled-components';
import { DayStyled } from './Calendar';
import { DayLabel } from './Calendar';

const Gallery = () => {
    const theme = useTheme(ThemeContext)
    return (
      <GalleyStyled>
        <div className='gallery'>
          <br/>
          <br/>
          <br/>
        <DayStyled options={{color:theme.colorPalette.whiteGray, space:theme.fontSize.base, width:'80%'}} />
          <DayLabel options={{size:theme.fontSize.lg, color:theme.colorPalette.darkGray, padding:theme.fontSize.xs}}>갤러리</DayLabel>
          <DayStyled  options={{color:theme.colorPalette.whiteGray, space:theme.fontSize.base, width:'80%'}} />
        </div>
       
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <img src={foot} alt='foot'/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={foot} alt='hands'/>
        </SwiperSlide>
      </Swiper>
        </GalleyStyled>
        
    );
};

export default Gallery;

const GalleyStyled = styled.div`
background-color: #d7d7d75e;
height: 570px;
.gallery{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Add this line */
  margin-top: 5rem;
}
.swiper{
  width: 80%;
  margin-top: 3rem;
}
    .swiper-button-prev, .swiper-button-next{
       color:#9a9a9a;
       visibility: hidden;
    } 


    .swiper-pagination-bullet-active{
        background-color:lightpink;
    }

` 