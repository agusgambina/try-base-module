require('dotenv').config();
const env = process.env.NODE_ENV;

console.log('try-base-module env->', env);

let baseUrl = '';
let protocol = 'https://';
let myapplicationPort = '';

switch (env) {
  case 'development':
  default:
    protocol = 'http://';
    baseUrl = 'localhost';
    myapplicationPort=':3000';
    break;
  case 'staging':
    baseUrl = 'staging.myapplication.com';
    break;
  case 'production':
    baseUrl = 'myapplication.com';
    break;
}

const myApplicationUri = `${protocol}${baseUrl}${myapplicationPort}`;

console.log('myApplicationUri ->', myApplicationUri);

module.exports.myApplicationsUri = myApplicationUri;
