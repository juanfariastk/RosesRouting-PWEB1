import { Component } from '@angular/core';
import { ROSAS } from '../../shared/modelo/ROSAS';
import { Rosa } from '../../shared/modelo/rosa';

@Component({
  selector: 'app-listagem-rosas',
  templateUrl: './listagem-rosas.component.html',
  styleUrls: ['./listagem-rosas.component.css']
})
export class ListagemRosasComponent {
  rosas = ROSAS;
  rosaEmEdicao: Rosa | null = null; 

  iniciarEdicao(rosa: Rosa): void {
    if (this.rosaEmEdicao === null) {
      this.rosaEmEdicao = { ...rosa };
    }
  }

  salvarEdicao(): void {
    if (this.rosaEmEdicao) {
      const rosaOriginal = this.rosas.find(rosa => rosa.nome === this.rosaEmEdicao!.nome);
  
      if (rosaOriginal) {
        rosaOriginal.nome = this.rosaEmEdicao.nome;
        rosaOriginal.tipo = this.rosaEmEdicao.tipo;
        rosaOriginal.cor = this.rosaEmEdicao.cor;
  
        this.rosaEmEdicao = null;
      }
    }
  }
  
  excluir(rosaAExcluir: Rosa): void {
    const indx = this.rosas.findIndex(rosa =>
      rosa.nome === rosaAExcluir.nome);

    this.rosas.splice(indx, 1);
  }
}
