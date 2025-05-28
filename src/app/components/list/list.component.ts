import { Component } from '@angular/core';
import { ProdutoComponent } from "../produto/produto.component";

@Component({
  selector: 'app-list',
  imports: [ProdutoComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
