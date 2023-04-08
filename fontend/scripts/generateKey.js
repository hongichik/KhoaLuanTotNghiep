const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { expand } = require('dotenv-expand');
const CryptoJS = require('crypto-js');

const result = dotenv.config();
expand(result);

let KeyEnCode = process.env.KEY_ENCODE;

if (!KeyEnCode) {
    KeyEnCode = uuidv4();
  const encodedEnCode = CryptoJS.AES.encrypt(KeyEnCode, KeyEnCode).toString();
  fs.writeFileSync('.env', `KEY_ENCODE=${encodedEnCode}\n`, { flag: 'a' });
}


console.log('Keys generated successfully!');

