import { Contato } from './../models/Contato';
import { Component } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.page.html',
  styleUrls: ['./lista-contatos.page.scss'],
})
export class ListaContatosPage {
  listaContatos: Contato[] = [];

  constructor(public storageService: StorageService,
    public alertController: AlertController) {}

  ionViewDidEnter(){
    this.buscarContatos();
  }

  async buscarContatos(){
    this.listaContatos = await this.storageService.getAll();
  }

  async removerContato(key: string){
    await this.storageService.remove(key);
    this.buscarContatos();
  }

}
