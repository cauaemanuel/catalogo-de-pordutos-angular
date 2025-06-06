import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoComponent } from "./components/produto/produto.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProdutoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Catalogo-De-Produtos';
}
