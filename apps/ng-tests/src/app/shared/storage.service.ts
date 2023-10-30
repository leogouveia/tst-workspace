import { Injectable } from '@angular/core';

@Injectable()
export class StorageService<T> {
  get(key: string): T | null {
    const value = localStorage.getItem(`ng_key__${key}`);
    return value ? JSON.parse(value) : null;
  }

  set(key: string, value: T) {
    localStorage.setItem(`ng_key__${key}`, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  removeExpired(expired: any) {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        keys.push(key);
      }
    }
    for (const key of keys) {
      const value = localStorage.getItem(key);
      if (value) {
        const entry = JSON.parse(value);
        if (entry.lastRead < expired) {
          localStorage.removeItem(key);
        }
      }
    }
  }

  size() {
    return localStorage.length;
  }
}
