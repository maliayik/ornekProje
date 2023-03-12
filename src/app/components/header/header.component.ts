import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() {

    this.setTitle();
  }
  

  tittle: string = 'Örnek Proje';

  setTitle() {
    this.tittle ='Yeni Değer'
  }

  

}

