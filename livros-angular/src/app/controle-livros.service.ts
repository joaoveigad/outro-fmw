// src/app/controle-livros.service.ts
import { Injectable } from '@angular/core';
import { Livro } from './Livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo A', autores: ['Autor A1', 'Autor A2'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo B', autores: ['Autor B1'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo C', autores: ['Autor C1', 'Autor C2', 'Autor C3'] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
