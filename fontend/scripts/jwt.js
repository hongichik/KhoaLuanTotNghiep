const fs = require('fs');
const { generateKeyPair } = require('crypto');
const path = require('path');

const dotenv = require('dotenv');

const passphrase = '123456789';
const keyPath = path.join(__dirname, '..', 'JWT', 'certs');

if (!fs.existsSync(keyPath)) {
  fs.mkdirSync(keyPath, { recursive: true });
}

generateKeyPair('rsa', {
  modulusLength: 1024,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase
  }
}, (err, publicKey, privateKey) => {
  if (err) {
    console.error(`Error generating RSA keypair: ${err.message}`);
    return;
  }

  fs.writeFileSync(path.join(keyPath, 'jwt-rsa-1024-public.pem'), publicKey);
  fs.writeFileSync(path.join(keyPath, 'jwt-rsa-1024-private.pem'), privateKey, { mode: 0o600 });

  const envPath = path.join(__dirname, '..', '.env');
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  envConfig.JWT_PRIVATE_KEY = `file://${keyPath}/jwt-rsa-1024-private.pem`;
  envConfig.JWT_PUBLIC_KEY = `file://${keyPath}/jwt-rsa-1024-public.pem`;
  envConfig.JWT_PASSPHRASE = passphrase;

  fs.writeFileSync(envPath, Object.keys(envConfig).map(key => `${key}=${envConfig[key]}`).join('\n'));
  
  console.log('RSA keypair generated successfully and environment variables updated!');
});
