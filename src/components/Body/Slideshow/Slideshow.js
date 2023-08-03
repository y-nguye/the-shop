import { register } from 'swiper/element/bundle'; // Hiệu năng cao hơn so với dùng Swiper chính
import { Images } from './Images';
import './Slideshow.scss';

register();

const SlideshowList = () => {
    const sliderStyle = {
        width: '600px',
        height: '400px',
        borderRadius: '10px',
        objectFit: 'cover',
        transition: 'all 0.3s ease',
    };

    return Images.map((x) => (
        <swiper-slide>
            <img src={x.image} alt="img" style={sliderStyle} />
        </swiper-slide>
    ));
};

export default function Slideshow() {
    return (
        <>
            <div className="slide-show__container">
                <swiper-container
                    slides-per-view="1"
                    speed="500"
                    loop="true"
                    space-between="200"
                    mousewheel="true"
                >
                    <SlideshowList />
                </swiper-container>
            </div>
        </>
    );
}
