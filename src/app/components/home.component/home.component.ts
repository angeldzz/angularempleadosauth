import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home.component',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  constructor() {
  }
  ngOnInit(): void {
    console.log(localStorage.getItem("token"));
  }
}
