import { useEffect, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';
import { Images } from './Images';
import './Slideshow.scss';

const SlideshowList = ({ index }) => {
    const swiperStyle = [
        {
            width: '600px',
        },
        {
            width: '200px',
        },
    ];

    return Images.map((x, i) => (
        <swiper-slide key={i} style={swiperStyle[i === index ? 0 : 1]}>
            <div
                className="slide-show-item"
                style={{ backgroundImage: `url(${x.image})` }}
            >
                <div>
                    <h1 style={{ opacity: (i === index && '1') || '0' }}>
                        {x.title}
                    </h1>
                    <a
                        style={{
                            visibility: (i === index && 'visible') || 'hidden',
                        }}
                        href="http://example.com"
                    >
                        Xem thêm
                    </a>
                </div>
            </div>
        </swiper-slide>
    ));
};

export default function Slideshow() {
    const swiperRef = useRef(null);
    const [index, setIndex] = useState(0);
    // const [indexWeight, setIndexWeight] = useState(0);

    useEffect(() => {
        const typeWidth = ['auto', 3, 2, 1];
        register();
        const params = {
            slidesPerView: typeWidth[0],
            centeredSlides: true,
            spaceBetween: 20,
            mousewheel: true,
            autoplay: {
                delay: 4000,
                pauseOnMouseEnter: true,
            },
            speed: 400,
            parallax: true,
            navigation: {
                prevEl: '.slide-show__prev-button',
                nextEl: '.slide-show__next-button',
            },
            pagination: {
                clickable: true,
            },
            on: {
                slideChange: (swiper) => {
                    setIndex(swiper.realIndex);
                },
            },
        };

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return (
        <div className="slide-show__container">
            <swiper-container init="false" ref={swiperRef}>
                <SlideshowList index={index} />
            </swiper-container>
            <button className="slide-show__button slide-show__prev-button">
                <ArrowLeftShort />
            </button>
            <button className="slide-show__button slide-show__next-button">
                <ArrowRightShort />
            </button>
        </div>
    );
}
