import { Message, OmitPartialGroupDMChannel, Emoji } from "discord.js";


const keyCock: string [] = [
'cock',
'hahn',
'penis',
'dick'
]
const keyChicken: string [] = [
'chick',
'huhn',
]
const keyTurkey: string [] = [
'turkey',
'Türkei'
]

export const reactCock = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
     for(const keyWord of keyCock) {
        if(msg.content.toLowerCase().includes(keyWord)) {
                msg.react('\🐓');
                break;
        }
    };
}
export const reactChicken = (msg: OmitPartialGroupDMChannel<Message<boolean>>) => {
     for(const keyWord of keyChicken) {
        if(msg.content.toLowerCase().includes(keyWord)) {
                msg.react('\🐔');
                break;
        }
    };
}