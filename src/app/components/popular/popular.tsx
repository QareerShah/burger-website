"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Burger from './burger';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Popular = () => {
  return (
    <div className='pt-[3rem]'>
      <h1 className='heading'>
        Our Popular <span className='text-red-700'>Burgers</span>
      </h1>
      <div className='w-[80%] mx-auto'>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass='item'
          showDots={false}
        >
          {/* Burger card items with unique keys */}
          <Burger
            key="burger1"
            title="Beefy Bite"
            image="/images/b1.png"
            reviews="6"
            price="10.88$"
          />
          <Burger
            key="burger2"
            title="Spicy Stack"
            image="/images/b2.png"
            reviews="5"
            price="12.00$"
          />
          <Burger
            key="burger3"
            title="Cheese Deluxe"
            image="/images/b3.png"
            reviews="7"
            price="11.50$"
          />
          <Burger
            key="burger4"
            title="Crispy Crunch"
            image="/images/b12.png"
            reviews="8"
            price="9.99$"
          />
          <Burger
            key="burger5"
            title="Big Beast"
            image="/images/b6.png"
            reviews="9"
            price="14.20$"
          />
          <Burger
            key="burger6"
            title="Veggie Delight"
            image="/images/b9.png"
            reviews="5"
            price="8.50$"
          />
          <Burger
            title="Classic Stack"
            image="/images/b11.png"
            reviews="6"
            price="10.00$"
          />
          <Burger
            title="Mighty Munch"
            image="/images/b12.png"
            reviews="7"
            price="11.20$"
          />
          <Burger
            title="Bacon Bliss"
            image="/images/b2.png"
            reviews="9"
            price="12.50$"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Popular;
