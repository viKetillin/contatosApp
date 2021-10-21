import { Contato } from './../models/Contato';
import { StorageService } from '../service/storage.service';
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formCadastro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é Obrigatório!' },
      {
        tipo: 'minlength',
        mensagem: 'O Nome precisa ter pelo menos 3 caracteres!',
      },
    ],
    telefone: [
      { tipo: 'required', mensagem: 'O campo Telefone é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O telefone precisa ter 13 caracteres!',
      },
      {
        tipo: 'maxlength',
        mensagem: 'O telefone precisa ter 13 caracteres!',
      },
    ],
  };

  constructor(
    public formBuilder: FormBuilder,
    private storageService: StorageService,
    public alertController: AlertController,
    public route: Router
  ) {
    this.formCadastro = formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      telefone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
      ],
    });
  }

  salvarCadastro() {
    const contato = new Contato();

    if (this.formCadastro.valid) {
      contato.nome = this.formCadastro.value.nome;
      contato.telefone = this.formCadastro.value.telefone;

      this.storageService.set(contato.telefone, contato);
      console.log('Contato:', contato);

      this.exibirMensagem(contato.nome + ' salvo com sucesso!');

      this.route.navigateByUrl('/lista-contatos');
    } else {
      this.exibirMensagem('Formulário Inválido!');
    }
  }

  async exibirMensagem(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'SISTEMA',
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
