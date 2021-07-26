import { Event } from '../types/event';

export const event: Event = {
    name: 'ready',
    run: (client: any): any => {
        console.log(`${client.user.tag} encendido`);
    }
}