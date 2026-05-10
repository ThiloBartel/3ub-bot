import { Message, OmitPartialGroupDMChannel, Emoji } from "discord.js";

const keyFrog: string[] = ["frog", "frosch"];

const keyPaw: string[] = ["pfoten", "spur", "paw"];

export const reactFrog = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyFrog) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐸");
      break;
    }
  }
};

export const reactPaw = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
  for (const keyWord of keyPaw) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      msg.react("\🐾");
      break;
    }
  }
};
