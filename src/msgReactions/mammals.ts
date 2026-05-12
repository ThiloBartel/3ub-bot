import { Message, OmitPartialGroupDMChannel } from "discord.js";

const keyOtter: string[] = ["otter"];
const keySloth: string[] = ["sloth", "lazy", "faul"];
const keyMonkey: string[] = ["affe", "monkey", "affig"];
const keyHorse: string[] = ["pferd", "horse", "horsing"];
const keyDog: string[] = ["dog", "hund"];
const keyCat: string[] = ["katz", "cat"];
const keyLion: string[] = ["löwe", "lion"];
const keyWolf: string[] = ["wolf", "wolv"];
const keyTiger: string[] = ["tiger"];
const keyZebra: string[] = ["zebra"];
const keyUnicorn: string[] = ["unicorn", "einhorn", "kitsch"];
const keyDeer: string[] = ["deer", "rentier", "hirsch"];
const keyBison: string[] = ["bison"];
const keyFox: string[] = ["fox", "fuchs"];

const reactOtter = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyOtter) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦦");
      break;
    }
  }
};

const reactSloth = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keySloth) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦥");
      break;
    }
  }
};

const reactCat = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyCat) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐈‍⬛");
      break;
    }
  }
};
const reactLion = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyLion) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦁‍");
      break;
    }
  }
};
const reactTiger = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyTiger) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐅‍");
      break;
    }
  }
};
const reactHorse = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyHorse) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐎");
      break;
    }
  }
};
const reactUnicorn = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyUnicorn) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦄");
      break;
    }
  }
};
const reactMonkey = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyMonkey) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐒");
      break;
    }
  }
};
const reactDog = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyDog) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐕");
      break;
    }
  }
};
const reactWolf = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyWolf) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐺");
      break;
    }
  }
};
const reactZebra = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyZebra) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦓");
      break;
    }
  }
};
const reactDeer = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyDeer) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦌");
      break;
    }
  }
};
const reactBison = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyBison) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦬");
      break;
    }
  }
};
const reactFox = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyFox) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦊");
      break;
    }
  }
};

const keyGorilla: string[] = ["gorilla"];
const keyOrangutan: string[] = ["orangutan"];
const keyPoodle: string[] = ["poodle", "pudel"];
const keyGuideDog: string[] = ["blind"];

const reactGorilla = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyGorilla) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦍");
      break;
    }
  }
};
const reactOrangutan = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyOrangutan) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦧");
      break;
    }
  }
};
const reactPoodle = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyPoodle) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐩");
      break;
    }
  }
};
const reactGuideDog = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyGuideDog) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦮");
      break;
    }
  }
};

const keyRaccoon: string[] = ["raccoon", "waschbär"];
const keyPig: string[] = ["pig", "Schwein"];
const keyCow: string[] = ["kuh", "cow"];
const keyHippo: string[] = ["hippo"];
const keyBoar: string[] = ["boar", "eber"];
const keyRam: string[] = ["bock"];
const keyEwe: string[] = ["ewe", "sheep", "schaf"];
const keyOx: string[] = ["ox", "ochs"];

const reactRaccoon = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyRaccoon) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦝");
      break;
    }
  }
};
export const reactPig = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyPig) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐖");
      break;
    }
  }
};
const reactCow = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyCow) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐄");
      break;
    }
  }
};
const reactHippo = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyHippo) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦛");
      break;
    }
  }
};
const reactBoar = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyBoar) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐗");
      break;
    }
  }
};
const reactRam = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyRam) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐏");
      break;
    }
  }
};
const reactEwe = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyEwe) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐑");
      break;
    }
  }
};
const reactOx = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyOx) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐂");
      break;
    }
  }
};

const keyBuffalo: string[] = ["buffalo", "büffel"];
const keyLama: string[] = ["lama"];
const keyCamel: string[] = ["camel", "kamel"];
const keyGiraffe: string[] = ["camel"];
const keyElephant: string[] = ["elephant", "elefant"];
const keyMammoth: string[] = ["mammoth", "mammut"];
const keyRhino: string[] = ["rhino", "nashorn", "nashörn"];
const keyMouse: string[] = [" maus", " mäuse", "mouse", "mice"];
const keyRat: string[] = [
  " rat ",
  " rat.",
  " rat!",
  " rat,",
  " rat?",
  " rat:",
  " rat;",
  "ratte",
];

export const reactBuffalo = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  for (const keyWord of keyBuffalo) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐃");
      break;
    }
  }
};
export const reactLama = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyLama) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦙");
      break;
    }
  }
};
export const reactCamel = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  for (const keyWord of keyCamel) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐫");
      break;
    }
  }
};
export const reactGiraffe = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  for (const keyWord of keyGiraffe) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦒");
      break;
    }
  }
};
export const reactElephant = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  for (const keyWord of keyElephant) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐘");
      break;
    }
  }
};
export const reactMammoth = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  for (const keyWord of keyMammoth) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦣");
      break;
    }
  }
};
export const reactRhino = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  for (const keyWord of keyRhino) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦏");
      break;
    }
  }
};
export const reactMouse = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  for (const keyWord of keyMouse) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐁");
      break;
    }
  }
};
export const reactRat = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyRat) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐀");
      break;
    }
  }
};

const keyHamster: string[] = ["hamster"];
const keyRabbit: string[] = ["rabbit", "hase"];
const keyChipmunk: string[] = ["chipmunk", "eichhorn", "eichhörn"];
const keyBeaver: string[] = ["beaver", "biber"];
const keyHedgehog: string[] = ["hedgehog", "igel", "sonic"];
const keyBat: string[] = ["fledermaus", "fledermäus", "batman"];
const keyPolar: string[] = ["polar", "arktis", "nordpol"];
const keyKoala: string[] = ["koala", "eucalyptus"];
const keyPanda: string[] = ["panda", "bambus"];
const keySkunk: string[] = ["skunk", "stink", "smell"];
const keyKangaroo: string[] = ["kangaroo", "känguru", "australi", "down under"];
const keyBadger: string[] = ["badger", "dachs", "dax"];

const reactHamster = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyHamster) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐹");
      break;
    }
  }
};
const reactRabbit = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyRabbit) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐇");
      break;
    }
  }
};
const reactChipmunk = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyChipmunk) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐿️");
      break;
    }
  }
};
const reactBeaver = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyBeaver) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦫");
      break;
    }
  }
};
const reactHedgehog = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyHedgehog) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦔");
      break;
    }
  }
};
const reactBat = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyBat) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦇");
      break;
    }
  }
};
const reactPolar = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyPolar) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐻‍❄️");
      break;
    }
  }
};
const reactKoala = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyKoala) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐨");
      break;
    }
  }
};
const reactPanda = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyPanda) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐼");
      break;
    }
  }
};
const reactSkunk = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keySkunk) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦨");
      break;
    }
  }
};
const reactKangaroo = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyKangaroo) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦘");
      break;
    }
  }
};
const reactBadger = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyBadger) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🦡");
      break;
    }
  }
};
export const reactMammals = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  reactBadger(msg);
  reactBat(msg);
  reactBeaver(msg);
  reactBison(msg);
  reactBoar(msg);
  reactBuffalo(msg);
  reactCamel(msg);
  reactCat(msg);
  reactChipmunk(msg);
  reactCow(msg);
  reactDeer(msg);
  reactDog(msg);
  reactElephant(msg);
  reactEwe(msg);
  reactFox(msg);
  reactGiraffe(msg);
  reactGorilla(msg);
  reactGuideDog(msg);
  reactHamster(msg);
  reactHedgehog(msg);
  reactHippo(msg);
  reactHorse(msg);
  reactKangaroo(msg);
  reactKoala(msg);
  reactLama(msg);
  reactLion(msg);
  reactMammoth(msg);
  reactMonkey(msg);
  reactMouse(msg);
  reactOrangutan(msg);
  reactOtter(msg);
  reactOx(msg);
  reactPanda(msg);
  reactPig(msg);
  reactPolar(msg);
  reactPoodle(msg);
  reactRabbit(msg);
  reactRaccoon(msg);
  reactRam(msg);
  reactRat(msg);
  reactRhino(msg);
  reactSkunk(msg);
  reactSloth(msg);
  reactTiger(msg);
  reactWolf(msg);
  reactZebra(msg);
};
