import { Injectable, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { EncryptionService } from "./encryption.service";
// import { LOCAL_STORAGE } from "ngx-webstorage";
// import { LOCAL_STORAGE } from "ngx-webstorage";

declare const Buffer;
class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number;
  clear(): void {}
  getItem(key: string): string | null {
    return null;
  }
  key(index: number): string | null {
    return null;
  }
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}

type StorageType = "Cookie" | "LocalStorage";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService implements Storage {
  private storage: Storage;
  private date: Date = new Date();
  currentUserKey = "sotang";

  constructor(
    // @Inject(PLATFORM_ID) private platformId: any,
    // private cookies: CookieService,
    private encryptionService: EncryptionService // @Inject(LOCAL_STORAGE) private localStorage
  ) {
    this.storage = new LocalStorage();

    if (isPlatformBrowser(this.platformId)) {
      this.storage = window.localStorage;
    }
  }

  [name: string]: any;

  length: number;

  clear(): void {
    this.storage.clear();
  }

  getItem(
    key: string,
    storageType: StorageType = "LocalStorage"
  ): string | null {
    if (storageType === "LocalStorage") {
      let rawData = this.storage.getItem(key);
      if (rawData) return this.encryptionService.decrypt(rawData);
      else return null;
    }
  }

  key(index: number): string | null {
    return null;
    //return this.storage.key(index);
  }

  removeItem(key: string, storageType: StorageType = "LocalStorage"): void {
    if (storageType === "Cookie") this.cookies.remove(key);
    else this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, this.encryptionService.encrypt(value));
  }

  decodeBase64(base64String: string) {
    if (isPlatformBrowser(this.platformId)) {
      return window.atob(base64String);
    } else {
      return Buffer.from(base64String, "base64").toString();
    }
  }

  // getJWTToken() {
  //   let enc_token = this.cookies.get("_token");
  //   if (enc_token) return this.encryptionService.decrypt(enc_token);
  //   else return null;
  // }

  // setJWTToken(token: string) {
  //   this.cookies.put("_token", this.encryptionService.encrypt(token), {
  //     expires: new Date(this.date.setMonth(this.date.getMonth() + 4)),
  //   });
  // }

  setCurrentUser(userData: string) {
    this.setItem(this.currentUserKey, userData);
  }

  // updateLocalstorage(key, updatedValue) {
  //   this.localStorage.set(
  //     key,
  //     this.encryptionService.encrypt(JSON.stringify(updatedValue))
  //   );
  // }

  // getCurrentUser(): LoginResponseDto | null {
  getCurrentUser(): any | null {
    return JSON.parse(this.getItem(this.currentUserKey));
  }
}
