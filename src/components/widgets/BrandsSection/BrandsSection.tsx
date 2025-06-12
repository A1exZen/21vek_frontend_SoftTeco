import styles from './styles.module.scss';

import Xiaomi from '@/assets/icons/brands/xiaomi.svg'


export const BrandsSection = () => {
  return (
    <section className={styles['brands-container']}>

      <div className={styles['brands__card-large']}><Xiaomi/><span>Xiaomi</span></div>
      <div className={styles['brands__card']}><Xiaomi/> <div>Xiaomi</div></div>
      <div className={styles['brands__card']}><Xiaomi/> <span>Xiaomi</span></div>
      <div className={styles['brands__card']}><Xiaomi/> <span>Xiaomi</span></div>
      <div className={styles['brands__card']}><Xiaomi/> <span>Xiaomi</span></div>
      <div className={styles['brands__card']}><Xiaomi/> <span>Xiaomi</span></div>
      <div className={styles['brands__card']}><Xiaomi/> <span>Xiaomi</span></div>
      <div className={styles['brands__card-wide']}><Xiaomi/> <span>Xiaomi</span></div>
    </section>
  );
};
