import { Message, OmitPartialGroupDMChannel } from "discord.js";

interface FoodReaction {
  keywords: string[];
  emoji: string;
}

const foodReactions: FoodReaction[] = [
  // fruits
  { keywords: ["grape", "traube"], emoji: "🍇" },
  { keywords: ["Cantaloupe"], emoji: "🍈" },
  { keywords: ["watermelon", "wassermelone"], emoji: "🍉" },
  { keywords: ["orange", "apfelsine", "mandarine"], emoji: "🍊" },
  { keywords: ["lemon", "zitron", "citron"], emoji: "🍋" },
  { keywords: ["lime"], emoji: "🍋‍🟩" },
  { keywords: ["banana", "banane"], emoji: "🍌" },
  { keywords: ["pineapple", "ananas"], emoji: "🍍" },
  { keywords: ["mango"], emoji: "🥭" },
  { keywords: ["apple", "apfel"], emoji: "🍎" },
  { keywords: ["green apple", "grüner apfel"], emoji: "🍏" },
  { keywords: ["pear", "birne"], emoji: "🍐" },
  { keywords: ["peach", "pfirsich"], emoji: "🍑" },
  { keywords: ["cherries", "kirschen", "cherry", "kirsche"], emoji: "🍒" },
  { keywords: ["strawberry", "erdbeere"], emoji: "🍓" },
  {
    keywords: ["blueberr", "blaubeere", "heidelbeere"],
    emoji: "🫐",
  },
  { keywords: ["kiwi"], emoji: "🥝" },
  { keywords: ["tomato", "tomate"], emoji: "🍅" },
  { keywords: ["olive"], emoji: "🫒" },
  { keywords: ["coconut", "kokos"], emoji: "🥥" },
  // vegetables
  { keywords: ["avocado"], emoji: "🥑" },
  { keywords: ["eggplant", "aubergine"], emoji: "🍆" },
  { keywords: ["potato", "kartoffel"], emoji: "🥔" },
  { keywords: ["carrot", "möhre", "karotte"], emoji: "🥕" },
  { keywords: [" corn", "mais"], emoji: "🌽" },
  { keywords: ["hot pepper", "chili", "pepperoni"], emoji: "🌶" },
  { keywords: ["bell pepper", "paprika"], emoji: "🫑" },
  { keywords: ["cucumber", "gurke"], emoji: "🥒" },
  { keywords: ["leafy green", "kohl", "cabbage"], emoji: "🥬" },
  { keywords: ["broccoli", "brokkoli"], emoji: "🥦" },
  { keywords: ["garlic", "knoblauch"], emoji: "🧄" },
  { keywords: ["onion", "zwiebel"], emoji: "🧅" },
  { keywords: ["peanut", "erdnüsse", "erdnuss"], emoji: "🥜" },
  { keywords: ["beans", "bohnen"], emoji: "🫘" },
  { keywords: ["chestnut", "kastanie"], emoji: "🌰" },
  { keywords: ["ginger root", "ingwer"], emoji: "🫚" },
  { keywords: ["erbsen", "peas"], emoji: "🫛" },
  // prepared foods & breads
  { keywords: ["bread", "brot", "toast"], emoji: "🍞" },
  { keywords: ["croissant"], emoji: "🥐" },
  { keywords: ["baguette", "Franzose"], emoji: "🥖" },
  { keywords: ["flatbread"], emoji: "🫓" },
  { keywords: ["pretzel", "brezel"], emoji: "🥨" },
  { keywords: ["bagel"], emoji: "🥯" },
  { keywords: ["pancakes", "pfannkuchen"], emoji: "🥞" },
  { keywords: ["waffle", "waffel"], emoji: "🧇" },
  { keywords: ["cheese", "käse"], emoji: "🧀" },
  { keywords: ["meat", "fleisch"], emoji: "🍖" },
  {
    keywords: ["poultry leg", "hähnchen", "chicken leg", "beinchen"],
    emoji: "🍗",
  },
  { keywords: ["steak"], emoji: "🥩" },
  { keywords: ["bacon", "speck"], emoji: "🥓" },
  { keywords: ["burger"], emoji: "🍔" },
  { keywords: ["pommes", "fries"], emoji: "🍟" },
  { keywords: ["pizza"], emoji: "🍕" },
  { keywords: ["hot dog"], emoji: "🌭" },
  { keywords: ["sandwich"], emoji: "🥪" },
  { keywords: ["taco"], emoji: "🌮" },
  { keywords: ["burrito", "wrap"], emoji: "🌯" },
  { keywords: ["tamale"], emoji: "🫔" },
  { keywords: ["döner", "kebap"], emoji: "🥙" },
  { keywords: ["falafel"], emoji: "🧆" },
  {
    keywords: [
      " egg ",
      " egg.",
      " egg?",
      " egg!",
      " ei ",
      " ei.",
      " ei?",
      " ei!",
    ],
    emoji: "🥚",
  },
  { keywords: ["fried egg", "spiegelei"], emoji: "🍳" },
  { keywords: ["wok"], emoji: "🥘" },
  { keywords: ["cooking", "kochen"], emoji: "🍲" },
  { keywords: ["fondue"], emoji: "🫕" },
  { keywords: ["suppe", "soup"], emoji: "🥣" },
  { keywords: ["salat", "salad"], emoji: "🥗" },
  { keywords: ["popcorn"], emoji: "🍿" },
  { keywords: ["butter"], emoji: "🧈" },
  { keywords: ["salt"], emoji: "🧂" },
  { keywords: ["dose"], emoji: "🥫" },
  // Asian food
  { keywords: ["bento box"], emoji: "🍱" },
  { keywords: ["rice cracker"], emoji: "🍘" },
  { keywords: ["rice ball", "japan"], emoji: "🍙" },
  { keywords: ["cooked rice", "reis"], emoji: "🍚" },
  { keywords: ["curry"], emoji: "🍛" },
  { keywords: ["steaming bowl", "noodles"], emoji: "🍜" },
  { keywords: ["spaghetti"], emoji: "🍝" },
  { keywords: ["sweet potato"], emoji: "🍠" },
  { keywords: ["oden"], emoji: "🍢" },
  { keywords: ["sushi"], emoji: "🍣" },
  { keywords: ["fried shrimp"], emoji: "🍤" },
  { keywords: ["fish cake with swirl"], emoji: "🍥" },
  { keywords: ["moon cake"], emoji: "🥮" },
  { keywords: ["dango"], emoji: "🍡" },
  { keywords: ["dumpling"], emoji: "🥟" },
  { keywords: ["fortune cookie"], emoji: "🥠" },
  { keywords: ["takeout box"], emoji: "🥡" },
  // sweets & desserts
  { keywords: ["soft ice cream"], emoji: "🍦" },
  { keywords: ["shaved ice"], emoji: "🍧" },
  { keywords: ["ice cream"], emoji: "🍨" },
  { keywords: ["doughnut", "donut"], emoji: "🍩" },
  { keywords: ["cookie", "keks"], emoji: "🍪" },
  { keywords: ["birthday cake", "torte"], emoji: "🎂" },
  { keywords: ["shortcake"], emoji: "🍰" },
  { keywords: ["cupcake"], emoji: "🧁" },
  { keywords: ["pie", "kuchen"], emoji: "🥧" },
  { keywords: ["chocolate bar", "schokolade"], emoji: "🍫" },
  { keywords: ["candy"], emoji: "🍬" },
  { keywords: ["lollipop", "lutscher"], emoji: "🍭" },
  { keywords: ["custard"], emoji: "🍮" },
  { keywords: ["honey pot", "honig"], emoji: "🍯" },
  // drinking
  { keywords: ["baby bottle"], emoji: "🍼" },
  { keywords: ["milk"], emoji: "🥛" },
  { keywords: ["hot beverage", "coffee", "kaffee"], emoji: "☕" },
  { keywords: ["teapot"], emoji: "🫖" },
  { keywords: ["teacup", "tee"], emoji: "🍵" },
  { keywords: ["sake"], emoji: "🍶" },
  { keywords: ["sekt", "champagner"], emoji: "🍾" },
  { keywords: ["wine", "wein ", "wein.", "wein?", "wein!"], emoji: "🍷" },
  { keywords: ["longdrink", "long drink"], emoji: "🍸" },
  { keywords: ["cocktail"], emoji: "🍹" },
  { keywords: ["beer", "bier"], emoji: "🍺" },
  { keywords: ["prost"], emoji: "🍻" },
  { keywords: ["stößchen"], emoji: "🥂" },
  { keywords: ["whisky", "whiskey"], emoji: "🥃" },
  { keywords: ["leer", "empty"], emoji: "🫗" },
  { keywords: ["cup with straw"], emoji: "🥤" },
  { keywords: ["bubble tea", "boba"], emoji: "🧋" },
  { keywords: ["beverage box"], emoji: "🧃" },
  { keywords: [" mate"], emoji: "🧉" },
  { keywords: ["ice cube"], emoji: "🧊" },
];

const reactToFood = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  const lowerContent = msg.content.toLowerCase();

  for (const food of foodReactions) {
    for (const keyword of food.keywords) {
      if (lowerContent.includes(keyword.toLowerCase())) {
        msg.react(food.emoji);
        break; // Break inner loop to stop checking other keywords for this food item
      }
    }
  }
};

export const reactFood = reactToFood;
