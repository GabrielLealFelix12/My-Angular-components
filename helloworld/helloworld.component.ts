import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: 'helloworld.component.html',
  styleUrls: ['helloworld.component.css']
})
export class HelloWorldComponent {
  hellothere(){
  alert('hello there');
  }
}
