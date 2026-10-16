import { commandkit } from 'commandkit';

let registered = false;

export function registerPrefixResolver() {
    if (registered) return;

    commandkit.setPrefixResolver(async (message) => {
        return 'suga';
    });

    registered = true;
}