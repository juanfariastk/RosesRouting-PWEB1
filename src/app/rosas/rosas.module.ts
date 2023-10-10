import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CriarRosasComponent } from './criar-rosas/criar-rosas.component';
import { ListagemRosasComponent } from './listagem-rosas/listagem-rosas.component';


@NgModule({
  declarations: [
    CriarRosasComponent,
    ListagemRosasComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FlexModule,
    RouterLink
  ],
  exports: [
    CriarRosasComponent,
    ListagemRosasComponent
  ]
})
export class RosasModule { }
