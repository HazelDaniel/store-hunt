import { ShopProduct } from "../shop-product/shop-product.component";
import { RelatedProductsStyled } from "./related-products.styles";
import { PRODUCT_DETAILS } from "../product-details/product-details.data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Controller, Navigation, Pagination } from "swiper";
import { useState } from "react";

export const RelatedProducts = () => {
  return (
    <RelatedProductsStyled>
      <p className="related-products-title">
        Related <span>Products</span>
      </p>
      {/* <div className="RPW-carousel-control left">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_97_216)">
            <path
              d="M39.6075 34.7053C39.6075 37.4127 37.4128 39.6073 34.7056 39.6073H5.29378C2.58643 39.6073 0.391823 37.4127 0.391823 34.7053V5.29356C0.391823 2.58629 2.58643 0.391602 5.29378 0.391602H34.7056C37.4128 0.391602 39.6075 2.58629 39.6075 5.29356V34.7053ZM28.5781 18.774H14.3798L19.6407 13.513C20.1193 13.0345 20.1193 12.2585 19.6407 11.78C19.1621 11.3014 18.3862 11.3014 17.9076 11.78L10.5546 19.1329C10.0761 19.6115 10.0761 20.3874 10.5546 20.866L17.9076 28.2191C18.3862 28.6975 19.1621 28.6975 19.6407 28.2191C20.1193 27.7404 20.1193 26.9644 19.6407 26.4857L14.3798 21.2249H28.5781C29.2549 21.2249 29.8036 20.6763 29.8036 19.9994C29.8036 19.3226 29.2549 18.774 28.5781 18.774Z"
              fill="#08090A"
            />
          </g>
          <defs>
            <clipPath id="clip0_97_216">
              <rect
                width="39.2157"
                height="39.2157"
                fill="white"
                transform="matrix(-1 0 0 1 39.6075 0.391602)"
              />
            </clipPath>
          </defs>
        </svg>
      </div> */}
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        dir={"rtl"}
        pagination={{
          clickable: true,
          // type: "fraction",
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          390: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper related-products-wrapper"
      >
        {/* TODO: this list is reversed . fix it in the swiper  */}
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
        <SwiperSlide className={"shop-product-swiper-div"}>
          <ShopProduct product={PRODUCT_DETAILS} $isVariant={true}/>
        </SwiperSlide>
      </Swiper>

      {/* <div className="RPW-carousel-control right">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_97_216)">
            <path
              d="M39.6075 34.7053C39.6075 37.4127 37.4128 39.6073 34.7056 39.6073H5.29378C2.58643 39.6073 0.391823 37.4127 0.391823 34.7053V5.29356C0.391823 2.58629 2.58643 0.391602 5.29378 0.391602H34.7056C37.4128 0.391602 39.6075 2.58629 39.6075 5.29356V34.7053ZM28.5781 18.774H14.3798L19.6407 13.513C20.1193 13.0345 20.1193 12.2585 19.6407 11.78C19.1621 11.3014 18.3862 11.3014 17.9076 11.78L10.5546 19.1329C10.0761 19.6115 10.0761 20.3874 10.5546 20.866L17.9076 28.2191C18.3862 28.6975 19.1621 28.6975 19.6407 28.2191C20.1193 27.7404 20.1193 26.9644 19.6407 26.4857L14.3798 21.2249H28.5781C29.2549 21.2249 29.8036 20.6763 29.8036 19.9994C29.8036 19.3226 29.2549 18.774 28.5781 18.774Z"
              fill="#08090A"
            />
          </g>
          <defs>
            <clipPath id="clip0_97_216">
              <rect
                width="39.2157"
                height="39.2157"
                fill="white"
                transform="matrix(-1 0 0 1 39.6075 0.391602)"
              />
            </clipPath>
          </defs>
        </svg>
      </div> */}
    </RelatedProductsStyled>
  );
};
