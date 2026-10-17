import { Client } from 'discord.js';
import { registerPrefixResolver } from './app/util/prefixResolver';

const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
});

registerPrefixResolver();

import http from 'node:http'
http.createServer((req, res) => res.end('ok')).listen(process.env.PORT || 3000)

export default client;