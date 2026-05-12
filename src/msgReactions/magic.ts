import { OmitPartialGroupDMChannel, Message } from "discord.js";

const keyWords: string[] = [
  "magic",
  "magie",
  "zauber",
  "spell",
  "fireball",
  "feuerball",
  "analgewitter",
];

export const reactMagic = (
  msg: OmitPartialGroupDMChannel<Message<boolean>>,
) => {
  for (const keyWord of keyWords) {
    if (msg.content.toLowerCase().includes(keyWord)) {
      const tmp = msg.guild?.emojis.cache.find(
        (emoji) => emoji.name === "magician",
      );
      if (tmp) {
        msg.react(tmp);
        break;
      } else {
        msg.react("\🪄");
        break;
      }
    }
  }
};
