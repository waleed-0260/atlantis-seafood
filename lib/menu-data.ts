export interface MenuItem {
  name: string;
  nameChinese?: string;
  description: string;
  price: string;
  isSignature?: boolean;
  isLimitedTime?: boolean;
  isMarketPrice?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  labelChinese?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "live-seafood",
    label: "Live Seafood",
    labelChinese: "生猛海鲜",
    items: [
      {
        name: "Live Steamed Grouper",
        nameChinese: "清蒸东星斑",
        description: "Freshly caught grouper steamed with ginger, spring onion, and premium light soy sauce. Priced by market weight.",
        price: "Market Price",
        isSignature: true,
        isMarketPrice: true,
      },
      {
        name: "Mud Crab — Salted Egg",
        nameChinese: "咸蛋螃蟹",
        description: "Live mud crab wok-tossed in a golden salted egg yolk sauce fragrant with curry leaves and fresh chilli.",
        price: "Market Price",
        isSignature: true,
        isMarketPrice: true,
      },
      {
        name: "Mud Crab — Black Pepper",
        nameChinese: "黑椒螃蟹",
        description: "Live mud crab wok-fried in a bold, aromatic black pepper sauce with butter and aromatics.",
        price: "Market Price",
        isMarketPrice: true,
      },
      {
        name: "Mud Crab — Steamed Garlic",
        nameChinese: "蒜蓉清蒸螃蟹",
        description: "Live mud crab steamed open and generously blanketed with fragrant minced garlic sauce.",
        price: "Market Price",
        isMarketPrice: true,
      },
      {
        name: "Live Lobster",
        nameChinese: "活龙虾",
        description: "Whole live lobster prepared your choice of style — thermidor, garlic butter, black pepper, or steamed. A showstopper.",
        price: "Market Price",
        isSignature: true,
        isMarketPrice: true,
      },
      {
        name: "Live Soon Hock (Marble Goby)",
        nameChinese: "笋壳鱼",
        description: "Prized for its delicate, sweet flesh. Steamed Cantonese-style or fried with ginger and spring onion.",
        price: "Market Price",
        isMarketPrice: true,
      },
      {
        name: "Live Flower Crab",
        nameChinese: "花蟹",
        description: "Flower crab stir-fried with ginger and spring onion in a light, aromatic Cantonese sauce.",
        price: "Market Price",
        isMarketPrice: true,
      },
      {
        name: "Live Mantis Prawn",
        nameChinese: "皮皮虾",
        description: "Sweet, meaty mantis prawns served steamed with superior soy or wok-fried with garlic butter.",
        price: "Market Price",
        isMarketPrice: true,
      },
    ],
  },
  {
    id: "premium",
    label: "Abalone & Premium Delicacies",
    labelChinese: "鲍鱼与珍贵食材",
    items: [
      {
        name: "South African Abalone",
        nameChinese: "南非鲍鱼",
        description: "Prized South African abalone braised in a premium oyster sauce reduction. Rich, tender, and unmistakably luxurious.",
        price: "Market Price",
        isSignature: true,
        isLimitedTime: true,
        isMarketPrice: true,
      },
      {
        name: "Canadian Oysters with Garlic",
        nameChinese: "蒜蓉烤生蚝 (加拿大)",
        description: "Canadian oysters steamed open and generously topped with fragrant garlic sauce and glass noodles. Our POPO seasonal special.",
        price: "RM 38 / 3 pcs",
        isSignature: true,
        isLimitedTime: true,
      },
      {
        name: "Fresh Scallops with Garlic",
        nameChinese: "蒜蓉扇贝",
        description: "Jumbo scallops steamed in the half-shell with garlic vermicelli, finished with a sizzle of hot oil.",
        price: "RM 48 / 3 pcs",
        isSignature: true,
      },
      {
        name: "Sea Cucumber Braised with Pork Tendon",
        nameChinese: "海参蹄筋",
        description: "Premium sea cucumber slowly braised with pork tendon in a rich, glossy sauce — a classic Cantonese banquet dish.",
        price: "RM 88",
        isSignature: true,
      },
      {
        name: "Geoduck Clam Sashimi & Congee",
        nameChinese: "象拔蚌",
        description: "Premium geoduck served two ways: silky sashimi slices and the body simmered into a delicate congee.",
        price: "Market Price",
        isMarketPrice: true,
      },
    ],
  },
  {
    id: "cantonese",
    label: "Cantonese Classics",
    labelChinese: "粤菜精选",
    items: [
      {
        name: "Peking Duck — Full",
        nameChinese: "北京烤鸭 (全只)",
        description: "Whole Peking duck with lacquered crispy skin, served with house-made pancakes, cucumber, and hoisin sauce.",
        price: "RM 188",
        isSignature: true,
      },
      {
        name: "Crispy Roast Chicken",
        nameChinese: "脆皮烧鸡",
        description: "Whole free-range chicken marinated and roasted to achieve an irresistibly crispy skin with tender, juicy flesh.",
        price: "RM 78",
      },
      {
        name: "Har Gow — Prawn Dumplings",
        nameChinese: "虾饺",
        description: "Steamed crystal-skin prawn dumplings — the benchmark of any dim sum chef, made here with whole prawn fillings.",
        price: "RM 18 / 4 pcs",
      },
      {
        name: "Siu Mai",
        nameChinese: "烧卖",
        description: "Classic open-top dumplings filled with prawn and minced meat, topped with a whole scallop.",
        price: "RM 18 / 4 pcs",
      },
      {
        name: "Baked BBQ Pork Bun",
        nameChinese: "焗叉烧包",
        description: "Golden-glazed baked buns filled with sweet, caramelised char siu filling. A beloved Cantonese classic.",
        price: "RM 16 / 3 pcs",
      },
      {
        name: "Wok-Fried Kai Lan with Oyster Sauce",
        nameChinese: "蚝油芥兰",
        description: "Crisp Chinese broccoli wok-tossed with premium oyster sauce and a touch of garlic. Simple, essential, perfect.",
        price: "RM 24",
      },
    ],
  },
  {
    id: "poultry",
    label: "Poultry & Meat",
    labelChinese: "禽肉类",
    items: [
      {
        name: "Butter Prawn",
        nameChinese: "牛油虾",
        description: "Tiger prawns fried in a luscious butter and egg floss sauce with toasted oats and curry leaves. A crowd essential.",
        price: "RM 58",
        isSignature: true,
      },
      {
        name: "Crispy Soft-Shell Crab",
        nameChinese: "脆皮软壳蟹",
        description: "Deep-fried soft-shell crab with a light, shattering batter, served with house sweet-chilli sauce.",
        price: "RM 48",
      },
      {
        name: "Salt & Pepper Squid",
        nameChinese: "椒盐鱿鱼",
        description: "Fresh squid dusted in seasoned flour and deep-fried until golden. Finished with garlic, chilli, and spring onion.",
        price: "RM 38",
      },
      {
        name: "Roast Duck with Plum Sauce",
        nameChinese: "梅子烧鸭",
        description: "Slow-roasted half duck with crispy skin, served with a house-made plum reduction sauce.",
        price: "RM 68 (half)",
      },
      {
        name: "Kung Pao Chicken",
        nameChinese: "宫保鸡丁",
        description: "Diced chicken wok-fried with dried chillies, Sichuan peppercorns, peanuts, and a bold, tangy sauce.",
        price: "RM 34",
      },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables & Tofu",
    labelChinese: "蔬菜与豆腐",
    items: [
      {
        name: "Mapo Tofu",
        nameChinese: "麻婆豆腐",
        description: "Silken tofu in a spicy, numbing sauce with mushrooms, black bean paste, and a touch of Sichuan pepper.",
        price: "RM 28",
        isSignature: true,
      },
      {
        name: "Braised Enoki Mushrooms",
        nameChinese: "红烧金针菇",
        description: "Enoki mushrooms slowly braised in an umami-rich abalone sauce — deeply savoury and satisfying.",
        price: "RM 26",
      },
      {
        name: "Four Seasons Beans",
        nameChinese: "干煸四季豆",
        description: "Blistered long beans wok-fried with garlic, preserved vegetables, and dried shrimp. Classic home-style.",
        price: "RM 24",
      },
      {
        name: "Stuffed Tofu Hakka Style",
        nameChinese: "客家酿豆腐",
        description: "Pan-fried tofu pockets stuffed with a prawn and fish paste filling, braised in a light savoury sauce.",
        price: "RM 32",
      },
    ],
  },
  {
    id: "soups",
    label: "Soups",
    labelChinese: "汤品",
    items: [
      {
        name: "Buddha Jumps Over the Wall",
        nameChinese: "佛跳墙",
        description: "A prestigious Cantonese treasure soup — abalone, sea cucumber, fish maw, dried scallops, and premium broth, slow-simmered for hours.",
        price: "RM 128 / pot",
        isSignature: true,
      },
      {
        name: "Double-Boiled Fish Maw Soup",
        nameChinese: "炖花胶汤",
        description: "Premium fish maw double-boiled with chicken, red dates, and wolfberries in a nourishing, collagen-rich broth.",
        price: "RM 56 / portion",
        isSignature: true,
      },
      {
        name: "Shark's Fin Soup Alternative",
        nameChinese: "竹笙汤羹",
        description: "Our sustainable alternative: bamboo pith and crab meat in a rich, velvety golden broth that rivals the classic.",
        price: "RM 38 / portion",
      },
      {
        name: "Tom Yum Seafood",
        nameChinese: "泰式冬荫功",
        description: "Aromatic Thai-inspired hot and sour broth brimming with prawns, squid, and mushrooms.",
        price: "RM 44 / pot",
      },
    ],
  },
  {
    id: "rice-noodles",
    label: "Rice & Noodles",
    labelChinese: "饭面类",
    items: [
      {
        name: "Seafood Fried Rice",
        nameChinese: "海鲜炒饭",
        description: "Wok-fried jasmine rice with assorted fresh seafood, egg, and house seasoning — a satisfying classic.",
        price: "RM 28",
        isSignature: true,
      },
      {
        name: "Cantonese Lobster Noodles",
        nameChinese: "龙虾炒面",
        description: "Pan-fried egg noodles tossed with lobster in a rich ginger-scallion sauce. Wok hei at its finest.",
        price: "Market Price",
        isSignature: true,
        isMarketPrice: true,
      },
      {
        name: "Ee-Fu Noodles with Mushrooms",
        nameChinese: "鲜菇伊府面",
        description: "Silky braised ee-fu noodles with a medley of fresh and dried mushrooms in an umami-rich sauce.",
        price: "RM 32",
      },
      {
        name: "Claypot Rice",
        nameChinese: "砂锅饭",
        description: "Fragrant rice cooked in a claypot with your choice of toppings — a heartwarming, smoky favourite.",
        price: "From RM 26",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Drinks",
    labelChinese: "甜品与饮料",
    items: [
      {
        name: "Mango Sago",
        nameChinese: "杨枝甘露",
        description: "The iconic Hong Kong dessert — chilled fresh mango puree with sago pearls and pomelo. Silky, refreshing, sublime.",
        price: "RM 18",
        isSignature: true,
      },
      {
        name: "Almond Tofu",
        nameChinese: "杏仁豆腐",
        description: "Delicate almond-flavoured jelly in a sweetened almond milk broth, served chilled. A classic Cantonese finish.",
        price: "RM 14",
      },
      {
        name: "Durian Pengat",
        nameChinese: "榴莲番薯",
        description: "Rich, custardy Musang King durian slow-cooked with yam and sweet potato in coconut milk. A Malaysian classic.",
        price: "RM 22 (seasonal)",
        isLimitedTime: true,
      },
      {
        name: "House Lychee Mocktail",
        nameChinese: "荔枝特调",
        description: "Fresh lychee, rose water, and lime soda — light, floral, and perfectly refreshing.",
        price: "RM 16",
      },
      {
        name: "Premium Chinese Tea",
        nameChinese: "功夫茶",
        description: "A curated selection of premium oolongs, pu-erhs, and white teas served with ceremony.",
        price: "From RM 12",
      },
      {
        name: "Cocktails & Mocktails",
        nameChinese: "特调饮品",
        description: "Our bar crafts ocean-inspired cocktails and mocktails — ask your server for tonight's specials.",
        price: "From RM 28",
        isSignature: true,
      },
    ],
  },
];
