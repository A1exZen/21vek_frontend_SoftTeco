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

import FactoryImg from '@/assets/images/business_factory.jpg'
import HotelImg from '@/assets/images/business_hotel.jpg'
import TradeImg from '@/assets/images/business_trade.jpg'
import OfficeImg from '@/assets/images/business_office.jpg'
import RestaurantImg from '@/assets/images/business_restaurant.jpg'
import ConstructionImg from '@/assets/images/business_construction.jpg'

import ListIcon from '@/assets/images/business_notebook_icon.png'
import FolderIcon from '@/assets/images/business_folder_icon.png'
import ChatIcon from '@/assets/images/business_chat_icon.png'

import CalcIcon from '@/assets/images/business_calculate_icon.png'

import ElectronicsImg from '@/assets/images/business_electronics.jpg'
import ComputersImg from '@/assets/images/business_computers.jpg'
import FurnitureImg from '@/assets/images/business_furniture.jpg'
import StationeryImg from '@/assets/images/business_stationery.jpg'
import ToolsImg from '@/assets/images/business_tools.jpg'
import WarehouseImg from '@/assets/images/business_warehouse.jpg'
import AppliancesImg from '@/assets/images/business_appliances.jpg'
import GiftsImg from '@/assets/images/business_gifts.jpg'

import GiftCardImg from '@/assets/images/business_giftcard.jpg'


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

  const businessCategories = [
    { title: "Производство", image: FactoryImg },
    { title: "Торговля", image: TradeImg },
    { title: "Гостиницы", image: HotelImg },
    { title: "Офис", image: OfficeImg },
    { title: "Строительство", image: ConstructionImg },
    { title: "Кафе и рестораны", image: RestaurantImg },
  ];

  const benefits = [
    {title: "Все цены с НДС", image: ListIcon, description: "Прозрачность и отсутствие скрытых платежей — вы видите итоговую стоимость сразу. Чем больше объем закупок, тем ниже цена"},
    {title: "Электронный документооборот", image: FolderIcon, description: "Быстрое оформление и обмен документами без бумажной волокиты. Закрывающие документы в соответствии с законодательством"},
    {title: "Гарантированный сервис", image: ChatIcon, description: "Надежность и качество обслуживания, закрепленные договором. Доступны замена, возврат и ремонт товара"},
    {title: "Отсрочка платежа", image: CalcIcon, description: "Возобновляемая отсрочка платежа до 90 дней с гибкими условиями погашения для каждого клиента"},
  ]

  const products = [
  { title: "Электроника", image: ElectronicsImg },
  { title: "Компьютеры и периферия", image: ComputersImg },
  { title: "Офисная мебель", image: FurnitureImg },
  { title: "Канцтовары", image: StationeryImg },
  { title: "Складское и торговое оборудование", image: WarehouseImg },
  { title: "Профессиональный инструмент", image: ToolsImg },
  { title: "Бытовая техника", image: AppliancesImg },
  { title: "Наградная и подарочная продукция", image: GiftsImg },
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
          <Carousel autoplay effect="fade" className={styles.business__carouselContainer} arrows={true} >
            {carouselImages.map((img, index) => (
              <div key={index} className={styles.business__carouselItem}> 
                <img 
                  src={img} 
                  alt={`Предложение ${index + 1}`} 
                  className={styles.business__carouselImage}
                />
                    
              </div>
            ))}
          </Carousel>
        </div>
      </div> 

      <div className={styles.business__cooperation}>
        <h2 className={styles.business__h2}>Сотрудничаем с бизнесом любого размера</h2>

       
        <div className={styles.business__categoriesGrid}>
          {businessCategories.map((category, index) => (
            <div key={index} className={styles.business__categoryCard}>
              <img 
                src={category.image} 
                alt={category.title} 
                className={styles.business__categoryImage}
              />
              <p className={styles.business__categoryTitle}>
                {category.title}
              </p>
            </div>
          ))}
        </div>
        <button className={styles.business__button}>Покупать для бизнеса</button>
      </div>
      
      <div className={styles.business__benefits}>
        <h2 className={styles.business__h2}>Почему с нами удобно?</h2>

        <div className={styles.business__benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.business__benefitCard}>
              <img
                src={benefit.image}
                alt={benefit.title}
                className={styles.business__benefitImage}
              />
              <p className={styles.business__benefitTitle}>
                {benefit.title}
              </p>
              <p className={styles.business__benefitDescription}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className={styles.business__allProducts}>
        <h2 className={styles.business__h2}>Найдите все необходимое</h2>
        <p className={styles.business__subtitle}>
          более 1 000 000 товаров для бизнеса
        </p>

        <div className={styles.business__productsGrid}>
          {products.map((prod, i) => (
            <div key={i} className={styles.business__productCard}>
              <p className={styles.business__productTitle}>{prod.title}</p>
              <img
                src={prod.image}
                alt={prod.title}
                className={styles.business__productImage}
              />
            </div>
          ))}
        </div>

        <button className={styles.business__buttonOutline}>
          Все категории
        </button>
      </div>

      <div className={styles.business__giftSection}>
        <div className={styles.business__giftImage}>
          <img
            src={GiftCardImg}
            alt="Подарочные сертификаты"
          />
        </div>

        <div className={styles.business__giftContent}>
            <h2 className={styles.business__h2}>
              Ищете универсальный подарок?
            </h2>
            <p className={styles.business__giftText}>
              Подарочный сертификат – это выгодное сочетание универсальности и индивидуальности в подарок для ваших партнёров и сотрудников
            </p>
            <p className={styles.business__giftSubtitle}>
              Сертификаты подойдут:
            </p>
            <ul className={styles.business__giftList}>
              <li>• для поздравления с праздниками: Новый год, 8 марта, 23 февраля</li>
              <li>• для важных событий: профессиональные праздники, день рождения компании</li>
              <li>• для партнёров и клиентов: благодарность за сотрудничество, поздравление с запуском проекта и просто для проявления внимания</li>
              <li>• для мотивации: на дни рождения коллег, за достижения в работе, на корпоративные мероприятия</li>
            </ul>

            <div className={styles.business__giftButtons}>
              <button className={styles.business__button}>
                Бумажные сертификаты
              </button>
              <button className={styles.business__button}>
                Электронные сертификаты
              </button>
            </div>
        </div>
      </div>
      <div>
        <h2 className={styles.business__h2}>Как покупать товары в качестве юрлица</h2>
        <p className={styles.business__subtitle}>
          Оформляйте и контролируйте заказы в личном кабинете
        </p>
      </div>
    
      
    </div>
  );
};