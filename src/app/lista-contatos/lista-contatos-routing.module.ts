import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaContatosPage } from './lista-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaContatosPageRoutingModule {}
