"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { imgUrl: '/caraousel/1.jpeg', alt: 'smartwatch' },
    { imgUrl: '/caraousel/2.jpeg', alt: 'bag' },
    { imgUrl: '/caraousel/3.jpeg', alt: 'lamp' },

]

const HeroCarousel = () => {
    return (
        <div className="hero-carousel">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                // interval={2000}
                showArrows={false}
                showStatus={false}
            >
                {heroImages.map((image) => (
                    <>
                        <div className="w-full h-[660px]">

                            <Image
                                src={image.imgUrl}
                                alt={image.alt}
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-[30px]"
                                key={image.alt}
                            />
                        </div>
                    </>
                ))}
            </Carousel>
            {/* 
            <Image
                src="assets/icons/hand-drawn-arrow.svg"
                alt="arrow"
                width={175}
                height={175}
                className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
            /> */}
        </div>
    )
}

export default HeroCarousel