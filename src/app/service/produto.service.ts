import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;

}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) { }

  getProdutos() {
    return this.httpClient.get<Produto[]>(this.apiUrl);
  }

  getProdutoById(id: number) {
    return this.httpClient.get<Produto>(`${this.apiUrl}/${id}`);
  }
}
