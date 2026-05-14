import { Message, OmitPartialGroupDMChannel } from "discord.js";

interface FoodReaction {
  keywords: string[];
  emoji: string;
}

const foodReactions: FoodReaction[] = [
  // Fruits
  { keywords: ["apple", "apfel"], emoji: "🍎" },
  { keywords: ["pear", "birne"], emoji: "🍐" },
  { keywords: ["orange"], emoji: "🍊" },
  { keywords: ["citron", "zitron", "lemon"], emoji: "🍋" },
  { keywords: ["lime"], emoji: "🍋‍🟩" },
  { keywords: ["banan"], emoji: "🍌" },
  { keywords: ["watermelon", "wassermelone"], emoji: "🍉" },
  { keywords: ["grapes", "trauben"], emoji: "🍇" },
  { keywords: ["strawberry", "erdbeere"], emoji: "🍓" },
  { keywords: ["blueberry", "blaubeere"], emoji: "🫐" },
  { keywords: ["honeydew", "honigmelone"], emoji: "🍈" },
  { keywords: ["cherry", "kirsche"], emoji: "🍒" },
  { keywords: ["peach", "pfirsich"], emoji: "🍑" },
  { keywords: ["mango"], emoji: "🥭" },
  { keywords: ["pineapple", "ananas"], emoji: "🍍" },
  { keywords: ["coconut", "kokosnuss"], emoji: "🥥" },
  { keywords: ["kiwifruit", "kiwi"], emoji: "🥝" },
  // Vegetables
  { keywords: ["tomato", "tomate"], emoji: "🍅" },
  { keywords: ["eggplant", "aubergine"], emoji: "🍆" },
  { keywords: ["avocado"], emoji: "🥑" },
  { keywords: ["broccoli", "brokkoli"], emoji: "🥦" },
  { keywords: ["peas", "erbsen"], emoji: "🫛" },
  { keywords: ["cabbage", "leafy green", "kohl", "kale"], emoji: "🥬" },
  { keywords: ["beetroot", "rübe", "rote beete"], emoji: "🫕" },
  { keywords: ["pickle", "gurke"], emoji: "🥒" },
  { keywords: ["chili", "pepperoni"], emoji: "🌶" },
  { keywords: ["bellpepper", "paprika"], emoji: "🫑" },
  { keywords: ["corn", "mais"], emoji: "🌽" },
  { keywords: ["carrot", "möhre", "karotte"], emoji: "🥕" },
  { keywords: ["olive"], emoji: "🫒" },
  { keywords: ["garlic", "knoblauch"], emoji: "🧄" },
  { keywords: ["onion", "zwiebel"], emoji: "🧅" },
  { keywords: ["ginger", "ingwer"], emoji: "🫚" },
  { keywords: ["potato", "kartoffel"], emoji: "🥔" },
  { keywords: ["sweetpotato", "süßkartoffel"], emoji: "🍠" },
  { keywords: ["bean", "bohne"], emoji: "🫘" },
  // Breads & Grains
  { keywords: ["croissant"], emoji: "🥐" },
  { keywords: ["bagel"], emoji: "🥯" },
  { keywords: ["bread", "brot"], emoji: "🍞" },
  { keywords: ["baguette", "stangenbrot"], emoji: "🥖" },
  { keywords: ["pretzel", "brezel"], emoji: "🥨" },
  // Dairy & Eggs
  { keywords: ["cheese", "käse"], emoji: "🧀" },
  { keywords: ["egg", " ei ", " ei."], emoji: "🥚" },
  { keywords: ["fried egg", "spiegeleier"], emoji: "🍳" },
  { keywords: ["butter"], emoji: "🧈" },
  { keywords: ["pancake", "pfannkuchen"], emoji: "🥞" },
  { keywords: ["waffle", "waffel"], emoji: "🧇" },
  // Meat
  { keywords: ["bacon", "speck"], emoji: "🥓" },
  { keywords: ["meat", "fleisch"], emoji: "🥩" },
  { keywords: ["chicken", "hähnchen", "huhn"], emoji: "🎗" },
];

const reactToFood = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  const lowerContent = msg.content.toLowerCase();

  for (const food of foodReactions) {
    for (const keyword of food.keywords) {
      if (lowerContent.includes(keyword.toLowerCase())) {
        msg.react(food.emoji);
        break;
      }
    }
  }
};

export const reactFood = reactToFood;
