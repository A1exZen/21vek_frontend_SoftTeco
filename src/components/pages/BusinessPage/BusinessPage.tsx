import Background from '@/assets/images/business_background.jpg';
import Logo from '@/assets/images/business_page_logo.png';
import styles from './styles.module.scss';

import GiftCardImg from '@/assets/images/business_giftcard.jpg'

import SupportImg from '@/assets/images/business__support.jpg'
import CalendarIcon from '@/assets/icons/calendar.svg';
import PhoneIcon    from '@/assets/icons/phone.svg';
import MailIcon     from '@/assets/icons/mail.svg';

import { carouselImages, abilities, businessCategories, benefits, allProducts, steps } from './constants';



import { Carousel, Collapse, CollapseProps } from 'antd';


export const BusinessPage = () => {

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
      
       <div className={styles['business__background']}>
        <img src={Background} alt="Background" className={styles['business__background-image']} />
      </div> 
      
      <div className={styles.business__preview}>
        <div className={styles.business__logo}>
          <img src={Logo}  alt="21vek.by БИЗНЕС" />
        </div>
        
        <ul className={styles.business__features}>
          <li className={styles['business__feature-item']} >Более <strong>1 200 000 товаров</strong> в наличии</li>
          <li className={styles['business__feature-item']}>Прямой поставщик более <strong>3 000 наименований</strong> товаров</li>
          <li className={styles['business__feature-item']}>Доставка в <strong>любую точку Беларуси</strong></li>
          <li className={styles['business__feature-item']}><strong>130+ пунктов самовывоза</strong> по стране</li>
        </ul>
        
        <button className={styles.business__button}>Покупать для бизнеса</button>
      </div>

      
      <div className={styles['business__carousel-wrapper']}>
        <div className={styles.business__carousel}>
          <Carousel autoplay effect="fade" arrows={true} >
            {carouselImages.map((img, index) => (
              <div key={index} > 
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

       
        <div className={styles['business__categories-grid']}>
          {businessCategories.map((category, index) => (
            <div key={index} className={styles['business__category-card']}>
              <img 
                src={category.image} 
                alt={category.title} 
                className={styles['business__category-image']}
              />
              <p className={styles['business__category-title']}>
                {category.title}
              </p>
            </div>
          ))}
        </div>
        <button className={styles.business__button}>Покупать для бизнеса</button>
      </div>
      
      <div className={styles.business__benefits}>
        <h2 className={styles.business__h2}>Почему с нами удобно?</h2>

        <div className={styles['business__benefits-grid']}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles['business__benefit-card']}>
              <img
                src={benefit.image}
                alt={benefit.title}
                className={styles['business__benefit-image']}
              />
              <p className={styles['business__benefit-title']}>
                {benefit.title}
              </p>
              <p className={styles['business__benefit-description']}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className={styles['business__all-products']}>
        <h2 className={styles.business__h2}>Найдите все необходимое</h2>
        <p className={styles.business__subtitle}>
          более 1 000 000 товаров для бизнеса
        </p>

        <div className={styles['business__products-grid']}>
          {allProducts.map((prod, i) => (
            <div key={i} className={styles['business__product-card']}>
              <p className={styles.business__productTitle}>{prod.title}</p>
              <img
                src={prod.image}
                alt={prod.title}
                className={styles['business__product-image']}
              />
            </div>
          ))}
        </div>

        <button className={styles['business__button-outline']}>
          Все категории
        </button>
      </div>

      <div className={styles['business__gift-section']}>
        <div className={styles['business__gift-image']}>
          <img
            src={GiftCardImg}
            alt="Подарочные сертификаты"
          />
        </div>

        <div className={styles['business__gift-content']}>
            <h2 className={styles.business__h2}>
              Ищете универсальный подарок?
            </h2>
            <p className={styles['business__gift-text']}>
              Подарочный сертификат – это выгодное сочетание универсальности и индивидуальности в подарок для ваших партнёров и сотрудников
            </p>
            <p className={styles['business__gift-subtitle']}>
              Сертификаты подойдут:
            </p>
            <ul className={styles['business__gift-list']}>
              <li>• для поздравления с праздниками: Новый год, 8 марта, 23 февраля</li>
              <li>• для важных событий: профессиональные праздники, день рождения компании</li>
              <li>• для партнёров и клиентов: благодарность за сотрудничество, поздравление с запуском проекта и просто для проявления внимания</li>
              <li>• для мотивации: на дни рождения коллег, за достижения в работе, на корпоративные мероприятия</li>
            </ul>

            <div className={styles['business__gift-buttons']}>
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
        <div className={styles['business__steps-grid']}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles['business__step-card']}>
              {/* картинка на задний план */}
              <div className={styles['business__step-bg']}>
                <img src={step.image} alt={step.title} />
              </div>

              {/*блок с номером/текстом/кнопкой поверх */}
              <div className={styles['business__step-info']}>
                <div className={styles['business__step-number']}>
                  {step.number}
                </div>
                <p className={styles['business__step-title']}>
                  {step.title}
                </p>
                {step.button && (
                  <button className={styles['business__step-btn-outline']}>
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
        <Collapse items={collapseItems} size='large' bordered={false} className={styles['business__collapse-item']}/>
        
      </div>

      <div className={styles.business__abilities}>
        <h2 className={styles.business__h2}>Еще больше возможностей с 21vek для вашего бизнеса</h2>
        <div className={styles['business__abilities-grid']}>
          {abilities.map((ability, idx) => (
            <div key={idx} className={styles['business__ability-card']}>
              {/* картинка на задний план */}
              <div className={styles['business__ability-bg']}>
                <img src={ability.image} alt={ability.title} />
              </div>

              {/*блок текстом поверх */}
              <div className={styles['business__ability-info']}>
                
                <p className={styles['business__ability-title']}>
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

      <div className={styles['business__contact-section']}>
        <div className={styles['business__contact-image']}>
          <img
            src={SupportImg}
            alt="Свяжитесь с нами"
          />
        </div>
        <div className={styles['business__contact-content']}>
          <h2 className={styles.business__h2}>
            Остались вопросы? Свяжитесь с нами!
          </h2>
          <ul className={styles['business__contact-list']}>
            <li className={styles['business__contact-item']}>
              <img
                src={CalendarIcon}
                alt=""
                className={styles['business__contact-icon']}
              />
              График работы: пн – пт с 9:00 до 18:00
            </li>
            <li className={styles['business__contact-item']}>
              <img
                src={PhoneIcon}
                alt=""
                className={styles['business__contact-icon']}
              />
              +375 (17) 302 10 21, +375 (29) 302 10 21, +375 (25) 502 10 21
            </li>
            <li className={styles['business__contact-item']}>
              <img
                src={MailIcon}
                alt=""
                className={styles['business__contact-icon']}
              />
              <a href="mailto:beznal@21vek.by" className={styles['business__contact-link']}>
                beznal@21vek.by
              </a>
            </li>

          </ul>
          <button className={styles['business__button-outline']}>
            Отправить заявку
          </button>
        </div>


      </div>
      
    </div>
  );
};

export default BusinessPage;