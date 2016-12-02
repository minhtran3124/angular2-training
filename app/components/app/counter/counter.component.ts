import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <custom-counter [(counter)]="counterValue"></custom-counter>
    <p><code>counterValue = {{counterValue}}</code></p>
  `
})
export class CounterComponent {
  counterValue = 5;
}
