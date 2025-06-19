import Background from '@/assets/images/business_background.jpg';
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

import Step1 from '@/assets/images/business_step1.jpg'
import Step2 from '@/assets/images/business_step2.jpg'
import Step3 from '@/assets/images/business_step3.jpg'
import Step4 from '@/assets/images/business_step4.jpg'

import LogisticsImg from '@/assets/images/business_logistics.jpg'
import DeliveryImg from '@/assets/images/business_delivery.jpg'
import PurchaseImg from '@/assets/images/business_purchase.jpg'

import SupportImg from '@/assets/images/business__support.jpg'
import CalendarIcon from '@/assets/icons/calendar.svg';
import PhoneIcon    from '@/assets/icons/phone.svg';
import MailIcon     from '@/assets/icons/mail.svg';


import { Carousel, Collapse, CollapseProps } from 'antd';


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


  const steps = [
    {title: "Выбирайте товары на сайте 21vek.by", image: Step1, number: 1},
    {title: "Получайте счет и оплачивайте его", image: Step3, number: 3, button: "Подробнее"},
    {title: "Оформляйте и контролируйте заказы в личном кабинете", image: Step2, number: 2},
    
    {title: "Согласовываем время доставки и привозим заказ", image: Step4, number: 4},
  ]

  const abilities = [
    {title: "Широкая сеть сервисов по всей стране", image: LogisticsImg},
    {title: "Дополнительно оказываем транспортные услуги", image: DeliveryImg},
    {title: "Приобретение товаров с целью розничной торговли", image: PurchaseImg},
  ]

  const collapseItems: CollapseProps['items'] =[
    {
      key: '1',
      label: 'Как получить счет?',
      children: <p>Оформить заказ через корзину сайта
                  Для этого необходимо войти в ваш аккаунт, добавить в корзину нужные вам товары, выбрать способ доставки (самовывоз или доставка курьером) и ввести контактный номер телефона, выбрать вариант оплаты — оплата для юридических лиц. Заполнить реквизиты организации (УНП, юридическое название, юридический адрес, расчетный счет IBAN, БИК, банк) и нажать кнопку «Подтвердить заказ».
                  Ожидайте счет на электронную почту, которую вы указали в вашем личном кабинете.

                  Написать письмо на почту beznal@21vek.by
                  Для получения счета укажите в письме необходимые вам товары (наименование и/или код товара, либо ссылку на него) и их количество. Укажите желаемый способ доставки (самовывоз или доставка курьером), адрес доставки или пункта выдачи и контактный номер телефона для связи.
                  Ожидайте счет на электронную почту.</p>,
    },
    {
      key: '2',
      label: 'Какие условия оплаты доступны юридическим лицам?',
      children: <p>100% предоплата в течение 3-х банковских дней с даты выставления счета.
        Отсрочка платежа предоставляется юридическим лицам и ИП для приобретения товаров для собственного потребления. 21vek.by предоставляет возможность гибкого выбора способа оплаты: единовременно или с оплатой частями, а также выбор сроков и размера ежемесячных платежей в зависимости от финансовых возможностей. Для оформления отсрочки оставьте комментарий к заказу с указанием желаемого срока отсрочки и с вами свяжутся наши менеджеры для оформления Договора.
        Корпоративной банковской картой онлайн — моментальный способ оплаты картой Visa, MasterCard или Белкарт, эмитированных банками РБ. Для всех типов карт используется перенаправление в систему Webpay. Доступ к данным карты осуществляется по протоколу безопасной передачи данных TLS, а для осуществления аутентификации держателя карточки используются методы Verified by Visa, MasterCard Securecode, Белкарт ИнтернетПароль.
        Возможно согласование индивидуальных условий оплаты с учетом истории сотрудничества.</p>,
    },
    {
      key: '3',
      label: 'Как получить договор?',
      children: <p>Наш счет является договором.
      В случае необходимости заключения договора иного формата сообщите об этом при оформлении заказа.</p>,
    },
    {
      key: '4',
      label: 'Можно ли заключить договор с оплатой через органы государственного казначейства?',
      children: <p>В случае необходимости заключения договора с оплатой через органы государственного казначейства, cообщите об этом при оформлении заказа, указав источник финансирования и орган государственного казначейства, с которого будет осуществляться оплата.</p>,
    },
    {
      key: '5',
      label: 'Вопросы по гарантии и замене',
      children: <p>Если у Вас возникли вопросы по гарантийному случаю, замене/возврату товара с производственными недостатками либо товара надлежащего качества, заполните онлайн-форму и ожидайте обратной связи от отдела по работе с рекламациями.</p>,
    },
  ]

  return (
    <div className={styles.business}>
      <div className={styles.business__topЫection}>
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
          
          <button className={styles.business__button}>Покупать для бизнеса</button>
        </div>

      </div>
      <div className={styles.business__carouselWrapper}>
        <div className={styles.business__carousel}>
          <Carousel autoplay effect="fade" arrows={true} >
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
      <div className={styles.business__steps}>
        <h2 className={styles.business__h2}>Как покупать товары в качестве юрлица</h2>
        <p className={styles.business__subtitle}>
          Оформляйте и контролируйте заказы в личном кабинете
        </p>
        <div className={styles.business__stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.business__stepCard}>
              {/* картинка на задний план */}
              <div className={styles.business__stepBg}>
                <img src={step.image} alt={step.title} />
              </div>

              {/*блок с номером/текстом/кнопкой поверх */}
              <div className={styles.business__stepInfo}>
                <div className={styles.business__stepNumber}>
                  {step.number}
                </div>
                <p className={styles.business__stepTitle}>
                  {step.title}
                </p>
                {step.button && (
                  <button className={styles.business__stepBtnOutline}>
                    {step.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className={styles.business__button}>
            Покупать для бизнеса
        </button>
      </div>
    
      <div className={styles.business_collapse}>
        <h2 className={styles.business__h2}>Полезная информация</h2>
        <Collapse items={collapseItems} size='large' bordered={false} className={styles.business__collapseItem}/>
        
      </div>

      <div className={styles.business__abilities}>
        <h2 className={styles.business__h2}>Еще больше возможностей с 21vek для вашего бизнеса</h2>
        <div className={styles.business__abilitiesGrid}>
          {abilities.map((ability, idx) => (
            <div key={idx} className={styles.business__abilityCard}>
              {/* картинка на задний план */}
              <div className={styles.business__abilityBg}>
                <img src={ability.image} alt={ability.title} />
              </div>

              {/*блок текстом поверх */}
              <div className={styles.business__abilityInfo}>
                
                <p className={styles.business__abilityTitle}>
                  {ability.title}
                </p>
               
              </div>
            </div>
          ))}
        </div>

        <button className={styles.business__button}>
          Покупать для бизнеса
        </button>
      </div>

      <div className={styles.business__contactSection}>
        <div className={styles.business__contactImage}>
          <img
            src={SupportImg}
            alt="Свяжитесь с нами"
          />
        </div>
        <div className={styles.business__contactContent}>
          <h2 className={styles.business__h2}>
            Остались вопросы? Свяжитесь с нами!
          </h2>
          <ul className={styles.business__contactList}>
            <li className={styles.business__contactItem}>
              <img
                src={CalendarIcon}
                alt=""
                className={styles.business__contactIcon}
              />
              График работы: пн – пт с 9:00 до 18:00
            </li>
            <li className={styles.business__contactItem}>
              <img
                src={PhoneIcon}
                alt=""
                className={styles.business__contactIcon}
              />
              +375 (17) 302 10 21, +375 (29) 302 10 21, +375 (25) 502 10 21
            </li>
            <li className={styles.business__contactItem}>
              <img
                src={MailIcon}
                alt=""
                className={styles.business__contactIcon}
              />
              <a href="mailto:beznal@21vek.by" className={styles.business__contactLink}>
                beznal@21vek.by
              </a>
            </li>

          </ul>
          <button className={styles.business__buttonOutline}>
            Отправить заявку
          </button>
        </div>


      </div>
      
    </div>
  );
};