import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero/hero-child.component';
import { HeroParentComponent } from './hero/hero-parent.component';
import { CustomCounterComponent } from './counter/custom-counter.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    CustomCounterComponent,
    CounterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
