import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logdirconsole',
  templateUrl: './logdirconsole.component.html',
  styleUrls: ['./logdirconsole.component.css']
})
export class LogdirconsoleComponent implements OnInit {
  newPost = 'NO CONTENT';

  onAddPost(ariaAutoComplete: HTMLTextAreaElement) {
    console.dir(ariaAutoComplete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
