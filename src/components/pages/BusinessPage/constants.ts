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

import Step1 from '@/assets/images/business_step1.jpg'
import Step2 from '@/assets/images/business_step2.jpg'
import Step3 from '@/assets/images/business_step3.jpg'
import Step4 from '@/assets/images/business_step4.jpg'

import LogisticsImg from '@/assets/images/business_logistics.jpg'
import DeliveryImg from '@/assets/images/business_delivery.jpg'
import PurchaseImg from '@/assets/images/business_purchase.jpg'

export const carouselImages = [
    CarouselPic1,
    CarouselPic2,
    CarouselPic3,
    CarouselPic4,
    CarouselPic5,
    CarouselPic6,
    CarouselPic7,
];

export const businessCategories = [
    { title: "Производство", image: FactoryImg },
    { title: "Торговля", image: TradeImg },
    { title: "Гостиницы", image: HotelImg },
    { title: "Офис", image: OfficeImg },
    { title: "Строительство", image: ConstructionImg },
    { title: "Кафе и рестораны", image: RestaurantImg },
];

export const benefits = [
    {title: "Все цены с НДС", image: ListIcon, description: "Прозрачность и отсутствие скрытых платежей — вы видите итоговую стоимость сразу. Чем больше объем закупок, тем ниже цена"},
    {title: "Электронный документооборот", image: FolderIcon, description: "Быстрое оформление и обмен документами без бумажной волокиты. Закрывающие документы в соответствии с законодательством"},
    {title: "Гарантированный сервис", image: ChatIcon, description: "Надежность и качество обслуживания, закрепленные договором. Доступны замена, возврат и ремонт товара"},
    {title: "Отсрочка платежа", image: CalcIcon, description: "Возобновляемая отсрочка платежа до 90 дней с гибкими условиями погашения для каждого клиента"},
];


export const allProducts = [
    { title: "Электроника", image: ElectronicsImg },
    { title: "Компьютеры и периферия", image: ComputersImg },
    { title: "Офисная мебель", image: FurnitureImg },
    { title: "Канцтовары", image: StationeryImg },
    { title: "Складское и торговое оборудование", image: WarehouseImg },
    { title: "Профессиональный инструмент", image: ToolsImg },
    { title: "Бытовая техника", image: AppliancesImg },
    { title: "Наградная и подарочная продукция", image: GiftsImg },
];

export const steps = [
    {title: "Выбирайте товары на сайте 21vek.by", image: Step1, number: 1},
    {title: "Получайте счет и оплачивайте его", image: Step3, number: 3, button: "Подробнее"},
    {title: "Оформляйте и контролируйте заказы в личном кабинете", image: Step2, number: 2},

    {title: "Согласовываем время доставки и привозим заказ", image: Step4, number: 4},
];

export const abilities = [
    {title: "Широкая сеть сервисов по всей стране", image: LogisticsImg},
    {title: "Дополнительно оказываем транспортные услуги", image: DeliveryImg},
    {title: "Приобретение товаров с целью розничной торговли", image: PurchaseImg},
];


