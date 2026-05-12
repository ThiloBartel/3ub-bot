import { OmitPartialGroupDMChannel, Message } from "discord.js";

const keyWords: string [] = [
    'demon',
    'dämon',
    'tanz',
    'dance',
    'dancing',
]

export const reactDemon = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
     for(const keyWord of keyWords) {
        if(msg.content.toLowerCase().includes(keyWord)) {
            const tmp = msg.guild?.emojis.cache.find(emoji => emoji.name === 'DemonGirlDance')
            if(tmp) {
                msg.react(tmp);
                break;
            }
        }
    };
}