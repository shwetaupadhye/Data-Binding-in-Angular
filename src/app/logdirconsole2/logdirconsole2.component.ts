import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logdirconsole2',
  templateUrl: './logdirconsole2.component.html',
  styleUrls: ['./logdirconsole2.component.css']
})
export class Logdirconsole2Component implements OnInit {

  newPost = 'NO CONTENT';

onAddPost(postInput: HTMLTextAreaElement){
console.log(postInput);}
  constructor() { }

  ngOnInit(): void {
  }

}
