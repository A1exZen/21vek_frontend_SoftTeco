import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import type { CarouselRef } from 'antd/es/carousel';
import { SLIDES } from './constants';
import styles from './styles.module.scss';
import { cc } from '@/utils/combineClasses';

const ProductSlider = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => carouselRef.current?.prev();
  const handleNext = () => carouselRef.current?.next();

  return (
    <section className={styles.slider__section}>
      <div className={styles.carousel__wrapper}>
        <button
          onClick={handlePrev}
          className={cc(styles.arrow__button, styles['arrow-left'])}
        >
          <LeftOutlined />
        </button>

        <div className={styles.slide__container}>
          <Carousel
            ref={carouselRef}
            beforeChange={(_, newIndex) => setCurrentSlide(newIndex)}
            dots={false}
            autoplay
            autoplaySpeed={3000}
          >
            {SLIDES.map((slide) => (
              <div key={slide.id}>
                <div className={styles.slide__content}>
                  <Link to={slide.path} className={styles.slide__wrapper}>
                    <img src={slide.img} alt={slide.alt} />
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <button
          onClick={handleNext}
          className={cc(styles.arrow__button, styles['arrow-right'])}
        >
          <RightOutlined />
        </button>
      </div>

      <div className={styles.dots__container}>
        {SLIDES.map((_, index) => (
          <div
            key={index}
            className={cc(styles.dot, currentSlide === index ? styles['active-dot'] : '')}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
