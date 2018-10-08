import config from './config.json';
import { argv } from 'yargs';
import Push from 'pushover-notifications';

const p = new Push({
  user: config.PUSHOVER_USER_KEY,
  token: config.PUSHOVER_API_TOKEN,
  sound: config.NOTIFICATION_SOUND
});

const message = {
  title: 'Torrent downloaded',
  message: argv.torrent
};

console.log(`Notifying user: ${p.user}, token: ${p.token} with`, message);
p.send(message);
