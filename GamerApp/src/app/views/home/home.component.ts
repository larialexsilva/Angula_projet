import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public text!: string;

  classToDiv = {};
  
  constructor() {

    this.classToDiv = {
      'text-success': true
    };
  }   
  
    ngOnInit() {
      this.titulo! = 'Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      this.titulo! = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae molestiae natus itaque alias dolorum consequatur aperiam similique cum, incidunt laboriosam amet facilis cumque maxime iure inventore explicabo, quis dolorem.'
  }

}
