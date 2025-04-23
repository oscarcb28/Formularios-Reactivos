import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: RegisterComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'test', component: TestComponent},
    { path: '**', component: PageNotFoundComponent}

];
