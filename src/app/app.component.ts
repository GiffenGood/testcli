import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show = true;
  isBad = false;
  pos : string;
  currentHero = {
    name : 'david'
  }

  onMove(event : MouseEvent){
    this.pos = `${event.x},${event.y}`;
  }

  onTick(value : Date){
    console.log(value.toString());
  }
}
