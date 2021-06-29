import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding1',
  templateUrl: './databinding1.component.html',
  styleUrls: ['./databinding1.component.css']
})
export class Databinding1Component implements OnInit {
  newPost = 'NO CONTENT';

  onAddPost() {
    this.newPost = 'Hello from Angular';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
