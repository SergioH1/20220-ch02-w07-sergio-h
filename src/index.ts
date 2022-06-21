import http from 'http';

import { app } from './app.js';

const PORT = process.env.PORT || 2530;
app.set('port', PORT);

const server = http.createServer(app);
const onError = () => {};
const onListening = () => {
    console.log('Listening on ' + PORT);
};
server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);
