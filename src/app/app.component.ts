import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'linkedin';
  items!: MenuItem[];
  display: boolean = false;


  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Download', icon: 'pi pi-fw pi-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
        { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' }
      ]
    }];

  }

  mostrar_modal() {
    this.display = true;
  }

}
