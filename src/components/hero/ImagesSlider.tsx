import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import './style.scss';

type propsTypes = {
    imgUrls: string[];
};

const ImagesSlider = ({ imgUrls }: propsTypes): JSX.Element => {
    const [imgIndex, setImgIndex] = useState<number>(0);

    const nextImg = (): void => {
        setImgIndex((index) => {
            if (index === imgUrls.length - 1) {
                return 0
            } else {
                return index + 1
            }
        })
    }
    const prevImg = (): void => {
        setImgIndex((index) => {
            if (index === 0) {
                return imgUrls.length - 1
            } else {
                return index - 1
            }
        })
    }

    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img className="object-cover w-full h-full block" src={imgUrls[imgIndex]} alt="img" />
            <button onClick={nextImg} style={{ right: 0 }} className='slider-btn'>
                <FaArrowCircleRight />
            </button>
            <button onClick={prevImg} style={{ left: 0 }} className='slider-btn'>
                <FaArrowCircleLeft />
            </button>
        </div>
    );
};

export default ImagesSlider;
