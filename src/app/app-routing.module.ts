import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarRosasComponent } from './rosas/criar-rosas/criar-rosas.component';
import { ListagemRosasComponent } from './rosas/listagem-rosas/listagem-rosas.component';
import { ListagemUsuariosComponent } from './usuario/listagem-usuarios/listagem-usuarios.component';
import { MantemUsuarioComponent } from './usuario/mantem-usuario/mantem-usuario.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'listagemrosas',
    component: ListagemRosasComponent
  },
  {
    path: 'cadastrorosas',
    component: CriarRosasComponent
  },
  {
    path: 'editarosas/:id',
    component: ListagemRosasComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
