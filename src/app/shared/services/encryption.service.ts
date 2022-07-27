import { Inject, Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

const SECRET_KEY = environment.encryption_key;

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  hash(key) {
    key = CryptoJS.SHA256(key, SECRET_KEY);

    return key.toString();
  }

  encrypt(data) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);
    data = data.toString();

    return data;
  }

  decrypt(data) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY);
    data = data.toString(CryptoJS.enc.Utf8);

    return data;
  }
}
