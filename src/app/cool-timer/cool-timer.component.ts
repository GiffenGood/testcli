import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cool-timer',
  templateUrl: './cool-timer.component.html',
  styleUrls: ['./cool-timer.component.css']
})
export class CoolTimerComponent implements OnInit {
  @Output()
  timeTick = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
    setInterval(()=>{
      this.tick();
    },1000);
  }

  tick() {
    console.log('emmiting');
    this.timeTick.emit(new Date);
  }

}
