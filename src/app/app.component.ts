import { Component } from '@angular/core';

const styles = {
  bad: true,
  ugly: true
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show = true;
  isBad = false;
  pos: string;
  classes = styles;

  currentHero = {
    name: 'david'
  };

  onMove(event: MouseEvent) {
    this.pos = `${event.x},${event.y}`;
  }

  onTick(value: Date) {
    console.log(value.toString());
    // if (this.classes) {
    //   this.classes = undefined;
    // }
    // else {
    //   this.classes = styles;
    // }

  }
}
