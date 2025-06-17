import Background from '@/assets/images/business_background.jpg';
import Logo from '@/assets/images/business_page_logo.png';
import styles from './styles.module.scss';

//import CarouselPic1 from '@/'

import { Carousel } from 'antd';

export const BusinessPage = () => {
  return (
    <div className={styles.business}>
      <div className={styles.business__wrapper}>
        <div className={styles.business__background}>
          <img src={Background} alt="Background" className={styles.business__backgroundimage} />
        </div>
        
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
          
          <Carousel>
            <img/>
          </Carousel>
          <button className={styles.business__button}>Покупать для бизнеса</button>


        </div>
        <h2>Сотрудничаем с бизнесом любого размера</h2>
      </div>
    </div>
  );
};