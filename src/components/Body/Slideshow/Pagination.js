import clsx from 'clsx';
import { Images } from './Images';
import styles from './Slideshow.module.scss';

function Pagination({ index, setIndex, setTransition, slideSumWidth }) {
    const paginationClass = clsx(styles.pagination);
    const circleDotClass = clsx(styles.circleDot);

    const dotStyles = [
        {
            backgroundColor: '#333',
        },
        {
            backgroundColor: '#a7a7a7',
        },
    ];

    const handleDotClick = (i) => {
        setIndex(i);
        setTransition(100 - i * slideSumWidth);
    };

    return (
        <div className={paginationClass}>
            {Images.map((_, i) => (
                <div
                    key={i}
                    className={circleDotClass}
                    style={dotStyles[i === index ? 0 : 1]}
                    onClick={() => handleDotClick(i)}
                ></div>
            ))}
        </div>
    );
}

export default Pagination;
