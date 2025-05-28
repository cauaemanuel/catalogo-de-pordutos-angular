import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../service/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detail',
  imports: [],
  templateUrl: './produto-detail.component.html',
  styleUrl: './produto-detail.component.scss'
})
export class ProdutoDetailComponent implements OnInit {

  produto!: Produto;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id) {
        this.produtoService.getProdutoById(Number(id)).subscribe(
          (data) => {
            this.produto = data;
          },
          (error) => {
            console.error('Erro ao carregar detalhes do produto:', error);
          });
      }
    });
  }
}
