import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-produto-detail',
  imports: [],
  templateUrl: './produto-detail.component.html',
  styleUrl: './produto-detail.component.scss'
})
export class ProdutoDetailComponent implements OnInit {

  produto!: Produto;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutoById(1).subscribe(
      (data) => {
        this.produto = data;
      },
      (error) => {
        console.error('Erro ao carregar detalhes do produto:', error);
      });
  }
}
