import { Product } from "./types";

export const smartphones: Product[] = [
  {
    id: 1,
    category: "смартфоны",
    name: "Смартфон Samsung Galaxy A06 4GB/128GB (черный)",
    characteristics: {
      mainCharacteristics: {
        type: "смартфон",
        releaseYear: 2024,
        condition: "новый",
        screenDiagonal: 6.7,
        simCards: {
          count: 2,
          format: "Nano-SIM"
        }
      },
      os: {
        name: "Android",
        version: "Android 14"
      },
      screen: {
        resolution: "1600×720",
        pixelDensity: 262,
        colors: "16 миллионов",
        scratchProtection: "-"
      },
      processor: {
        platform: "MediaTek",
        cores: "8 (2+6)",
        frequency: "2000 МГц"
      },
      memory: {
        ram: "4 Гб",
        storage: "128 Гб"
      }
    }
  },
  {
    id: 2,
    category: "смартфоны",
    name: "Смартфон Apple iPhone 13 128GB (темная ночь)",
    characteristics: {
      mainCharacteristics: {
        type: "смартфон",
        releaseYear: 2021,
        condition: "-",
        screenDiagonal: 6.1,
        simCards: {
          count: 1,
          format: "Nano-SIM, eSIM"
        }
      },
      os: {
        name: "Apple iOS",
        version: "iOS 15"
      },
      screen: {
        resolution: "2532×1170",
        pixelDensity: 460,
        colors: "16 миллионов",
        scratchProtection: "есть"
      },
      processor: {
        platform: "Apple",
        cores: "6 (2+4)",
        frequency: "3220 МГц"
      },
      memory: {
        ram: "4 Гб",
        storage: "128 Гб"
      }
    }
  },
  {
    id: 3,
    category: "смартфоны",
    name: "Смартфон Honor X5b 4GB/64GB (Midnight Black)",
    characteristics: {
      mainCharacteristics: {
        type: "смартфон",
        releaseYear: 2024,
        condition: "новый",
        screenDiagonal: 6.56,
        simCards: {
          count: 2,
          format: "Nano-SIM"
        }
      },
      os: {
        name: "Android",
        version: "Android 14"
      },
      screen: {
        resolution: "1612×720",
        pixelDensity: "-",
        colors: "16,7 миллионов",
        scratchProtection: "-"
      },
      processor: {
        platform: "MediaTek",
        cores: 8,
        frequency: "2200 МГц"
      },
      memory: {
        ram: "4 Гб",
        storage: "64 Гб"
      }
    }
  }
];

export default smartphones;