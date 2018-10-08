# Torrent notifier

## Prerequisite 
- Node/NPM
- [Pushover account](https://pushover.net)

## Configure the app
 Change the values in `config.json` to match your Pushover account details.

 ```javascript
  {
    "PUSHOVER_USER_KEY": "MY_USER_KEY",
    "PUSHOVER_API_TOKEN": "MY_API_TOKEN",
    "NOTIFICATION_SOUND": "magic"
  }
 ```

 ## Build for your confguration
 Using yarn
```javascript
yarn build
```
or NPM
```javascript
npm run build
```

## Configure utorrent
Add this to utorrents run program when downloaded.
```
install-path/torrent-notifier/run.sh %T
```
