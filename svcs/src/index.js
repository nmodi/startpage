import 'babel-polyfill';
import {} from 'dotenv/config';

// import https from 'https';
import http from 'http';
import app from './app';
// import logger from './logger';


const port = process.env.PORT || 8080; 
http.createServer(app.callback()).listen(port);
// logger.info('http server running on port:', port);
console.log('http server running on port:', port);
