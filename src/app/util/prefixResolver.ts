import { commandkit } from 'commandkit';

let registered = false;

export function registerPrefixResolver() {
    if (registered) return;

    const prefix = process.env.PREFIX || '!'
    commandkit.setPrefixResolver(async (messsage) => {
        return prefix;
    });

    registered = true;
}