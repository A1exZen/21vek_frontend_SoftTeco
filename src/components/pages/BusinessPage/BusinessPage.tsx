//import Background from '@/assets/images/business_background.jpg';
import Logo from '@/assets/images/business_page_logo.png';
import styles from './styles.module.scss';

import CarouselPic1 from '@/assets/images/business_carousel_pic1.jpg'
import CarouselPic2 from '@/assets/images/business_carousel_pic2.jpg'
import CarouselPic3 from '@/assets/images/business_carousel_pic3.jpg'
import CarouselPic4 from '@/assets/images/business_carousel_pic4.jpg'
import CarouselPic5 from '@/assets/images/business_carousel_pic5.jpg'
import CarouselPic6 from '@/assets/images/business_carousel_pic6.jpg'
import CarouselPic7 from '@/assets/images/business_carousel_pic7.jpg'

import { Carousel } from 'antd';

export const BusinessPage = () => {

  const carouselImages = [
    CarouselPic1,
    CarouselPic2,
    CarouselPic3,
    CarouselPic4,
    CarouselPic5,
    CarouselPic6,
    CarouselPic7,
  ];
  return (
    <div className={styles.business}>
      <div className={styles.business__topsection}>
        {/* <div className={styles.business__background}>
          <img src={Background} alt="Background" className={styles.business__backgroundimage} />
        </div> */}
        
        <div className={styles.business__content}>
          <div className={styles.business__logo}>
            <img src={Logo}  alt="21vek.by БИЗНЕС" />
          </div>
          
          <ul className={styles.business__features}>
            <li className={styles.business__featureItem} >Более <strong>1 200 000 товаров</strong> в наличии</li>
            <li className={styles.business__featureItem}>Прямой поставщик более <strong>3 000 наименований</strong> товаров</li>
            <li className={styles.business__featureItem}>Доставка в <strong>любую точку Беларуси</strong></li>
            <li className={styles.business__featureItem}><strong>130+ пунктов самовывоза</strong> по стране</li>
          </ul>
          
          <button className={styles.business__button}>Покупать для бизнеса</button>
        </div>

      </div>
      <div className={styles.business__carouselWrapper}>
        <div className={styles.business__carousel}>
          <Carousel autoplay effect="fade" className={styles.business__carouselContainer}>
            {carouselImages.map((img, index) => (
              <div key={index} className={styles.business__carouselItem}>
                <img 
                  src={img} 
                  alt={`Promo ${index + 1}`} 
                  className={styles.business__carouselImage}
                />
                    
              </div>
            ))}
          </Carousel>
        </div>
      </div> 

      <div className={styles.business__cooperation}>
        <h2 className={styles.business__h2}>Сотрудничаем с бизнесом любого размера</h2>
      </div>
      
    </div>
  );
};