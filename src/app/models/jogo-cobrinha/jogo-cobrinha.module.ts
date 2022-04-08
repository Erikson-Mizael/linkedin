import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoCobrinhaRoutingModule } from './jogo-cobrinha-routing.module';
import { JogoCobrinhaComponent } from './jogo-cobrinha.component';


@NgModule({
  declarations: [
    JogoCobrinhaComponent
  ],
  imports: [
    CommonModule,
    JogoCobrinhaRoutingModule
  ]
})
export class JogoCobrinhaModule { }
