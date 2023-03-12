import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = [{}];


  constructor() { }


   ngOnInit(): void {

    this.users = [
      {
        name: 'Mehmet',
        age: 25
      },

      {
        name: 'Ahmet',
        age: 30
      },

    ]
  }

  





}
