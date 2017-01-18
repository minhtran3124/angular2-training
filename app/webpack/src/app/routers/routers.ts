import { Routes } from '@angular/router';

// import component related routing
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { TodoComponent } from '../components/todo/todo.component';
import { TaskComponent } from '../components/task/task.component';

// define routing
export const appRoutes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'todo/:id', component: TaskComponent },
  { path: '**', component: PageNotFoundComponent }
];
