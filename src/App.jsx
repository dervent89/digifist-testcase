import React from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './App.scss';
function App() {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	return (
		<div className="App">
			<div className="App__cover">
				<img src="/images/left-bg.jpeg" alt="Cover" />
			</div>
			<div className="App__content">
				<div className="App__content-inner">
					<h1 className="App__content-title">Everyday items, we have something to suit every occasion.</h1>
					<p className="App__content-text">
						At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
					</p>
					<button className="App__content-button" title="Shop all everyday items">
						<span>Shop all everyday items</span>
					</button>
					<div className="product__slider">
						<Swiper
							modules={[Navigation]}
							navigation={{
								prevEl: navigationPrevRef.current,
								nextEl: navigationNextRef.current,
							}}
							className="product__slider-swiper"
							spaceBetween={12}
							slidesPerView={2}
							breakpoints={{
								769: {
									spaceBetween: 32,
								},
							}}
							onSwiper={(swiper) => {
								setTimeout(() => {
									swiper.params.navigation.prevEl = navigationPrevRef.current;
									swiper.params.navigation.nextEl = navigationNextRef.current;
									swiper.navigation.destroy();
									swiper.navigation.init();
									swiper.navigation.update();
								});
							}}
						>
							<SwiperSlide>
								<a href="#" rel="nofollow" className="product__item">
									<figure className="product__item-image">
										<img src="/images/product-1.jpg" alt="" />
									</figure>
									<div className="product__item-textwrap">
										<div className="product__item-title">365 Signature Hoodie</div>
										<div className="product__item-property">
											<div className="product__item-property_price">€33.95</div>
											<ul className="product__item-property_list">
												<li className="darkSkyBlue">
													<input type="radio" defaultChecked id="product-1-darkSkyBlue" name="product-1" />
													<label htmlFor="product-1-darkSkyBlue">
														<span>Dark Sky Blue</span>
													</label>
												</li>
												<li className="tuscany">
													<input type="radio" id="product-1-tuscany" name="product-1" />
													<label htmlFor="product-1-tuscany">
														<span>Tuscany</span>
													</label>
												</li>
												<li className="lightGrayishMagenta">
													<input type="radio" id="product-1-lightGrayishMagenta" name="product-1" />
													<label htmlFor="product-1-lightGrayishMagenta">
														<span>Light Grayish Magenta</span>
													</label>
												</li>
												<li className="laurelGreen">
													<input type="radio" id="product-1-laurelGreen" name="product-1" />
													<label htmlFor="product-1-laurelGreen">
														<span>Laurel Green</span>
													</label>
												</li>
											</ul>
										</div>
									</div>
								</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#" rel="nofollow" className="product__item">
									<figure className="product__item-image">
										<img src="/images/product-2.jpg" alt="" />
									</figure>
									<div className="product__item-textwrap">
										<div className="product__item-title">365 Signature Hoodie</div>
										<div className="product__item-property">
											<div className="product__item-property_price">€33.95</div>
											<ul className="product__item-property_list">
												<li className="darkSkyBlue">
													<input type="radio" defaultChecked id="product-2-darkSkyBlue" name="product-2" />
													<label htmlFor="product-2-darkSkyBlue">
														<span>Dark Sky Blue</span>
													</label>
												</li>
												<li className="tuscany">
													<input type="radio" id="product-2-tuscany" name="product-2" />
													<label htmlFor="product-2-tuscany">
														<span>Tuscany</span>
													</label>
												</li>
												<li className="lightGrayishMagenta">
													<input type="radio" id="product-2-lightGrayishMagenta" name="product-2" />
													<label htmlFor="product-2-lightGrayishMagenta">
														<span>Light Grayish Magenta</span>
													</label>
												</li>
												<li className="laurelGreen">
													<input type="radio" id="product-2-laurelGreen" name="product-2" />
													<label htmlFor="product-2-laurelGreen">
														<span>Laurel Green</span>
													</label>
												</li>
											</ul>
										</div>
									</div>
								</a>
							</SwiperSlide>
							<SwiperSlide>
								<a href="#" rel="nofollow" className="product__item">
									<figure className="product__item-image">
										<img src="/images/product-3.jpg" alt="" />
									</figure>
									<div className="product__item-textwrap">
										<div className="product__item-title">365 Signature Hoodie</div>
										<div className="product__item-property">
											<div className="product__item-property_price">€33.95</div>
											<ul className="product__item-property_list">
												<li className="darkSkyBlue">
													<input type="radio" defaultChecked id="product-3-darkSkyBlue" name="product-3" />
													<label htmlFor="product-3-darkSkyBlue">
														<span>Dark Sky Blue</span>
													</label>
												</li>
												<li className="tuscany">
													<input type="radio" id="product-3-tuscany" name="product-3" />
													<label htmlFor="product-3-tuscany">
														<span>Tuscany</span>
													</label>
												</li>
												<li className="lightGrayishMagenta">
													<input type="radio" id="product-3-lightGrayishMagenta" name="product-3" />
													<label htmlFor="product-3-lightGrayishMagenta">
														<span>Light Grayish Magenta</span>
													</label>
												</li>
												<li className="laurelGreen">
													<input type="radio" id="product-3-laurelGreen" name="product-3" />
													<label htmlFor="product-3-laurelGreen">
														<span>Laurel Green</span>
													</label>
												</li>
											</ul>
										</div>
									</div>
								</a>
							</SwiperSlide>
						</Swiper>
						<div ref={navigationPrevRef} className="product__slider-navigation product__slider-navigation_prev">
							<svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13">
								<path
									d="M11.354,1.646a.5.5,0,0,0-.707,0l-6,6a.5.5,0,0,0,0,.707l6,6a.5.5,0,1,0,.707-.707L5.707,8l5.646-5.646A.5.5,0,0,0,11.354,1.646Z"
									transform="translate(-4.5 -1.5)"
									fill="currentColor"
								/>
							</svg>
						</div>
						<div ref={navigationNextRef} className="product__slider-navigation product__slider-navigation_next">
							<svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13">
								<path
									d="M4.646,1.646a.5.5,0,0,1,.707,0l6,6a.5.5,0,0,1,0,.707l-6,6a.5.5,0,0,1-.707-.707L10.293,8,4.646,2.354A.5.5,0,0,1,4.646,1.646Z"
									transform="translate(-4.5 -1.5)"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
