import { SliderStyled } from "./slider.styles";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import { InView } from "react-intersection-observer";
import { useState } from "react";


export const Slider = () => {
	const navigate = useNavigate();
	const [_, setInView] = useState(true);
	return (
		<InView onChange={setInView}>
			{({ ref, inView }) => (
				<SliderStyled ref={ref} className={`slider ${inView? "rolling":""}`}>
					<div className="slider__slides">
						<div className="slider__slide s--active">
							<div className="slider__slide-content">
								<h3 className="slider__slide-subheading">SUMMER COLLECTION</h3>
								<h2 className="slider__slide-heading">
									<span>Fall - Winter Collections 2022</span>
								</h2>
								<div className="slider__slide-shop-now-cta" onClick={() => navigate("shop")}>
									SHOP NOW
									<span>{decode(`&RightArrow;`)}</span>
								</div>
							</div>
							<div className="slider__slide-parts">
								<div className="slider__slide-part">
									<div
										className="slider__slide-part-inner"
										style={{
											backgroundImage: `url(IMAGES/hero-bg.png)`,
										}}
									></div>
								</div>
								<div className="slider__slide-part">
									<div
										className="slider__slide-part-inner"
										style={{
											backgroundImage: `url(IMAGES/hero-bg.png)`,
										}}
									></div>
								</div>
								<div className="slider__slide-part">
									<div
										className="slider__slide-part-inner"
										style={{
											backgroundImage: `url(IMAGES/hero-bg.png)`,
										}}
									></div>
								</div>
								<div className="slider__slide-part">
									<div
										className="slider__slide-part-inner"
										style={{
											backgroundImage: `url(IMAGES/hero-bg.png)`,
										}}
									></div>
								</div>
							</div>
							<div className="slider-hero-image-div">
								<div className="slider-hero-image-circle"></div>
								<img src={`IMAGES/home/hero-men.png`} alt="" className="slider-hero-image" />
							</div>
						</div>
					</div>
				</SliderStyled>
			)}
		</InView>
	);
};
