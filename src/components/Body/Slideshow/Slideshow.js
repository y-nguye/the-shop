import clsx from 'clsx';
import { Images } from './Images';
import styles from './Slideshow.module.scss';

function SlideShow({ index, transition, slideSize }) {
    const slideShowList = clsx(styles.slideShowList);

    return (
        <div
            className={slideShowList}
            style={{
                transform: `translateX(${transition}px)`,
            }}
        >
            <SlideShowList index={index} slideSize={slideSize} />
        </div>
    );
}

function SlideShowList({ index, slideSize }) {
    const slideShowItem__container = clsx(styles.slideShowItem__container);
    const slideShowItem = clsx(styles.slideShowItem);

    const swiperStyles = [
        {
            width: `${slideSize.larger}px`,
            marginRight: `${slideSize.centered}px`,
        },
        {
            width: `${slideSize.mini}px`,
            marginRight: `${slideSize.centered}px`,
        },
    ];

    return Images.map((x, i) => (
        <div
            className={slideShowItem__container}
            key={i}
            style={swiperStyles[i === index ? 0 : 1]}
        >
            <div
                className={slideShowItem}
                style={{ backgroundImage: `url(${x.image})` }}
            >
                <div>
                    <h1 style={{ opacity: i === index ? '1' : '0' }}>
                        {x.title}
                    </h1>
                    <a
                        style={{
                            visibility: i === index ? 'visible' : 'hidden',
                        }}
                        href="http://example.com"
                    >
                        Xem thêm
                    </a>
                </div>
            </div>
        </div>
    ));
}

export default SlideShow;
