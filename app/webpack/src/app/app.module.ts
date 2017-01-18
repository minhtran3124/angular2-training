import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { AngularFireModule } from 'angularfire2/index';
import { initializeApp } from 'firebase';
import { firebaseConfig } from './firebase/firebase.config';

// import app component
import { AppComponent } from './app.component';

// import routing module
import { AppRoutingModule } from './routers/app-routing.module';

// import services
import { AlertService } from './services/alert.service';
import { TaskService } from './services/task.service';
import { TodoService } from './services/todo.service';
import { UserService } from './services/user.service';
import { DataService } from './services/firebase-database.service';
import { HelperFormService } from './helpers/form.helper';

// import page-not-found component
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// import register component
import { RegisterComponent } from './components/register/register.component';

// import login component
import { LoginComponent } from './components/login/login.component';

// import todo component
import { TodoComponent } from './components/todo/todo.component';

// import task component
import { TaskComponent } from './components/task/task.component';

initializeApp(firebaseConfig);

@NgModule({
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    TodoComponent,
    TaskComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AlertService,
    UserService,
    TaskService,
    TodoService,
    DataService,
    HelperFormService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
