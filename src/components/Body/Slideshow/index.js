import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';
import { Images } from './Images';

import styles from './Slideshow.module.scss';
import Slideshow from './SlideShow';
import Pagination from './Pagination';

export default function SlideShow() {
    // Class CSS, sử dụng thư viện clsx
    const slideShow__containerClass = clsx(styles.slideShow__container);
    const slideShow__prevButtonClass = clsx(
        styles.slideShow__button,
        styles.slideShow__prevButton
    );
    const slideShow__nextButtonClass = clsx(
        styles.slideShow__button,
        styles.slideShow__nextButton
    );

    const slideSize = {
        larger: 600,
        mini: 200,
        centered: 20,
    };

    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(100);
    const [disabledBtn__prev, setDisabledBtn__prev] = useState(false);
    const [disabledBtn__next, setDisabledBtn__next] = useState(false);

    const slideSumWidth = slideSize.mini + slideSize.centered;

    useEffect(() => {
        setDisabledBtn__prev(index === 0);
        setDisabledBtn__next(index === Images.length - 1);
    }, [index]);

    const handleSlideClick = (direction) => {
        const newIndex = direction === 'prev' ? index - 1 : index + 1;
        setIndex(newIndex);
        setTransition(100 - newIndex * slideSumWidth);
    };

    return (
        <div className={slideShow__containerClass}>
            <Slideshow
                index={index}
                transition={transition}
                slideSize={slideSize}
            />

            <Pagination
                index={index}
                setIndex={setIndex}
                setTransition={setTransition}
                slideSumWidth={slideSumWidth}
            />

            <button
                className={slideShow__prevButtonClass}
                disabled={disabledBtn__prev}
                onClick={() => handleSlideClick('prev')}
            >
                <ArrowLeftShort />
            </button>
            <button
                className={slideShow__nextButtonClass}
                disabled={disabledBtn__next}
                onClick={() => handleSlideClick('next')}
            >
                <ArrowRightShort />
            </button>
        </div>
    );
}
