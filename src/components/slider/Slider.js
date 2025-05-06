import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { sliderData } from "./slider-data"
import "./Slider.scss"


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliderLength-1 ? 0 : currentSlide +1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? sliderLength-1 : currentSlide -1);
    };

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if(autoScroll) {
            const auto = () => {
                slideInterval = setInterval(nextSlide, intervalTime)
            }
            auto();
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide, slideInterval, autoScroll])

    const scrollTo = () => {
        window.scrollTo({
            top: 650,
            behavior: "smooth"
          })
    }

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>

            {sliderData.map((slide, index) => {
                const {image, desc} = slide
                return (
                    <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                        {index === currentSlide && (
                            <>
                                <img src={image} alt="slide" />
                                <div className="content">
                                    <h4>{desc}</h4>
                                    <hr/>
                                    <button onClick={scrollTo} className="--btn --btn-primary">
                                        Shop Now
                                    </button>
                             </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider