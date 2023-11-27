import { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import './style.scss';
import Button from "../Button";
import { Link } from "react-router-dom";

type propsTypes = {
    imgUrls: string[];
};

const ImagesSlider = ({ imgUrls }: propsTypes): JSX.Element => {
    const [imgIndex, setImgIndex] = useState<number>(0);

    const nextImg = (): void => {
        setImgIndex((index) => {
            if (index === imgUrls.length - 1) {
                return 0;
            } else {
                return index + 1;
            }
        });
    };

    const prevImg = (): void => {
        setImgIndex((index) => {
            if (index === 0) {
                return imgUrls.length - 1;
            } else {
                return index - 1;
            }
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImg();
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center flex-col gap-2">
            <div className="relative w-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="w-full flex">
                    {imgUrls.map((url, index): JSX.Element => {
                        return (
                            <img
                                key={url}
                                className="object-cover w-full h-full block grow-0 shrink-0"
                                src={url}
                                alt={`img-${index}`}
                                style={{ transform: `translateX(${-100 * imgIndex}%)` }}
                            />
                        );
                    })}
                </div>
                <button onClick={nextImg} style={{ right: 0 }} className='slider-btn'>
                    <FaArrowCircleRight />
                </button>
                <button onClick={prevImg} style={{ left: 0 }} className='slider-btn'>
                    <FaArrowCircleLeft />
                </button>
            </div>
            <Link to="/about">
                <Button content="About Me" />
            </Link>
        </div>
    );
};

export default ImagesSlider;
