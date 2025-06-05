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
    <section className={styles.sliderSection}>
      <div className={styles.carouselWrapper}>
        <button
          onClick={handlePrev}
          className={cc(styles.arrowButton, styles.arrowLeft)}
        >
          <LeftOutlined />
        </button>

        <div className={styles.slideContainer}>
          <Carousel
            ref={carouselRef}
            beforeChange={(_, newIndex) => setCurrentSlide(newIndex)}
            dots={false}
            autoplay
            autoplaySpeed={3000}
          >
            {SLIDES.map((slide) => (
              <div key={slide.id}>
                <div className={styles.slideContent}>
                  <Link to={slide.path} className={styles.slideWrapper}>
                    <img src={slide.img} alt={slide.alt} />
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <button
          onClick={handleNext}
          className={cc(styles.arrowButton, styles.arrowRight)}
        >
          <RightOutlined />
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {SLIDES.map((_, index) => (
          <div
            key={index}
            className={cc(styles.dot, currentSlide === index ? styles.activeDot : '')}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
