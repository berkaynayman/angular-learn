import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = [
    {
      name: 'Berkay',
      age: 21
    },
    {
      name: 'Temel',
      age: 61
    },
    {
      name: 'Ali',
      age: 53
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
