import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'jogo-cobrinha', loadChildren: () => import('./models/jogo-cobrinha/jogo-cobrinha.module').then(m => m.JogoCobrinhaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
