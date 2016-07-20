# react-router-ie-hash-issue
Runnable react-router test app demoing IE11 hash onChange issue

`npm i && npm start`

Click on the "Go to hash" link with the console open. On most evergreen browsers the onChange hook will be fired a "hash changed" message will be logged to the console. On IE11, this hook is not fired and the message never gets logged.
