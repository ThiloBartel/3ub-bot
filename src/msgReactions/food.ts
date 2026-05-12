import { Message, OmitPartialGroupDMChannel, Emoji } from "discord.js";

const keyApple = ["apple", "apfel"];
const keyPear = ["pear", "birne"];
const keyOrange = ["orange"];
const keyCitron = ["citron", "zitron"];

const reactApple = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyApple) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🍎");
      break;
    }
  }
};
const reactPear = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyPear) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🍐");
      break;
    }
  }
};
const reactOrange = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyOrange) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🍊");
      break;
    }
  }
};
const reactCitron = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyCitron) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🍋");
      break;
    }
  }
};

const keyLime = ["lime"];

const reactLime = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyLime) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🍋‍🟩");
      break;
    }
  }
};
const keyBanana = ["banan"];

const reactBanana = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyBanana) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🍌");
      break;
    }
  }
};

export const reactFood = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  reactApple(msg);
  reactOrange(msg);
  reactPear(msg);
  reactCitron(msg);
  reactLime(msg);
  reactBanana(msg);
};
