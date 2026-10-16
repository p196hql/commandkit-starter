import { Client } from 'discord.js';
import { registerPrefixResolver } from './app/util/prefixResolver';
import e from 'express';

const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
});

registerPrefixResolver();

const app = e();
app.use(e.json());
app.get('/', (_req, res) => res.json({ ok: true }));
app.listen(8080);

export default client;