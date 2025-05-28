import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProdutoDetailComponent } from './components/produto-detail/produto-detail.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'produto/:id',
        component: ProdutoDetailComponent
    }
];
