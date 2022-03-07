import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-scroll-offset-tester';
  testElementsLength = 100;
  testArray = Array(this.testElementsLength).fill(0).map((x,i)=>i);

  windowScrollOffset(event: number) {
    console.log("Window scroll offset:" + event);
  }

  elementScrollOffset(event: number) {
    console.log("Element scroll offset:" + event);
  }
}
