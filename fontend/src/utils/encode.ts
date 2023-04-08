import CryptoJS from 'crypto-js';

export const EnCode = (key:string) =>{
    const ciphertext = CryptoJS.AES.encrypt(key, process.env.KEY_ENCODE ||'').toString();
    return ciphertext;
}

export const DeCode = (key: string) =>{
    const decryptedBytes = CryptoJS.AES.decrypt(key, process.env.KEY_ENCODE || '');
    const decryptedPlaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedPlaintext;
}
