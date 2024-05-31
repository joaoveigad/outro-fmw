// src/app/controle-editora.service.ts
import { Injectable } from '@angular/core';
import { Editora } from './Editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    return this.editoras.filter(editora => editora.codEditora === codEditora)[0].nome;
  }
}
