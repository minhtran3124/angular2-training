import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'custom-counter',
  templateUrl: 'custom-counter.component.html'
  // `
  //   <button (click)="decrement()">-</button>
  //   <span>{{counter}}</span>
  //   <button (click)="increment()">+</button>
  // `
})
export class CustomCounterComponent {

  counterValue = 0;
  @Output() counterChange = new EventEmitter<number>();

  @Input()
  get counter() {
    console.log('get counter');
    return this.counterValue;
  }

  set counter(val) {
    console.log('set counter');
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    console.log('decrement');
    this.counter--;
  }

  increment() {
    console.log('increment');
    this.counter++;
  }
}
