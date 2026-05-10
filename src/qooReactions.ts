import { Client, Message, OmitPartialGroupDMChannel, Emoji } from "discord.js";

const keyWords01: string [] = [
'überrasch',
'surpris'
]
const keyWords02: string [] = [
'qoo',
]

export const reactQoo = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
     for(const keyWord of keyWords01) {
        if(msg.content.toLowerCase().includes(keyWord)) {
            const tmp = msg.guild?.emojis.cache.find(emoji => emoji.name === 'qoo_1')
            if(tmp) {
                msg.react(tmp);
                break;
            }
        }
    };
    if(msg.content.toLowerCase().includes(keyWords02[0])) {
            const tmp = msg.guild?.emojis.cache.find(emoji => emoji.name === 'qoo_2')
            if(tmp) {
                msg.react(tmp);
            }
    }

}