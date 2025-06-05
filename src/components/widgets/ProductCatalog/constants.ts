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
  {
    id: "175",
    name: "Техника для дома",
    url: "home_tech",
    idParent: "1",
    idProduct: null
  },
  {
    id: "176",
    name: "Пылесосы",
    url: "vacuum",
    idParent: "175",
    idProduct: null
  },
  {
    id: "177",
    name: "Пылесосы профессиональные",
    url: "vacuum11555",
    idParent: "175",
    idProduct: null
  },
  {
    id: "178",
    name: "Роботы-пылесосы, мойщики окон",
    url: "robotic_vacuums",
    idParent: "175",
    idProduct: null
  },
  {
    id: "179",
    name: "Пароочистители",
    url: "steam_cleaner",
    idParent: "175",
    idProduct: null
  },
  {
    id: "180",
    name: "Электровеники, электрошвабры",
    url: "electro_brooms",
    idParent: "175",
    idProduct: null
  },
  {
    id: "181",
    name: "Стерилизационное оборудование",
    url: "sterilization_equipment",
    idParent: "175",
    idProduct: null
  },
  {
    id: "182",
    name: "Аксессуары для домашней техники",
    url: "home_appliance_accessories",
    idParent: "1",
    idProduct: null
  },
  {
    id: "183",
    name: "Принадлежности для пылесосов",
    url: "vacuum_accessories",
    idParent: "182",
    idProduct: null
  },
  {
    id: "184",
    name: "Щетки, насадки для пылесосов",
    url: "vacuum_attachments",
    idParent: "182",
    idProduct: null
  },
  {
    id: "185",
    name: "Аксессуары для роботов-пылесосов",
    url: "robotic_vacuum_accessories",
    idParent: "182",
    idProduct: null
  },
  {
    id: "186",
    name: "Расходные материалы для пылесосов",
    url: "vacuum_filters_bags",
    idParent: "182",
    idProduct: null
  },
  {
    id: "187",
    name: "Станции, аккумуляторы для роботов-пылесосов",
    url: "robot_vacuum_cleaner_batteries",
    idParent: "182",
    idProduct: null
  },
  {
    id: "188",
    name: "Аксессуары для швейных машин",
    url: "sewing_machine_accessories",
    idParent: "182",
    idProduct: null
  },
  {
    id: "189",
    name: "Аксессуары для промышленного швейного оборудования",
    url: "prof_sewing_accessories",
    idParent: "182",
    idProduct: null
  },
  {
    id: "190",
    name: "Комплектующие для климатической техники",
    url: "climatic_appliance_accessories",
    idParent: "182",
    idProduct: null
  },
  {
    id: "191",
    name: "Управление климатической техникой",
    url: "climate_tech_control",
    idParent: "182",
    idProduct: null
  },
  {
    id: "192",
    name: "Фильтры для климатической техники",
    url: "climate_filters",
    idParent: "182",
    idProduct: null
  },
  {
    id: "193",
    name: "Аксессуары для климатической техники",
    url: "climate_apps",
    idParent: "182",
    idProduct: null
  },
  {
    id: "194",
    name: "Аксессуары для кухонной техники",
    url: "small_tech_accessories",
    idParent: "1",
    idProduct: null
  },
  {
    id: "195",
    name: "Аксессуары для микроволновых печей",
    url: "microwave_accessories",
    idParent: "194",
    idProduct: null
  },
  {
    id: "196",
    name: "Вакуумные пакеты, контейнеры",
    url: "vacuum_packages_rolls",
    idParent: "194",
    idProduct: null
  },
  {
    id: "197",
    name: "Аксессуары для кофемашин",
    url: "coffee_machine_accessories",
    idParent: "194",
    idProduct: null
  },
  {
    id: "198",
    name: "Аксессуары для мультиварок, хлебопечек",
    url: "multicooker_accessories",
    idParent: "194",
    idProduct: null
  },
  {
    id: "199",
    name: "Аксессуары для тостеров, сэндвичниц",
    url: "toaster_accessories",
    idParent: "194",
    idProduct: null
  },
  {
    id: "200",
    name: "Аксессуары для кухонных комбайнов",
    url: "small_tech_apps",
    idParent: "194",
    idProduct: null
  },
  {
    id: "201",
    name: "Аксессуары для мясорубок",
    url: "meat_grinder_accessories",
    idParent: "194",
    idProduct: null
  },
  {
    id: "202",
    name: "Компьютерная техника",
    url: "comp_tech",
    idParent: "3",
    idProduct: null
  },
  {
    id: "203",
    name: "Ноутбуки",
    url: "notebooks",
    idParent: "202",
    idProduct: null
  },
  {
    id: "204",
    name: "Планшеты",
    url: "pads",
    idParent: "202",
    idProduct: null
  },
  {
    id: "205",
    name: "Моноблоки",
    url: "all_in_one_computers",
    idParent: "202",
    idProduct: null
  },
  {
    id: "206",
    name: "Компьютеры",
    url: "desktops",
    idParent: "202",
    idProduct: null
  },
  {
    id: "207",
    name: "Игровые компьютеры",
    url: "desktops1253182?alt",
    idParent: "202",
    idProduct: null
  },
  {
    id: "208",
    name: "Игровые консоли",
    url: "game_consoles713243",
    idParent: "202",
    idProduct: null
  },
  {
    id: "209",
    name: "Серверное оборудование",
    url: "servers",
    idParent: "202",
    idProduct: null
  },
  {
    id: "210",
    name: "Комплектующие",
    url: "hardware",
    idParent: "3",
    idProduct: null
  },
  {
    id: "211",
    name: "Жесткие диски, SSD",
    url: "hdd",
    idParent: "210",
    idProduct: null
  },
  {
    id: "212",
    name: "Оперативная память",
    url: "ram",
    idParent: "210",
    idProduct: null
  },
  {
    id: "213",
    name: "Видеокарты",
    url: "graphic_cards",
    idParent: "210",
    idProduct: null
  },
  {
    id: "214",
    name: "Компьютерные блоки питания",
    url: "power_supplies",
    idParent: "210",
    idProduct: null
  },
  {
    id: "215",
    name: "Материнские платы",
    url: "motherboards",
    idParent: "210",
    idProduct: null
  },
  {
    id: "216",
    name: "Системы охлаждения",
    url: "cooling_fans",
    idParent: "210",
    idProduct: null
  },
  {
    id: "217",
    name: "Корпуса для компьютеров",
    url: "chassis",
    idParent: "210",
    idProduct: null
  },
  {
    id: "218",
    name: "Аксессуары для компьютерной техники",
    url: "computer_accessories",
    idParent: "3",
    idProduct: null
  },
  {
    id: "219",
    name: "Подставки для ноутбуков",
    url: "notebook_stands",
    idParent: "218",
    idProduct: null
  },
  {
    id: "220",
    name: "Аксессуары для ноутбуков",
    url: "laptop_accessories",
    idParent: "218",
    idProduct: null
  },
  {
    id: "221",
    name: "Очки для компьютера",
    url: "computer_glasses",
    idParent: "218",
    idProduct: null
  },
  {
    id: "222",
    name: "Рюкзаки для ноутбуков",
    url: "travel_bagsfor_laptops",
    idParent: "218",
    idProduct: null
  },
  {
    id: "223",
    name: "Сумки, чехлы для ноутбуков",
    url: "laptop_bags",
    idParent: "218",
    idProduct: null
  },
  {
    id: "224",
    name: "Средства для ухода за электроникой",
    url: "electronic_cleaners",
    idParent: "218",
    idProduct: null
  },
  {
    id: "226",
    name: "Игровая зона",
    url: "game_zone",
    idParent: "3",
    idProduct: null
  },
  {
    id: "227",
    name: "Игровые приставки",
    url: "game_consoles",
    idParent: "226",
    idProduct: null
  },
  {
    id: "228",
    name: "Игры для приставок",
    url: "console_games",
    idParent: "226",
    idProduct: null
  },
  {
    id: "229",
    name: "Игровые контроллеры",
    url: "joysticks?alt",
    idParent: "226",
    idProduct: null
  },
  {
    id: "230",
    name: "Игровые ноутбуки",
    url: "notebooks147655",
    idParent: "226",
    idProduct: null
  },
  {
    id: "231",
    name: "Игровые компьютеры",
    url: "desktops1253182",
    idParent: "226",
    idProduct: null
  },
  {
    id: "232",
    name: "Игровые видеокарты",
    url: "graphic_cardsgaming",
    idParent: "226",
    idProduct: null
  },
  {
    id: "233",
    name: "Игровые мониторы",
    url: "monitors5243",
    idParent: "226",
    idProduct: null
  },
  {
    id: "234",
    name: "Накопители данных",
    url: "data_storage_devices",
    idParent: "3",
    idProduct: null
  },
  {
    id: "235",
    name: "USB Flash накопители",
    url: "usb",
    idParent: "234",
    idProduct: null
  },
  {
    id: "236",
    name: "Внешние HDD, SSD диски",
    url: "external_hdd",
    idParent: "234",
    idProduct: null
  },
  {
    id: "237",
    name: "Карты памяти",
    url: "memory_cards?alt",
    idParent: "234",
    idProduct: null
  },
  {
    id: "238",
    name: "Сетевые накопители",
    url: "nas",
    idParent: "234",
    idProduct: null
  },
  {
    id: "239",
    name: "Картридеры",
    url: "cardreaders",
    idParent: "234",
    idProduct: null
  },
  {
    id: "240",
    name: "Оптические диски",
    url: "optical_discs",
    idParent: "234",
    idProduct: null
  },
  {
    id: "241",
    name: "Компьютерная периферия",
    url: "peripherals",
    idParent: "3",
    idProduct: null
  },
  {
    id: "242",
    name: "Мониторы",
    url: "monitors",
    idParent: "241",
    idProduct: null
  },
  {
    id: "243",
    name: "Мыши",
    url: "mouses",
    idParent: "241",
    idProduct: null
  },
  {
    id: "244",
    name: "Клавиатуры",
    url: "keyboards",
    idParent: "241",
    idProduct: null
  },
  {
    id: "245",
    name: "Стилусы",
    url: "styluses",
    idParent: "241",
    idProduct: null
  },
  {
    id: "246",
    name: "Наборы периферии",
    url: "peripheral_sets",
    idParent: "241",
    idProduct: null
  },
  {
    id: "247",
    name: "Источники бесперебойного питания",
    url: "ups",
    idParent: "241",
    idProduct: null
  },
  {
    id: "248",
    name: "Стабилизаторы напряжения",
    url: "voltage_stabilizers",
    idParent: "241",
    idProduct: null
  },
  {
    id: "249",
    name: "Сетевое оборудование",
    url: "network",
    idParent: "3",
    idProduct: null
  },
  {
    id: "250",
    name: "Маршрутизаторы, DSL-модемы",
    url: "routers_dslmodems",
    idParent: "249",
    idProduct: null
  },
  {
    id: "251",
    name: "Wi-Fi точки доступа, усилители сигнала",
    url: "wap",
    idParent: "249",
    idProduct: null
  },
  {
    id: "252",
    name: "Беспроводные адаптеры",
    url: "wireless_adapters",
    idParent: "249",
    idProduct: null
  },
  {
    id: "253",
    name: "Коммутаторы",
    url: "switches",
    idParent: "249",
    idProduct: null
  },
  {
    id: "254",
    name: "Сетевые адаптеры",
    url: "network_adapters",
    idParent: "249",
    idProduct: null
  },
  {
    id: "255",
    name: "Сетевые комплектующие",
    url: "net_peripherals",
    idParent: "249",
    idProduct: null
  },
  {
    id: "256",
    name: "IP-телефония",
    url: "ip_telephony",
    idParent: "249",
    idProduct: null
  },
  {
    id: "257",
    name: "Система Умный дом",
    url: "smart_house",
    idParent: "3",
    idProduct: null
  },
  {
    id: "258",
    name: "Управление умным домом",
    url: "smart_home",
    idParent: "257",
    idProduct: null
  },
  {
    id: "259",
    name: "Умные колонки, станции",
    url: "portable_audiosmart",
    idParent: "257",
    idProduct: null
  },
  {
    id: "260",
    name: "Умные камеры видеонаблюдения",
    url: "cctv_camerassmart",
    idParent: "257",
    idProduct: null
  },
  {
    id: "261",
    name: "Умные датчики для дома",
    url: "technical_alarmssmart_home_sensors",
    idParent: "257",
    idProduct: null
  },
  {
    id: "262",
    name: "Умные лампы",
    url: "lightbulbs929515",
    idParent: "257",
    idProduct: null
  },
  {
    id: "263",
    name: "Умные выключатели",
    url: "electrical_switches_sockets1881919",
    idParent: "257",
    idProduct: null
  },
  {
    id: "264",
    name: "Умные розетки",
    url: "electrical_switches_sockets824388",
    idParent: "257",
    idProduct: null
  },
  {
    id: "265",
    name: "Умная техника",
    url: "smart_appliances",
    idParent: "3",
    idProduct: null
  },
  {
    id: "266",
    name: "Умные роботы-пылесосы",
    url: "robotic_vacuumssmart",
    idParent: "265",
    idProduct: null
  },
  {
    id: "267",
    name: "Умные телевизоры",
    url: "tvsmart",
    idParent: "265",
    idProduct: null
  },
  {
    id: "268",
    name: "Умные стиральные машины",
    url: "washing_machinessmart",
    idParent: "265",
    idProduct: null
  },
  {
    id: "269",
    name: "Умные чайники",
    url: "teapotssmart_kettles",
    idParent: "265",
    idProduct: null
  },
  {
    id: "270",
    name: "Умные вентиляторы",
    url: "blowerssmart",
    idParent: "265",
    idProduct: null
  },
  {
    id: "271",
    name: "Умные кондиционеры",
    url: "conditionerssmart",
    idParent: "265",
    idProduct: null
  },
  {
    id: "272",
    name: "Умные обогреватели",
    url: "heaterssmart",
    idParent: "265",
    idProduct: null
  },
  {
    id: "273",
    name: "Наблюдение и безопасность",
    url: "cctv",
    idParent: "3",
    idProduct: null
  },
  {
    id: "274",
    name: "Камеры видеонаблюдения",
    url: "cctv_cameras",
    idParent: "273",
    idProduct: null
  },
  {
    id: "275",
    name: "Аксессуары для CCTV",
    url: "cctv_hangers",
    idParent: "273",
    idProduct: null
  },
  {
    id: "276",
    name: "Домофоны, вызывные панели",
    url: "videophones",
    idParent: "273",
    idProduct: null
  },
  {
    id: "277",
    name: "Датчики для дома",
    url: "technical_alarms",
    idParent: "273",
    idProduct: null
  },
  {
    id: "278",
    name: "Охранные системы, сигнализации",
    url: "security_systems",
    idParent: "273",
    idProduct: null
  },
  {
    id: "279",
    name: "Системы контроля и управления доступом",
    url: "access_control_systems",
    idParent: "273",
    idProduct: null
  },
  {
    id: "280",
    name: "Металлодетекторы",
    url: "metal_detecting_devices",
    idParent: "273",
    idProduct: null
  }
];
