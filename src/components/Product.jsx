import React, { useState } from 'react'
import ProductData from "../data.json";
import ProductItem from './productItem';
import Slider from "react-slick";
import "./Product.css";


const  NextBtn = ({onClick}) => {
    return(
        <button onClick={onClick} className="glide__arrow glide__arrow--right">
        <i className="bi bi-chevron-right"></i>
      </button>
    )
}

const  PrevBtn = ({onClick}) => {
    return(
        <button onClick={onClick} className="glide__arrow glide__arrow--left">
            <i className="bi bi-chevron-left"></i>
        </button>
    )
}

const Product = () => {
    const [products, setProducts] = useState(ProductData);

    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextBtn/>,
        prevArrow: <PrevBtn/>,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
              }
            }
          ], 
    }

  return (
        <section className="products">
        <div className="container">
        <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
            <Slider {...sliderSettings}>
                {products.map((item) => {
                    return(
                    <ProductItem item={item} key={item.id}/>
                    )
                })}  
            </Slider>
        </div>
        </div>
    </section>
  )
}

export default Product