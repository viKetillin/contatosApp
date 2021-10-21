import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaContatosPageRoutingModule } from './lista-contatos-routing.module';

import { ListaContatosPage } from './lista-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaContatosPageRoutingModule
  ],
  declarations: [ListaContatosPage]
})
export class ListaContatosPageModule {}
