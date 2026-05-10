import { Client, Message, OmitPartialGroupDMChannel, Emoji } from "discord.js";

const keyWords: string [] = [
    'captain',
    'kapitän',
    'käpt',
    'pirat',
    'meer',
    'zur see',
    'sea',
    'ship',
    'schiff',
    'matrose'
]

export const reactCaptain = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
     for(const keyWord of keyWords) {
        if(msg.content.toLowerCase().includes(keyWord)) {
            const tmp = msg.guild?.emojis.cache.find(emoji => emoji.name === 'captain_krull')
            if(tmp) {
                msg.react(tmp);
                break;
            } else {
                msg.react('\🏴‍☠️')
                break;
            }
        }
    };
}