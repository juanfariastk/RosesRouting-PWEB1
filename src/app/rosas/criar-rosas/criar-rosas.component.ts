import { Component } from '@angular/core';
import { ROSAS } from '../../shared/modelo/ROSAS';
import { Rosa } from '../../shared/modelo/rosa';

@Component({
  selector: 'app-criar-rosas',
  templateUrl: './criar-rosas.component.html',
  styleUrls: ['./criar-rosas.component.css']
})
export class CriarRosasComponent {

  rosaCriada: Rosa;
  cadastroAtivo = true;
  nomeBotao = 'Cadastrar';

  rosas = ROSAS;

  constructor() {
    this.rosaCriada = new Rosa('', '', '');
  }

  criacao(): void {
    if (this.cadastroAtivo && this.rosaCriada) {
      this.rosas.push(this.rosaCriada);
    }

    this.rosaCriada = new Rosa('', '', '');
    this.nomeBotao = 'Cadastrar';

  }
}
