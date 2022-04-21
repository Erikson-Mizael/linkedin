import { Component, OnInit } from '@angular/core';
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

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
  ngOnInit(): void {

  }

  clck() {
    document.addEventListener('mousemove', (event) => {
      console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
      const x = event.clientX;
      const y = event.clientY
      console.log(this.clicado);
      if (this.clicado) {
        this.bola[0].style.left = x - 30 + "px";
        this.bola[0].style.top = y -30 + "px";
      }
    });
  }

  mudarBola(event: PointerEvent, a: boolean): void {
    console.log(a);
    console.log(event.x);
  }

  mostrar_modal() {
    this.display = true;
  }

}
