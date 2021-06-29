import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowatdatabinding',
  templateUrl: './twowatdatabinding.component.html',
  styleUrls: ['./twowatdatabinding.component.css']
})
export class TwowatdatabindingComponent implements OnInit {
  newPost = 'To Way data-binding';
  enteredValue = '';
  onAddPost() {
    this.newPost = this.enteredValue;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
