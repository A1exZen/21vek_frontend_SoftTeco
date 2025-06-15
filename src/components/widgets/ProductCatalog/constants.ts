export interface Category {
  id: string;
  name: string;
  idParent: string | null;
  idProduct: string | null;
  url: string;
}

export const productCategories: Category[] = [
  {
    id: '1',
    name: 'Бытовая техника',
    url: 'kitchen',
    idParent: null,
    idProduct: null,
  },
  {
    id: '2',
    name: 'Смартфоны, ТВ и электроника',
    url: 'electronics',
    idParent: null,
    idProduct: null,
  },
  {
    id: '3',
    name: 'Компьютеры и периферия',
    url: 'computers',
    idParent: null,
    idProduct: null,
  },
  {
    id: '4',
    name: 'Мебель',
    url: 'furniture',
    idParent: null,
    idProduct: null,
  },
  {
    id: '5',
    name: 'Товары для дома',
    url: 'house',
    idParent: null,
    idProduct: null,
  },
  {
    id: '6',
    name: 'Сантехника и водоснабжение',
    url: 'sanitary_engineering',
    idParent: null,
    idProduct: null,
  },
  {
    id: '7',
    name: 'Строительство',
    url: 'construction',
    idParent: null,
    idProduct: null,
  },
  {
    id: '8',
    name: 'Ремонт и отделка',
    url: 'repairs',
    idParent: null,
    idProduct: null,
  },
  {
    id: '9',
    name: 'Строительный инструмент',
    url: 'repairing_tools',
    idParent: null,
    idProduct: null,
  },
  {
    id: '10',
    name: 'Дом и сад',
    url: 'garden',
    idParent: null,
    idProduct: null,
  },
  {
    id: '11',
    name: 'Авто и мото',
    url: 'cars',
    idParent: null,
    idProduct: null,
  },
  {
    id: '12',
    name: 'Игрушки, товары для детей',
    url: 'kids',
    idParent: null,
    idProduct: null,
  },
  {
    id: '13',
    name: 'Красота и стиль',
    url: 'beauty',
    idParent: null,
    idProduct: null,
  },
  {
    id: '14',
    name: 'Здоровье',
    url: 'beauty_and_health',
    idParent: null,
    idProduct: null,
  },
  {
    id: '15',
    name: 'Спорт',
    url: 'sport',
    idParent: null,
    idProduct: null,
  },
  {
    id: '16',
    name: 'Туризм, активный отдых',
    url: 'tourism_activities',
    idParent: null,
    idProduct: null,
  },
  {
    id: '17',
    name: 'Зоотовары',
    url: 'pet_supplies',
    idParent: null,
    idProduct: null,
  },
  {
    id: '18',
    name: 'Товары для бизнеса, HoReCa',
    url: 'business',
    idParent: null,
    idProduct: null,
  },
  {
    id: '19',
    name: 'Досуг и хобби',
    url: 'hobby_supplies',
    idParent: null,
    idProduct: null,
  },
  {
    id: '20',
    name: 'Ювелирные украшения',
    url: 'jewelry',
    idParent: null,
    idProduct: null,
  },
  {
    id: '21',
    name: 'Товары для взрослых',
    url: 'adult_supplies',
    idParent: null,
    idProduct: null,
  },
  {
    id: '22',
    name: 'Книги и канцелярия',
    url: 'literature',
    idParent: null,
    idProduct: null,
  },
  {
    id: '23',
    name: 'Сертификаты',
    url: 'certificates',
    idParent: null,
    idProduct: null,
  },
  {
    id: '24',
    name: 'Смартфоны',
    url: 'mobile_phones',
    idParent: '2',
    idProduct: null,
  },
  {
    id: '26',
    name: 'Смартфоны восстановленные',
    url: 'mobile4079074',
    idParent: '24',
    idProduct: null,
  },
  {
    id: '27',
    name: 'Смартфоны Apple',
    url: 'mobileiphone',
    idParent: '24',
    idProduct: null,
  },
  {
    id: '28',
    name: 'Смартфоны Xiaomi',
    url: 'mobilexiaomi',
    idParent: '24',
    idProduct: null,
  },
  {
    id: '29',
    name: 'Смартфоны Samsung',
    url: 'mobilesamsung',
    idParent: '24',
    idProduct: null,
  },
  {
    id: '30',
    name: 'Смартфоны Honor',
    url: 'mobilehonor',
    idParent: '24',
    idProduct: null,
  },
  {
    id: '31',
    name: 'Смартфоны Huawei',
    url: 'mobilehuawei',
    idParent: '24',
    idProduct: null,
  },
  {
    id: '32',
    name: 'Планшеты, электронные книги',
    url: 'portable_devices',
    idParent: '2',
    idProduct: null,
  },
  {
    id: '33',
    name: 'Планшеты',
    url: 'pads?alt',
    idParent: '32',
    idProduct: null,
  },
  {
    id: '34',
    name: 'Электронные книги',
    url: 'ebooks',
    idParent: '32',
    idProduct: null,
  },
  {
    id: '35',
    name: 'Графические планшеты',
    url: 'graphics_tablets',
    idParent: '32',
    idProduct: null,
  },
  {
    id: '36',
    name: 'Блокноты электронные',
    url: 'handwriting_pads',
    idParent: '32',
    idProduct: null,
  },
  {
    id: '37',
    name: 'Чехлы, бамперы для планшетов',
    url: 'notebook_bags',
    idParent: '32',
    idProduct: null,
  },
  {
    id: '38',
    name: 'Аксессуары для планшетов, смартфонов',
    url: 'portative_apps',
    idParent: '2',
    idProduct: null,
  },
  {
    id: '39',
    name: 'Аксессуары для электронных книг',
    url: 'ebook_covers',
    idParent: '32',
    idProduct: null,
  },
  {
    id: '41',
    name: 'ЗУ для телефонов, планшетов',
    url: 'mobile_chargers',
    idParent: '38',
    idProduct: null,
  },
  {
    id: '42',
    name: 'Чехлы, защитные стекла для телефонов',
    url: 'mobile_apps',
    idParent: '38',
    idProduct: null,
  },
  {
    id: '43',
    name: 'Чехлы для смартфонов',
    url: 'mobile_appssmartphone_cases',
    idParent: '42',
    idProduct: null,
  },
  {
    id: '44',
    name: 'Защитные стекла для смартфонов',
    url: 'mobile_appsprotective_glasses',
    idParent: '42',
    idProduct: null,
  },
  {
    id: '45',
    name: 'Защитные пленки для смартфонов',
    url: 'mobile_appsprotective_films',
    idParent: '42',
    idProduct: null,
  },
  {
    id: '46',
    name: 'Стилусы для смартфонов',
    url: 'stylusesfor_smartphones',
    idParent: '38',
    idProduct: null,
  },
  {
    id: '47',
    name: 'Игровые аксессуары для смартфонов',
    url: 'joysticksfor_smartphones',
    idParent: '38',
    idProduct: null,
  },
  {
    id: '48',
    name: 'Аудиотехника',
    url: 'audio',
    idParent: '2',
    idProduct: null,
  },
  {
    id: '49',
    name: 'Мультимедиа акустика',
    url: 'comp_acoustic',
    idParent: '48',
    idProduct: null,
  },
  {
    id: '50',
    name: 'Радиочасы, метеостанции',
    url: 'clocks_meteo',
    idParent: '48',
    idProduct: null,
  },
  {
    id: '51',
    name: 'Радиоприемники',
    url: 'radio',
    idParent: '48',
    idProduct: null,
  },
  {
    id: '52',
    name: 'Музыкальные центры',
    url: 'stereo',
    idParent: '48',
    idProduct: null,
  },
  {
    id: '53',
    name: 'Домашние кинотеатры',
    url: 'home_cinemas',
    idParent: '48',
    idProduct: null,
  },
  {
    id: '54',
    name: 'Акустические системы',
    url: 'acoustics',
    idParent: '48',
    idProduct: null,
  },
  {
    id: '55',
    name: 'Проигрыватели виниловых пластинок',
    url: 'record_players',
    idParent: '48',
    idProduct: null,
  },
  {
    id: '56',
    name: 'Портативная аудиотехника',
    url: 'portable_audio_devices',
    idParent: '48',
    idProduct: null,
  },
  {
    id: '57',
    name: 'Наушники и гарнитуры',
    url: 'headphones',
    idParent: '56',
    idProduct: null,
  },
  {
    id: '58',
    name: 'Портативные колонки, акустика',
    url: 'portable_audio',
    idParent: '56',
    idProduct: null,
  },
  {
    id: '59',
    name: 'Умные колонки',
    url: 'portable_audio1753762',
    idParent: '56',
    idProduct: null,
  },
  {
    id: '60',
    name: 'MP3-плееры',
    url: 'mp3_players',
    idParent: '56',
    idProduct: null,
  },
  {
    id: '61',
    name: 'Диктофоны',
    url: 'voicerecorders',
    idParent: '56',
    idProduct: null,
  },
  {
    id: '62',
    name: 'CD-проигрыватели',
    url: 'cd_players',
    idParent: '56',
    idProduct: null,
  },
  {
    id: '63',
    name: 'Аксессуары для портативных устройств',
    url: 'portable_device_accessories',
    idParent: '56',
    idProduct: null,
  },
  {
    id: '64',
    name: 'Портативные аккумуляторы',
    url: 'powerbanks',
    idParent: '38',
    idProduct: null,
  },
  {
    id: '65',
    name: 'Элементы питания, зарядные устройства',
    url: 'batteries',
    idParent: '38',
    idProduct: null,
  },
  {
    id: '66',
    name: 'Держатели, док-станции',
    url: 'phone_hangers',
    idParent: '38',
    idProduct: null,
  },
  {
    id: '68',
    name: 'Кабели для телефонов, планшетов',
    url: 'cablestablet_cables',
    idParent: '38',
    idProduct: null,
  },
  {
    id: '70',
    name: 'Телевизоры, мониторы',
    url: 'tv_video',
    idParent: '2',
    idProduct: null,
  },
  {
    id: '71',
    name: 'Телевизоры',
    url: 'tv',
    idParent: '70',
    idProduct: null,
  },
  {
    id: '72',
    name: 'ТВ-приставки и медиаплееры',
    url: 'dvd',
    idParent: '70',
    idProduct: null,
  },
  {
    id: '73',
    name: 'Проекторы',
    url: 'projectors',
    idParent: '70',
    idProduct: null,
  },
  {
    id: '74',
    name: 'Проекционные экраны',
    url: 'projection_screens',
    idParent: '70',
    idProduct: null,
  },
  {
    id: '75',
    name: 'Информационные, гостиничные дисплеи',
    url: 'commercial_displays',
    idParent: '70',
    idProduct: null,
  },
  {
    id: '76',
    name: 'Смарт-часы, аксессуары',
    url: 'smart_watches_accessories',
    idParent: '2',
    idProduct: null,
  },
  {
    id: '77',
    name: 'Умные часы',
    url: 'smart_watches399033',
    idParent: '76',
    idProduct: null,
  },
  {
    id: '78',
    name: 'Фитнес-браслеты',
    url: 'smart_watches3589539',
    idParent: '76',
    idProduct: null,
  },
  {
    id: '79',
    name: 'Умные часы детские',
    url: 'smart_watches399043?alt',
    idParent: '76',
    idProduct: null,
  },
  {
    id: '80',
    name: 'Умные часы, фитнес-браслеты',
    url: 'smart_watches',
    idParent: '76',
    idProduct: null,
  },
  {
    id: '81',
    name: 'Ремешки, аксессуары для умных часов',
    url: 'smart_watch_accessories',
    idParent: '76',
    idProduct: null,
  },
  {
    id: '82',
    name: 'Кабели для умных часов',
    url: 'mobile_chargers2484285',
    idParent: '76',
    idProduct: null,
  },
  {
    id: '83',
    name: 'Фото, видеосъемка',
    url: 'portable',
    idParent: '2',
    idProduct: null,
  },
  {
    id: '84',
    name: 'Фотоаппараты',
    url: 'cameras',
    idParent: '83',
    idProduct: null,
  },
  {
    id: '85',
    name: 'Видеокамеры',
    url: 'video_cameras',
    idParent: '83',
    idProduct: null,
  },
  {
    id: '86',
    name: 'Экшн-камеры',
    url: 'action_cameras',
    idParent: '83',
    idProduct: null,
  },
  {
    id: '87',
    name: 'Карты памяти',
    url: 'memory_cards',
    idParent: '83',
    idProduct: null,
  },
  {
    id: '88',
    name: 'Объективы',
    url: 'lens',
    idParent: '83',
    idProduct: null,
  },
  {
    id: '89',
    name: 'Вспышки',
    url: 'flashes',
    idParent: '83',
    idProduct: null,
  },
  {
    id: '90',
    name: 'Аксессуары для камер',
    url: 'photo_apps',
    idParent: '83',
    idProduct: null,
  },
  {
    id: '91',
    name: 'Оборудование для фотостудии',
    url: 'photo_studio_equipment',
    idParent: '83',
    idProduct: null,
  },
  {
    id: '92',
    name: 'Кольцевые лампы',
    url: 'ring_lamps',
    idParent: '91',
    idProduct: null,
  },
  {
    id: '93',
    name: 'Фоны для фотостудии',
    url: 'photo_studio_backgrounds',
    idParent: '91',
    idProduct: null,
  },
  {
    id: '94',
    name: 'Студийное освещение',
    url: 'studio_lighting',
    idParent: '91',
    idProduct: null,
  },
  {
    id: '95',
    name: 'Насадки светоформирующие для фотостудии',
    url: 'lighting_modifiers',
    idParent: '91',
    idProduct: null,
  },
  {
    id: '96',
    name: 'Фотозонты, отражатели',
    url: 'photo_reflectors',
    idParent: '91',
    idProduct: null,
  },
  {
    id: '97',
    name: 'Оборудование для предметной съемки',
    url: 'product_photography_equipment',
    idParent: '91',
    idProduct: null,
  },
  {
    id: '98',
    name: 'Вспышки студийные',
    url: 'studio_flashes',
    idParent: '91',
    idProduct: null,
  },
  {
    id: '99',
    name: 'Аксессуары для телевизоров',
    url: 'tv_accessories',
    idParent: '70',
    idProduct: null,
  },
  {
    id: '100',
    name: 'Кронштейны, стойки',
    url: 'tv_hangers',
    idParent: '99',
    idProduct: null,
  },
  {
    id: '101',
    name: 'Кабели для телевизоров',
    url: 'cablesfor_tv',
    idParent: '99',
    idProduct: null,
  },
  {
    id: '102',
    name: 'ТВ-антенны',
    url: 'tv_antennas',
    idParent: '99',
    idProduct: null,
  },
  {
    id: '103',
    name: 'ТВ-тюнеры',
    url: 'tv_tuners',
    idParent: '99',
    idProduct: null,
  },
  {
    id: '104',
    name: 'Аксессуары для ТВ',
    url: 'video_apps',
    idParent: '99',
    idProduct: null,
  },
  {
    id: '105',
    name: 'Аксессуары для проектора',
    url: 'projection_apps',
    idParent: '70',
    idProduct: null,
  },
  {
    id: '106',
    name: 'Очки 3D',
    url: '3d_glasses',
    idParent: '99',
    idProduct: null,
  },
  {
    id: "107",
    name: "Крупная техника для кухни",
    url: "large_tech",
    idParent: "1",
    idProduct: null
  },
  {
    id: "108",
    name: "Холодильники",
    url: "refrigerators",
    idParent: "107",
    idProduct: null
  },
  {
    id: "109",
    name: "Вытяжки",
    url: "hoods",
    idParent: "107",
    idProduct: null
  },
  {
    id: "110",
    name: "Кухонные плиты",
    url: "cookers",
    idParent: "107",
    idProduct: null
  },
  {
    id: "111",
    name: "Морозильники",
    url: "freezers",
    idParent: "107",
    idProduct: null
  },
  {
    id: "112",
    name: "Посудомоечные машины",
    url: "dishwashers",
    idParent: "107",
    idProduct: null
  },
  {
    id: "113",
    name: "Настольные плиты",
    url: "table_cookers",
    idParent: "107",
    idProduct: null
  },
  {
    id: "114",
    name: "Винные шкафы",
    url: "wine_cabinets",
    idParent: "107",
    idProduct: null
  },
  {
    id: "115",
    name: "Встраиваемая техника, оборудование",
    url: "inbuilt_tech",
    idParent: "1",
    idProduct: null
  },
  {
    id: "116",
    name: "Варочные панели",
    url: "hobs",
    idParent: "115",
    idProduct: null
  },
  {
    id: "117",
    name: "Духовые шкафы",
    url: "ovens",
    idParent: "115",
    idProduct: null
  },
  {
    id: "118",
    name: "Холодильники встраиваемые",
    url: "builtin_refrigerators",
    idParent: "115",
    idProduct: null
  },
  {
    id: "119",
    name: "Посудомоечные машины встраиваемые",
    url: "dishwashers3607",
    idParent: "115",
    idProduct: null
  },
  {
    id: "120",
    name: "Микроволновые печи встраиваемые",
    url: "microwaves1034",
    idParent: "115",
    idProduct: null
  },
  {
    id: "121",
    name: "Кофемашины встраиваемые",
    url: "coffee_machinesbuiltin_coffee_machines",
    idParent: "115",
    idProduct: null
  },
  {
    id: "122",
    name: "Комплекты встраиваемой техники",
    url: "cooker_sets",
    idParent: "115",
    idProduct: null
  },
  {
    id: "123",
    name: "Техника для приготовления еды",
    url: "cooking_appliances",
    idParent: "1",
    idProduct: null
  },
  {
    id: "124",
    name: "Микроволновые печи",
    url: "microwaves",
    idParent: "123",
    idProduct: null
  },
  {
    id: "125",
    name: "Мультиварки",
    url: "electriccookers",
    idParent: "123",
    idProduct: null
  },
  {
    id: "126",
    name: "Сэндвичницы, хот-дог мейкеры",
    url: "sandwichers",
    idParent: "123",
    idProduct: null
  },
  {
    id: "127",
    name: "Тостеры",
    url: "toasters",
    idParent: "123",
    idProduct: null
  },
  {
    id: "128",
    name: "Электрогрили, электрошашлычницы",
    url: "grill",
    idParent: "123",
    idProduct: null
  },
  {
    id: "129",
    name: "Вафельницы, орешницы, кексницы",
    url: "waffles",
    idParent: "123",
    idProduct: null
  },
  {
    id: "130",
    name: "Хлебопечки",
    url: "breadmakers",
    idParent: "123",
    idProduct: null
  },
  {
    id: "131",
    name: "Техника для приготовления напитков",
    url: "kettles_coffee_makers",
    idParent: "1",
    idProduct: null
  },
  {
    id: "132",
    name: "Электрочайники",
    url: "teapots",
    idParent: "131",
    idProduct: null
  },
  {
    id: "133",
    name: "Кофеварки, кофемашины",
    url: "coffee_machines",
    idParent: "131",
    idProduct: null
  },
  {
    id: "134",
    name: "Соковыжималки",
    url: "juicers",
    idParent: "131",
    idProduct: null
  },
  {
    id: "135",
    name: "Кофемолки",
    url: "coffee_mills",
    idParent: "131",
    idProduct: null
  },
  {
    id: "136",
    name: "Вспениватели молока",
    url: "milk_frothers",
    idParent: "131",
    idProduct: null
  },
  {
    id: "137",
    name: "Сифоны для газирования воды",
    url: "soda_siphons",
    idParent: "131",
    idProduct: null
  },
  {
    id: "138",
    name: "Техника для измельчения продуктов",
    url: "food_grinders",
    idParent: "1",
    idProduct: null
  },
  {
    id: "139",
    name: "Блендеры",
    url: "blenders",
    idParent: "138",
    idProduct: null
  },
  {
    id: "140",
    name: "Кухонные комбайны, измельчители",
    url: "food_processors",
    idParent: "138",
    idProduct: null
  },
  {
    id: "141",
    name: "Планетарные миксеры",
    url: "mixerplanetary_mixers",
    idParent: "138",
    idProduct: null
  },
  {
    id: "142",
    name: "Миксеры",
    url: "mixer",
    idParent: "138",
    idProduct: null
  },
  {
    id: "143",
    name: "Мясорубки",
    url: "meat_grinders",
    idParent: "138",
    idProduct: null
  },
  {
    id: "144",
    name: "Ломтерезки",
    url: "slicers",
    idParent: "138",
    idProduct: null
  },
  {
    id: "145",
    name: "Мелкая техника",
    url: "small_tech",
    idParent: "1",
    idProduct: null
  },
  {
    id: "146",
    name: "Весы кухонные, бытовые",
    url: "kitchen_scales",
    idParent: "145",
    idProduct: null
  },
  {
    id: "147",
    name: "Сушилки для овощей и фруктов",
    url: "vegetable_dryers",
    idParent: "145",
    idProduct: null
  },
  {
    id: "148",
    name: "Вакууматоры",
    url: "vacuum_packing",
    idParent: "145",
    idProduct: null
  },
  {
    id: "149",
    name: "Открывалки, картофелечистки",
    url: "can_opener",
    idParent: "145",
    idProduct: null
  },
  {
    id: "150",
    name: "Проращиватели семян",
    url: "sprouters",
    idParent: "145",
    idProduct: null
  },
  {
    id: "151",
    name: "Маслобойки, сепараторы бытовые",
    url: "centrifugal_household_separators",
    idParent: "145",
    idProduct: null
  },
  {
    id: "152",
    name: "Аксессуары для крупной техники",
    url: "large_tech_accessories",
    idParent: "1",
    idProduct: null
  },
  {
    id: "153",
    name: "Аксессуары для вытяжек",
    url: "cooker_hood_accessories",
    idParent: "152",
    idProduct: null
  },
  {
    id: "154",
    name: "Аксессуары для плит и духовок",
    url: "stove_accessories",
    idParent: "152",
    idProduct: null
  },
  {
    id: "155",
    name: "Аксессуары для холодильников",
    url: "refrigerator_accessories",
    idParent: "152",
    idProduct: null
  },
  {
    id: "156",
    name: "Аксессуары для посудомоечных машин",
    url: "dishwasher_accessories",
    idParent: "152",
    idProduct: null
  },
  {
    id: "157",
    name: "Средства для посудомоечных машин",
    url: "dishwasher_products?alt",
    idParent: "152",
    idProduct: null
  },
  {
    id: "158",
    name: "Средства для ухода за техникой",
    url: "hometech_care?alt",
    idParent: "152",
    idProduct: null
  },
  {
    id: "159",
    name: "Техника для ухода за одеждой",
    url: "clothing_care_appliances",
    idParent: "1",
    idProduct: null
  },
  {
    id: "160",
    name: "Стиральные машины",
    url: "washing_machines",
    idParent: "159",
    idProduct: null
  },
  {
    id: "161",
    name: "Стиральные машины встраиваемые",
    url: "builtin_washing_machines",
    idParent: "159",
    idProduct: null
  },
  {
    id: "162",
    name: "Утюги",
    url: "irons",
    idParent: "159",
    idProduct: null
  },
  {
    id: "163",
    name: "Отпариватели",
    url: "garment_steamers",
    idParent: "159",
    idProduct: null
  },
  {
    id: "164",
    name: "Швейные, вышивальные машины",
    url: "sewing_machines",
    idParent: "159",
    idProduct: null
  },
  {
    id: "165",
    name: "Промышленные швейные машины",
    url: "prof_sewing",
    idParent: "159",
    idProduct: null
  },
  {
    id: "166",
    name: "Оверлоки",
    url: "overlocks",
    idParent: "159",
    idProduct: null
  },
  {
    id: "167",
    name: "Климатическая техника",
    url: "climate",
    idParent: "1",
    idProduct: null
  },
  {
    id: "168",
    name: "Вентиляторы бытовые",
    url: "blowers",
    idParent: "167",
    idProduct: null
  },
  {
    id: "169",
    name: "Кондиционеры, сплит-системы",
    url: "conditioners",
    idParent: "167",
    idProduct: null
  },
  {
    id: "170",
    name: "Охладители воздуха",
    url: "air_coolers",
    idParent: "167",
    idProduct: null
  },
  {
    id: "171",
    name: "Водонагреватели",
    url: "waterheaters",
    idParent: "167",
    idProduct: null
  },
  {
    id: "172",
    name: "Увлажнители, очистители воздуха",
    url: "humidifiers",
    idParent: "167",
    idProduct: null
  },
  {
    id: "173",
    name: "Камины, печи",
    url: "fireplaces",
    idParent: "167",
    idProduct: null
  },
  {
    id: "174",
    name: "Обогреватели",
    url: "heaters",
    idParent: "167",
    idProduct: null
  },
];
