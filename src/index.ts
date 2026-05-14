import { Client, ClientOptions, GatewayIntentBits, Partials } from "discord.js";
import dotenv from "dotenv";
import { reactChicken, reactCock } from "./msgReactions/birdReactions";
import { reactCaptain } from "./msgReactions/captainReactions";
import { reactDemon } from "./msgReactions/demon";
import { reactFood } from "./msgReactions/food";
import { reactMagic } from "./msgReactions/magic";
import { reactMammals } from "./msgReactions/mammals";
import { reactFrog, reactPaw } from "./msgReactions/other";
import { reactQoo } from "./msgReactions/qooReactions";
dotenv.config();

const { User, Message, GuildMember, ThreadMember, Poll } = Partials;

const options: ClientOptions = {
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessagePolls,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
  partials: [User, Message, GuildMember, ThreadMember, Poll],
};

const client = new Client(options);

client.login(process.env.DISCORD_TOKEN);
client.on("messageCreate", (msg) => {
  if (!msg.author.bot) {
    reactCaptain(msg);
    reactQoo(msg);
    reactCock(msg);
    reactMagic(msg);
    reactDemon(msg);
    reactChicken(msg);
    reactMammals(msg);
    reactPaw(msg);
    reactFrog(msg);
    reactFood(msg);
  }
});
