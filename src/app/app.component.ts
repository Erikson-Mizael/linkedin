import { Component, HostListener, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'linkedin';
  display: boolean = false;
  bola = document.getElementsByClassName('opcao-flutuante') as HTMLCollectionOf<HTMLElement>;
  clicado: boolean = false;
  x: number = 0;
  y: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.clicado) {
      this.bola[0].style.left = e.clientX - 30 + "px";
      this.bola[0].style.top = e.clientY - 30 + "px";

    }

  }


  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
  ngOnInit(): void {

  }

  mudarBola(event: PointerEvent, a: boolean): void {
    console.log(a);
    console.log(event.x);
  }

  mostrar_modal() {
    this.display = true;
  }

}
