/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  //Cria ou busca um banco de dados no aparelho
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //Salva alguma coisa no banco de dados do aparelho
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  //Busca alguma coisa já salva no aparelho
  public get(key: string) {
    return this._storage?.get(key);
  }

  //Apaga alguma coisa do aparelho
  public remove(key: string) {
    return this._storage?.remove(key);
  }

  public async getAll() {
    const lista: any[] = [];

    await this.storage.forEach((value, key, index) => {
      lista.push(value);
    });

    return lista;
  }
}
