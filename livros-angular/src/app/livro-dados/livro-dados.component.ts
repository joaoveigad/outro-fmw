import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from 'caminho/do/servico/editora';
import { ControleLivrosService } from 'caminho/do/servico/livros';
import { Editora } from 'caminho/do/modelo/editora';
import { Livro } from 'caminho/do/modelo/livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro();
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.servEditora.getEditoras().subscribe(editoras => this.editoras = editoras);
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
