import { Component, Input } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {

  @Input() id = 0;
  @Input() title = "";
  @Input() img = "";
  @Input() price = "";
  @Input() description = '';
  @Input() category = '';

  constructor(private router: Router) { }

  viewDetails(id: number) {
    this.router.navigate(['produto', id]);
  }
}
