import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoCobrinhaComponent } from './jogo-cobrinha.component';

const routes: Routes = [{ path: '', component: JogoCobrinhaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogoCobrinhaRoutingModule { }
